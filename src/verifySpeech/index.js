import { showMessage } from "react-native-flash-message";
import RNFetchBlob from "rn-fetch-blob";
import useUserSpeechProfile from "store/speechProfile";
import { GetData } from "utils";
import { DownloadFile } from "utils/DownloadFile";

const endpoint = "https://westus2.api.cognitive.microsoft.com/";
const subscriptionKey = "456e123016e8461ebe0e9fe59f5168ed";
const serviceRegion = "westus2"; // e.g., "westus"
const locale = "en-us";
export const initSpeechService = async () => {
    let response = await fetch(endpoint + 'speaker/verification/v2.0/text-independent/profiles', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        },
        body: JSON.stringify({
            locale: locale,
        })
    });
    const json = await response.json();
    console.log("init" + JSON.stringify(json));
    if (json?.profileId)
        return json?.profileId;
    else throw new Error("Failed to get Profile id");
}
export const enrollVoiceFile = async (profileId, fileUrl) => {
    console.log("file url is ", fileUrl);
    const response = await RNFetchBlob.fetch("POST", endpoint +
        'speaker/verification/v2.0/text-independent/profiles/' + profileId + '/enrollments',
        {
            Accept: 'application/json',
            'Content-Type': 'audio/wav',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        },
        RNFetchBlob.wrap(fileUrl)
    )
    const json = await response.json();
    console.log("enroll response" + JSON.stringify(json));
    return json;
}
export const verifyVoiceFile = async (profileId, fileUrl) => {
    const response = await RNFetchBlob.fetch("POST", endpoint +
        'speaker/verification/v2.0/text-independent/profiles/' + profileId + '/verify',
        {
            Accept: 'application/json',
            'Content-Type': 'audio/wav',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        },
        RNFetchBlob.wrap(fileUrl))
    const json = await response.json();
    console.log("verify response" + JSON.stringify(json));
    return json;
}
export const removeProfileId = async (profileId) => {
    const response = await fetch(endpoint +
        'speaker/verification/v2.0/text-independent/profiles/' + profileId,
        {
            method: "DELETE",
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Content-Type': 'application/json'
            }
        });
    console.log(" remove response" + JSON.stringify(response))

}

export const speechToText = async (fileUrl) => {
    try {
        const response = await RNFetchBlob.fetch("POST", 'https://westus2.stt.speech.microsoft.com/speech/recognition/interactive/cognitiveservices/v1?language=en-US',
            {
                'Content-Type': 'audio/wav; codec=audio/pcm; samplerate=16000',
                'Transfer-Encoding': 'chunked',
                'Ocp-Apim-Subscription-Key': subscriptionKey
            },
            RNFetchBlob.wrap(fileUrl))
        const json = await response.json();
        console.log("response " + JSON.stringify(json));
        return json;
    } catch (e) {
        console.log("Error" + JSON.stringify(e))
    }


}
export const PrepareRequirementForViceScan = async () => {
    console.log("Scan voice urlsss")
    try {
        var scanVoiceUrl = await GetData('SCAN_VOICE_PATH');
        console.log("Scan voice urdddl" + scanVoiceUrl)
        if (!scanVoiceUrl) {
            let user = await GetData('USER_INFO');
            let voicePath;
            if (user?.scanVoice)
                voicePath = await DownloadFile(user?.scanVoice);
            if (voicePath?.path)
                scanVoiceUrl = voicePath.path;
            console.log("Scan voice url" + scanVoiceUrl)
        }
        if (scanVoiceUrl) {
            let profileId = await initSpeechService();
            if (profileId) {
                let enrollResponse = await enrollVoiceFile(profileId, scanVoiceUrl);
                console.log("enrollResponse  " + JSON.stringify(enrollResponse));
                if (
                    enrollResponse?.enrollmentStatus === "Enrolled"
                ) {
                    return (profileId);
                }
                else if (enrollResponse?.remainingEnrollmentsSpeechLength &&
                    enrollResponse.remainingEnrollmentsSpeechLength != 0) {
                    await removeProfileId(profileId);
                    return null;
                }
                else if (enrollResponse?.error) {
                    showMessage({
                        message: 'Error in Create profile',
                        type: 'danger'
                    });
                    return;
                }
            }
            else {
                showMessage({
                    message: 'Error in Create profile',
                    type: 'danger'
                });
                return;
            }
        }
        else {
            showMessage({
                message: 'It seems your voice has not been scanned!',
                type: 'danger'
            });
            return;
        }
    } catch (e) {
        console.log("error sss" + JSON.stringify(e))
    }
}
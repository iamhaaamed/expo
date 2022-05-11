import { PermissionsAndroid } from "react-native";

export const CheckPermission =async(permission=PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)=>{
    try {
        const granted = await PermissionsAndroid.request(
            permission
        )
        if (granted != PermissionsAndroid.RESULTS.GRANTED) {
            alert("Permission denied");
            console.warn("Permission denied")
        }
        else{
            console.warn("Permission granted");
        }
    } catch (err) {
        console.warn(err)
    }
}
export const reviewOptions = {
    sampleRate: 16000,  // default 44100
    channels: 1,        // 1 or 2, default 1
    bitsPerSample: 16,  // 8 or 16, default 16
    audioSource: 6,     // android only (see below)
    wavFile: 'review.wav' // default 'audio.wav'
};
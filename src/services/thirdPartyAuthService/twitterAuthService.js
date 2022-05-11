import RNTwitterSignIn from "@react-native-twitter-signin/twitter-signin";
import { Alert } from "react-native";
const Constants = {
    //Dev Parse keys
    TWITTER_COMSUMER_KEY: 'qWPj1TXbreMX1SsDvdiQTaF7Y',
    TWITTER_CONSUMER_SECRET: '4t0cRfGWXZvySIa5sS0M38AnT8a8B8hwcX2lZiaStSWStD4B4Z',
};
class TwitterAuthService {
    signIn = async () => {
        try {
            const gidResult = await RNTwitterSignIn.logIn();

            const { authToken } = gidResult;

            return { accessToken: authToken, fullResult: gidResult,authTokenSecret: gidResult.authTokenSecret };
        } catch (error) {
            
                Alert.alert(error);
        }
    };
}

const twitterAuthService = new TwitterAuthService();
export default twitterAuthService;

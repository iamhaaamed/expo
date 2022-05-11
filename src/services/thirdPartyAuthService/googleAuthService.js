import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

class GoogleAuthService {
    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();

            const gidResult = await GoogleSignin.signIn();

            const { idToken } = gidResult;

            return { accessToken: idToken, fullResult: gidResult };
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert('Cancelled by user');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Already signin in');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('Google play services not available');
            } else {
                alert(error);
            }
        }
    };
}

const googleAuthService = new GoogleAuthService();
export default googleAuthService;

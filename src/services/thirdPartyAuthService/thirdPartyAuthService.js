import firebaseAuthService from "./firebaseAuthService";
import googleAuthService from "./googleAuthService";
import facebookAuthService from "./facebookAuthService";
import twitterAuthService from "./twitterAuthService";
class ThirdPartyAuthService {
  loginWithGoogle = async () => {
    let email;
    try {
      firebaseAuthService.signOut();
      const { accessToken, fullResult: googleLoginResult } =
        await googleAuthService.signIn();

      email = googleLoginResult?.user?.email;

      if (!email) {
        throw new Error("Please accept the email permission");
      }

      const { idToken, user } = await firebaseAuthService.signInWithThirdParty(
        "google",
        accessToken,
        email
      );

      if (!idToken || !user) {
        return {
          success: false,
          thirdPartyAccessToken: null,
          firebaseIdToken: null,
          firebaseUser: null,
        };
      }

      return {
        success: true,
        thirdPartyAccessToken: accessToken,
        firebaseIdToken: idToken,
        firebaseUser: user,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        thirdPartyAccessToken: null,
        firebaseIdToken: null,
        firebaseUser: null,
      };
    }
  };
  loginWithFacebook = async () => {
    let email;

    try {
      facebookAuthService.signOut();
      firebaseAuthService.signOut();

      const { accessToken, fullResult } = await facebookAuthService.signIn();
      console.log("accessTooooooooooken::: ", accessToken);
      email = fullResult.user?.id;

      if (!email) {
        console.log("iiiiiiiiiii ", id);
        throw new Error("Couldn't get user email address");
      }
      console.log("====================================********");
      console.log(email);
      console.log("====================================");
      const { idToken, user } = await firebaseAuthService.signInWithThirdParty(
        "facebook",
        accessToken
      );
      console.log("====================================idToken");
      console.log(idToken);
      console.log("====================================");
      if (!idToken || !user) {
        return {
          success: false,
          thirdPartyAccessToken: null,
          firebaseIdToken: null,
          firebaseUser: null,
        };
      }

      return {
        success: true,
        thirdPartyAccessToken: accessToken,
        firebaseIdToken: idToken,
        firebaseUser: user,
      };
    } catch (error) {
      console.error(error);
      // snackBarService.failed({}, `Something went wrong: ${error?.message ?? 'Please try Again'}`);
      return {
        success: false,
        thirdPartyAccessToken: null,
        firebaseIdToken: null,
        firebaseUser: null,
      };
    }
  };
  loginWithTwitter = async ()=>{
    try {
      firebaseAuthService.signOut();
      const { accessToken, authTokenSecret } =
        await twitterAuthService.signIn();
      const { idToken, user } = await firebaseAuthService.signInWithThirdParty(
        "twitter",
        accessToken,
        null,
        authTokenSecret
      );

      if (!idToken || !user) {
        return {
          success: false,
          thirdPartyAccessToken: null,
          firebaseIdToken: null,
          firebaseUser: null,
        };
      }

      return {
        success: true,
        thirdPartyAccessToken: accessToken,
        firebaseIdToken: idToken,
        firebaseUser: user,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        thirdPartyAccessToken: null,
        firebaseIdToken: null,
        firebaseUser: null,
      };
    }
  };
}

const thirdPartyAuthService = new ThirdPartyAuthService();
export default thirdPartyAuthService;

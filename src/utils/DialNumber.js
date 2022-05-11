import { Alert, Linking, Platform } from "react-native";

export function DialNumber (number)  {
  try {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt://${number}`;
    }

    Linking.canOpenURL(phoneNumber)
    .then(supported=>{
     // if(!supported) Alert.alert("phone number not supported!"+phoneNumber)
      return Linking.openURL(phoneNumber)
    }).catch(err=>console.log(err+"*****"));
    
  } catch (error) {
    console.log("catch error"+error)
    
  }
 }
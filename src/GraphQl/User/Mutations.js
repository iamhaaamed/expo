import { gql } from 'graphql-request';
export const USER_UPDATE_PROFILE = gql`
mutation($userInput:User_Input,$userId:Int!){
    user_updateProfile(userInput:$userInput,userId:$userId){
      result{
        isActive
        id
        email
        phoneNumber
        photoUrl
        fullName
        scanVoice
      }
      status
    }
  }
`
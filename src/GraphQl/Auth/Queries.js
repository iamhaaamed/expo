import { gql } from 'graphql-request';

export const DO_SIGN_IN = gql`
    query {
        user_signIn {
            status
            result {
                id
                fullName
                email
                bio
                phoneNumber
                photoUrl
                scanVoice
            }
        }
    }
`;
export const GET_USER_BY_INVITECODE = gql`
    query($inviteCode: String) {
        user_getUserByInviteCode(inviteCode: $inviteCode) {
            result {
                provider {
                    providerName
                    id
                    doctorId
                    userId
                    veterinarianId
                    nutritionExpertId
                }
                firstName
                lastName
                mobile
                id
            }
            status
        }
    }
`;
`
query($hotelId: Int) {
    hotel_getHotel(hotelId:$hotelId) {
      result {
        codeNumber
        telNumber
        photoUrl
        photoMapUrl
        name
        about
        description
        recommended
        isAvailable
        rooms{
          name
          ratings{
            rate
          }
        }
        ratings{
          rate
        }
        comments{
          body
          voiceUrl
        }
        hotelPhotos{
          photoUrl
        }
        orders{
          price
          orderType
          paymentStatus
          
        }
        locations{
          country
          province
          city
          address
          streeet
          positionOnMap
          description
        }
        restaurants{
          name
          description
          menu
          photoUrl
          
        }
        operatorHotel{
          operator{
            photoUrl
            fullName
          }
        }
        id
        isDeleted
      }
      status
      message
    }
  }
  `;

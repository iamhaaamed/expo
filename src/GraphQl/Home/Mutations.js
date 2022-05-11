import { gql } from 'graphql-request';
export const BOOKING_RESERVING_DINNING = gql`
mutation($diningInput:Dining_Input){
    booking_reservingDining(diningInput:$diningInput){
      result{
        id
      }
      status
    }
  }
  `
export const BOOKING_CREATE_DINNING_PAYMENT= gql`
mutation($amount: Long!, $currency: String!, $diningId: Int!){
  booking_createDiningPayment(amount: $amount, currency: $currency, diningId: $diningId){
         result{
      id
    }
    status
  }
}`

export const BOOKING_CREATE_DINNING_PAYMENT2= gql`
mutation($amount: Long!, $currency: String!, $diningInputs: Dining_Input!){
  booking_createDiningPayment2(amount: $amount, currency: $currency, diningInputs: $diningInputs){
         result{
      id
    }
    status
  }
}
`

export const CREATE_SERVICE_REQUEST = gql`
mutation($requestInput: Request_Input) {
  booking_createRquest(requestInput:$requestInput) {
    result {
      createAt
      forAt
      userId
      hotelId
      processingStatuse
      id
      isDeleted
    }
    status
    message
  }
}
`

export const HOTEL_INSERT_RATE= gql`
mutation($ratingInput:Rating_Input){
  hotel_insertRateForRoom(ratingInput:$ratingInput){
    result{
      id
    }
    status
  }
}
`

export const HOTEL_INSERT_COMMENT = gql`
mutation($commentInput: Comment_Input){
  hotel_insertCommentForRoom(commentInput:$commentInput){
    result{
      id
    }
    status
  }
}`
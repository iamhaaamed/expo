import { gql } from 'graphql-request';
export const GET_CURRENT_HOTEL = gql`
query($userId:Int!){
  hotel_getCurrentHotel(userId:$userId){
    result{
      currentHotel{
        id
        name
        photoUrl
        photoMapUrl
        restaurants{
          telNumber
          bar
          name
          photoUrl
          hotelId
          description
          bar
          kitchen
          menu
        }
        hotelPhotos{
          photoUrl
          title
          view
        }
        ratings{
          rate
        }
        comments{
          body
          commentStatus
        }
        locations{
          streeet
          address
          city
          province
          country
        }
        telNumber
        description
        description2
        about
      }
      reservationInfo{
        stayNight
        id
        room{
          lineDirection
          floors
          roomSubLine
          id
        }
      }
      recommendedHotels{
        id
        name
        photoUrl
        
      }
    }
    status
  }
}
`
export const GET_MY_ORDER_DINNING = gql`
query($userId: Int!){
  booking_getMyOrderDining(userId:$userId){
    result{
      items{
        diningItems{
          diningType
          number
        }
        price
        processingStatuse
        createAt
        inRoomDining
        deliverToRoom
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
    status
  }
}`

export const HOTEL_LOCK_AND_UNLOCK = gql`
query($lockDoor:Lock!,$reservationId:Int!){
  hotel_lockAndUnlockDoor(lockDoor:$lockDoor,reservationId:$reservationId){
    result{
      key
      value
    }
    status
  }
}`

export const  GET_ALL_MY_REQUEST= gql`
query($userId:Int!,$skip:Int,$take:Int){
  booking_getAllMyRequests(userId:$userId){
    result(where:{isDeleted:{eq:false}},skip:$skip,take:$take){
      items{
        createAt
        forAt
        processingStatuse
        isDeleted
        requestItems{
          number
          orderType
        }
      }
    }
  }
}
`

export const HOTEL_NAVIGATE_TO_MY_ROOM= gql`
query($position:PointInput, $roomId:Int!){
  hotel_navigateToRoom(position:$position,roomId:$roomId){
    result
    status
    message
  }
}
`
export const HOTEL_GET_RATINGS= gql`
query($roomId:Int){
  report_ratingReport{
    result(where:{roomId:{eq:$roomId}}){
      items{
        rate
        roomId
        userId      
      }
      totalCount
      pageInfo{
        hasNextPage
      }
    }
    status
  }
}
`

export const HOTEL_GET_COMMENTS = gql`
query ($roomId: Int) {
  report_commentReport {
    result(where: { and: [{ roomId: { eq: $roomId } },{commentStatus:{eq:PUBLISHED}}] }) {
      items {
        body
        isVoice
        createAt
        commentStatus
        roomId
        userId
        room{
          roomNumber
        }
      }
      pageInfo{
        hasNextPage
      }
      totalCount
    }
    status
  }
}
`
export const HOTEL_GET_COMMENTS_RATES = gql`
query ($roomId: Int!) {
  hotel_getCommentsWithRates(roomId:$roomId){
    result{
      comments{
        body
        userId
        commentStatus
        createAt
        room{
          roomNumber
        }
        user{
          fullName
        }
      }
      rates{
        rate
        userId
      }
    }
    
  }
}
`
import { gql } from 'graphql-request';
export const GET_USER_FAVORITES = gql`
query (
    $skip: Int
    $take: Int
    $userId: Int!
  ) {
    user_getFavorites(userId: $userId) {
        result(skip: $skip, take: $take) {
          items{
            id
            hotel{
              photoUrl
              name
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
export const GET_HISTORY_BOOKING = gql`
query (
    $skip: Int
    $take: Int
    $userId: Int!
  ) {
    booking_getMyHistoryBooking(userId: $userId) {
        result(skip: $skip, take: $take) {
          items{
            id
            name
            hotelPhotos {
              photoUrl
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
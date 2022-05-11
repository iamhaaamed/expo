import { gql } from 'graphql-request';
export const HOTEL_ADD_TOFAVORITE = gql`
    mutation($hotelId: Int!, $userId: Int!) {
        hotel_addToFavorite(hotelId: $hotelId, userId: $userId) {
            result {
                createAt
                userId
                hotelId
                id
                isDeleted
            }
            status
            message
        }
    }
`;
export const CREATE_RESERVATION_PAYMENT = gql`
    mutation($currency: String, $amount: Int!, $reservationId: Int!) {
        booking_CreateReservationPayment(
            currency: $currency
            amount: $amount
            reservationId: $reservationId
        ) {
            result {
                id
                isDeleted
            }
            status
            message
        }
    }
`;
export const BOOKING_RESERVATIONROOM = gql`
    mutation($reservationInputs: Reservation_Input) {
        booking_testReservingRoom(reservationInputs: $reservationInputs) {
            result {
                id
            }
            status
        }
    }
`;

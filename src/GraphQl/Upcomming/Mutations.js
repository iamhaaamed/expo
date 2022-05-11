import { gql } from 'graphql-request';
export const BOOKING_CHECKIN = gql`
    mutation($reservatinId: Int!) {
        booking_checkin(reservatinId: $reservatinId) {
            result {
                checkIn
                checkOut
                createAt
                arrivalAt
                lateCheckOut
                numberOfAdults
                numberOfChilds
                childrensAge
                govermenttMilitary
                lowesRegularRate
                aAACAA
                seniorDiscount
                userId
                roomId
                hotelId
                stayNight
                flexibleTime
                paymentStatus
                reservedStatus
                currency
                price
                isCheckIn
                intentId
                intentStatus
                clientSecret

                room {
                    name
                    floors
                    roomFacilities {
                        title
                        description
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

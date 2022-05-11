import { gql } from 'graphql-request';

export const UPCOMMING_RESERVATION = gql`
    query($userId: Int!, $skip: Int, $take: Int) {
        booking_upcommingReservation(userId: $userId) {
            result(skip: $skip, take: $take) {
                items {
                    reservation {
                        id
                        checkIn
                        checkOut
                        numberOfAdults
                        numberOfChilds
                        stayNight
                        govermenttMilitary
                        lowesRegularRate
                        aAACAA
                        seniorDiscount
                    }
                    hotel {
                        name
                        photoUrl
                        description
                        description2
                        telNumber
                        locations {
                            description
                            city
                            country
                            province
                            positionOnMap
                            address
                            streeet
                        }
                        hotelPhotos {
                            photoUrl
                        }
                        ratings {
                            rate
                        }
                        comments {
                            body
                            createAt
                            room {
                                name
                                roomCode
                            }
                            user {
                                fullName
                            }
                        }
                    }
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                }
                totalCount
            }
            status
        }
    }
`;

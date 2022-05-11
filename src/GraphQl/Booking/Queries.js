import { gql } from 'graphql-request';

export const Hotel_GetHotels = gql`
    query($hotelId: Int!) {
        hotel_getHotel(hotelId: $hotelId) {
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
                rooms {
                    name
                    ratings {
                        rate
                    }
                }
                ratings {
                    rate
                }
                comments {
                    body
                    voiceUrl
                }
                hotelPhotos {
                    photoUrl
                    title
                    view
                }
                orders {
                    price
                    orderType
                    paymentStatus
                }
                locations {
                    country
                    province
                    city
                    address
                    streeet
                    positionOnMap
                    description
                }
                restaurants {
                    name
                    description
                    menu
                    photoUrl
                }
                operatorHotel {
                    operator {
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
export const GET_RECOMENDEDHOTELS = gql`
    query($userId: Int!) {
        booking_getRecommendedHotels(userId: $userId) {
            result {
                bookedHotels {
                    photoUrl
                    name
                    id
                }
                recommendedHotels {
                    photoUrl
                    name
                    id
                }
            }
            status
            message
        }
    }
`;
export const GET_LISTOFHOTELS = gql`
    {
        hotel_getListOfHotels(availablity: true) {
            result {
                items {
                    photoUrl
                    name
                    id
                }
                totalCount
            }
            status
        }
    }
`;
export const FILTER_ROOM_AVALABLE = gql`
    query(
        $hotelId: Int!
        $roomAvailabilityInput: RoomAvailability_Input
        $skip: Int
        $take: Int
        $where: RoomFilterInput
    ) {
        booking_filterRoomAvailability(
            roomAvailabilityInput: $roomAvailabilityInput
            hotelId: $hotelId
        ) {
            result(skip: $skip, take: $take, where: $where) {
                items {
                    id
                    name
                    floors
                    roomCode
                    queen
                    type
                    lineDirection

                    roomFacilities {
                        title
                        description
                    }
                    roomPhotos {
                        photoUrl
                    }
                    roomPrices {
                        price
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
export const HOTEL_GET_ROOM = gql`
    query($roomId: Int!) {
        hotel_getRoom(roomId: $roomId) {
            result {
                name
                floors
                roomCode
                type
                isAvailable
                queen
                hotelId
                roomLine
                roomSubLine
                roomNumber
                lineDirection
                roomFacilities {
                    title
                }
                roomPrices {
                    price
                    date
                }
                id
                isDeleted
            }
            status
            message
        }
    }
`;

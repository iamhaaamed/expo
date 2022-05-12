import { useQuery, useMutation, useInfiniteQuery } from "react-query";
import GraphQlClient from "GraphQl/GraphQlClient";
import {
    GET_CURRENT_HOTEL,
    GET_MY_ORDER_DINNING,
    HOTEL_LOCK_AND_UNLOCK,
    GET_ALL_MY_REQUEST,
    HOTEL_NAVIGATE_TO_MY_ROOM,
    HOTEL_GET_RATINGS,
    HOTEL_GET_COMMENTS,
    HOTEL_GET_COMMENTS_RATES,
} from "GraphQl/Home/Queries";
import {
    BOOKING_RESERVING_DINNING,
    CREATE_SERVICE_REQUEST,
    BOOKING_CREATE_DINNING_PAYMENT,
    BOOKING_CREATE_DINNING_PAYMENT2,
    HOTEL_INSERT_RATE,
    HOTEL_INSERT_COMMENT,
} from "GraphQl/Home/Mutations";
const PAGE_SIZE = 10;
const useCurrentHotel = ({ userId }) => {
    return useQuery(
        ["getCurrentHotel", userId],
        async () => {
            return await GraphQlClient.request(GET_CURRENT_HOTEL, {
                userId,
            });
        },
        {
            enabled: !!userId
        }
    );
};
const useDinningOrdersList = ({ userId }) => {
    return useInfiniteQuery(
        ["dinningOrders", userId],
        async ({ pageParam = 0 }) => {
            return await GraphQlClient.request(GET_MY_ORDER_DINNING, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                userId,
            });
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (
                    lastPage?.booking_getMyOrderDining?.result?.pageInfo
                        ?.hasNextPage
                ) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map((a) => a.booking_getMyOrderDining?.result?.items)
                    .reduce((a, b) => a.concat(b), []),
            }),
            enabled: !!userId
        }
    );
};
const bookDinning = () => {

    return useMutation(async ({ dinningInput }) => {
        return await GraphQlClient.request(BOOKING_RESERVING_DINNING, {
            dinningInput
        })
    })
}
const createServiceRequest = () => {

    return useMutation(async ({ requestInput }) => {
        return await GraphQlClient.request(CREATE_SERVICE_REQUEST, {
            requestInput
        })
    })
}

const insertRateForRoom = () => {
    return useMutation(async ({ ratingInput }) => {
        return await GraphQlClient.request(HOTEL_INSERT_RATE, {
            ratingInput
        })
    })
}

const insertCommentForRoom = () => {
    return useMutation(async ({ commentInput }) => {
        return await GraphQlClient.request(HOTEL_INSERT_COMMENT, {
            commentInput
        })
    })
}
const useLockAndUnlockDoor = ({ lockDoor, reservationId }) => {
    return useQuery(
        ["lockAndUnlockDoor", lockDoor, reservationId],
        async () => {
            return await GraphQlClient.request(HOTEL_LOCK_AND_UNLOCK, {
                lockDoor, reservationId
            })
        },
        {
            enabled: !!reservationId
        }
    )
}
const useMyRequestList = ({ userId }) => {
    return useInfiniteQuery(
        ["requestList", userId],
        async ({ pageParam = 0 }) => {
            return await GraphQlClient.request(GET_ALL_MY_REQUEST, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                userId,
            });
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (
                    lastPage?.booking_getAllMyRequests?.result?.pageInfo
                        ?.hasNextPage
                ) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map((a) => a.booking_getAllMyRequests?.result?.items)
                    .reduce((a, b) => a.concat(b), []),
            }),
            enabled: !!userId
        }
    );
};
const useNavigateToRoom = ({ position, roomId }) => {
    return useQuery(
        ["navigateToRoom", position, roomId],
        async () => {
            return await GraphQlClient.request(HOTEL_NAVIGATE_TO_MY_ROOM, {
                position, roomId
            })
        },
        {
            enabled: !!roomId
        }
    )
}
const useRoomRatings = ({ roomId }) => {
    return useInfiniteQuery(
        ["roomRatings", roomId],
        async ({ pageParam = 0 }) => {
            return await GraphQlClient.request(HOTEL_GET_RATINGS, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                roomId,
            });
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (
                    lastPage?.report_ratingReport?.result?.pageInfo
                        ?.hasNextPage
                ) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map((a) => a.report_ratingReport?.result?.items)
                    .reduce((a, b) => a.concat(b), []),
            }),
            enabled: !!roomId
        }
    );
};
const useRoomComments = ({ roomId }) => {
    return useInfiniteQuery(
        ["roomComments", roomId],
        async ({ pageParam = 0 }) => {
            return await GraphQlClient.request(HOTEL_GET_COMMENTS, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                roomId,
            });
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (
                    lastPage?.report_commentReport?.result?.pageInfo
                        ?.hasNextPage
                ) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map((a) => a.report_commentReport?.result?.items)
                    .reduce((a, b) => a.concat(b), []),
            }),
            enabled: !!roomId
        }
    );
};
const useHotelCommentsRate = ({ roomId }) => {
    return useQuery(
        ["getCommentRate", roomId],
        async () => {
            return await GraphQlClient.request(HOTEL_GET_COMMENTS_RATES, {
                roomId,
            });
        },
        {
            enabled: !!roomId
        }
    );
};
export {
    useCurrentHotel,
    bookDinning,
    useDinningOrdersList,
    createServiceRequest,
    useLockAndUnlockDoor,
    useMyRequestList,
    useNavigateToRoom,
    insertRateForRoom,
    insertCommentForRoom,
    useRoomComments,
    useRoomRatings,
    useHotelCommentsRate,
};

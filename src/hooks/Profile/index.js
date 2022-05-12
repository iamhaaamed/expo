import { useQuery, useMutation, useInfiniteQuery } from "react-query";
import GraphQlClient from "GraphQl/GraphQlClient";
import {
    GET_USER_FAVORITES,
    GET_HISTORY_BOOKING,
} from "GraphQl/Profile/Queries";
const PAGE_SIZE = 10;
const useUserFavorites = ({ userId, isFav }) => {
    return useInfiniteQuery(
        ["userFavorite", userId, isFav],
        async ({ pageParam = 0 }) => {
            return await GraphQlClient.request(GET_USER_FAVORITES, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                userId,
            });
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (
                    lastPage?.user_getFavorites?.result?.pageInfo
                        ?.hasNextPage
                ) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map((a) => a.user_getFavorites?.result?.items)
                    .reduce((a, b) => a.concat(b), []),
            }),
            enabled: !!isFav
        }
    );
};
const useUserHistories = ({ userId, isFav }) => {
    return useInfiniteQuery(
        ["userHistory", userId, isFav],
        async ({ pageParam = 0 }) => {
            return await GraphQlClient.request(GET_HISTORY_BOOKING, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                userId,
            });
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (
                    lastPage?.booking_getMyHistoryBooking?.result?.pageInfo
                        ?.hasNextPage
                ) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map((a) => a.booking_getMyHistoryBooking?.result?.items)
                    .reduce((a, b) => a.concat(b), []),
            }),
            enabled: !!(!isFav)
        }
    );
};

export {
    useUserFavorites,
    useUserHistories,
};

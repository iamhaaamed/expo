import { UPCOMMING_RESERVATION } from 'GraphQl/Upcomming/Queries';
import { BOOKING_CHECKIN } from 'GraphQl/Upcomming/Mutations';
import { useInfiniteQuery, useMutation } from 'react-query';
import GraphQlClient from 'GraphQl/GraphQlClient';
const PAGE_SIZE = 10;

const useUpcommingReservation = ({ userId }) => {
    return useInfiniteQuery(
        ['AvilabeRooms', userId],
        async ({ pageParam = 0 }) => {
            return await GraphQlClient.request(UPCOMMING_RESERVATION, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                userId,
            });
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (
                    lastPage?.booking_upcommingReservation?.result?.pageInfo
                        ?.hasNextPage
                ) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map((a) => a.booking_upcommingReservation?.result?.items)
                    .reduce((a, b) => a.concat(b), []),
            }),
            enabled: !!userId,
        },
    );
};
const mutateCheckIn = () => {
    return useMutation(async ({ reservatinId }) => {
        console.log('++++++++  ', reservatinId);
        return await GraphQlClient.request(BOOKING_CHECKIN, {
            reservatinId,
        });
    });
};
export { useUpcommingReservation, mutateCheckIn };

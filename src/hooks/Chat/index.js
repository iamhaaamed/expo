import { USER_GET_MESSAGE } from 'GraphQl/Chat/Queries';
import { INSER_MESSAGE } from 'GraphQl/Chat/Mutations';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';
import GraphQlClient from 'src/GraphQl/GraphQlClient';
const PAGE_SIZE = 50;
const useGetMessages = ({ userId }) => {
    return useInfiniteQuery(
        ['getMessages', userId],
        async ({ pageParam = 0 }) => {
            return await GraphQlClient.request(USER_GET_MESSAGE, {
                skip: pageParam * PAGE_SIZE,
                take: PAGE_SIZE,
                userId,
            });
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage?.user_getMessages?.result?.pageInfo?.hasNextPage) {
                    return allPages.length;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data?.pages
                    ?.map((a) => a.user_getMessages?.result?.items)
                    .reduce((a, b) => a.concat(b), []),
            }),
            enabled: !!userId,
        },
    );
};
const mutateInsertMessage = () => {
    const queryClient = useQueryClient();

    return useMutation(async ({ messageInput }) => {
        console.log('++++++++  ', messageInput);
        return await GraphQlClient.request(
            INSER_MESSAGE,
            {
                messageInput: messageInput,
            },
            {
                onSuccess: (data) => {
                    if (data.user_insertMessage?.status === 'SUCCESS')
                        queryClient.invalidateQueries('getMessages');
                },
            },
        );
    });
};
export { useGetMessages, mutateInsertMessage };

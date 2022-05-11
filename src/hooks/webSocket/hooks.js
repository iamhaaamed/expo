import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { subscribe } from 'services/webSocket/subscription';
// import {
//     AdminMessageNotifDocument,
//     AdminMessageNotifSubscription,
//     SortEnumType,
//     User_GetMessagesQuery
// } from 'generated';
const SUBCRIPTION = `subscription{
    adminMessageNotif{
      text
    }
  }`;
export function useSubscribeMessages() {
    const queryClient = useQueryClient();
    // const { updateMessageCount, resetMessagesCount } = useUpdateMessagesCount();

    useEffect(() => {
        if (!user) return;

        const unsbscribe = subscribe(SUBCRIPTION, undefined, listener);

        function listener(e) {
            try {
                const data = JSON.parse(e.data);
                console.log(data);

                if (data.type === 'ka') return; //keep alive!

                // const message: AdminMessageNotifSubscription = data.payload?.data;

                // if (!message.adminMessageNotif) return;

                // // if (!window.location.href.includes('chat')) {
                // //     updateMessageCount();
                // // } else {
                // //     resetMessagesCount();
                // // }

                // // const { projectId } = message.adminMessageNotif.messageStat;
                // const senderId = message.adminMessageNotif.user.id;

                // if (senderId === user.id) return;

                // const input = {
                //     userId: senderId,
                //     skip: 0,
                //     take: 50,
                //     order: { id: SortEnumType.Desc }
                // };

                // const key = ['user_getMessages.infinite', input, user];

                // const chatCache: UseInfiniteQueryResult<User_GetMessagesQuery, unknown>['data'] =
                //     queryClient.getQueryData(key);

                // const conversation = message.adminMessageNotif;
                // // @ts-ignore
                // chatCache?.pages?.[0]?.user_getMessages?.result?.items?.unshift?.(conversation);

                // queryClient.setQueryData(key, chatCache);
            } catch (err) {
                console.log(err);
            }
        }

        return () => unsbscribe();
    }, [user]);
}

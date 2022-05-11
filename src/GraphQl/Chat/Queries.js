import { gql } from 'graphql-request';

export const USER_GET_MESSAGE = gql`
    query($userId: Int!, $skip: Int, $take: Int) {
        user_getMessages(userId: $userId) {
            result(skip: $skip, take: $take) {
                items {
                    text

                    user {
                        photoUrl
                        id
                    }
                    replyToUserId
                    userId
                    createAt
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

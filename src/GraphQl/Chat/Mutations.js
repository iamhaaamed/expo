import { gql } from 'graphql-request';

export const INSER_MESSAGE = gql`
    mutation($messageInput: Message_Input) {
        user_insertMessage(messageInput: $messageInput) {
            result {
                text
                id
            }
            status
        }
    }
`;

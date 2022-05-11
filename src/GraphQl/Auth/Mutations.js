import { gql } from 'graphql-request';
export const DO_SIGN_UP = gql`
    mutation {
        user_signUp {
            status
            result {
                id
                email
                phoneNumber
                fullName
                scanVoice
            }
        }
    }
`;

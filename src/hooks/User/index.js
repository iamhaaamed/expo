import GraphQlClient from "GraphQl/GraphQlClient";
import { useQuery, useMutation, useInfiniteQuery } from "react-query";

import {
    USER_UPDATE_PROFILE,
} from "GraphQl/User/Mutations";
const PAGE_SIZE = 10;
const userUpdateProfile = () => {
    return useMutation(async ({ userInput, userId }) => {
        return await GraphQlClient.request(USER_UPDATE_PROFILE, {
            userInput, userId
        })
    })
};

export {
    userUpdateProfile,
};

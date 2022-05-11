import { useQuery, useMutation, useQueryClient } from 'react-query';
import GraphQlClient from 'GraphQl/GraphQlClient';
import { DO_SIGN_IN } from 'GraphQl/Auth/Queries';
import {
    UPDATE_USERLOCATION,
    UPDATE_USERPROFILE,
    DO_SIGN_UP,
} from 'GraphQl/Auth/Mutations';
import { GET_USER_BY_INVITECODE } from 'GraphQl/Auth/Queries';
const useSignUp = () => {
    const queryClient = useQueryClient();

    return useMutation(
        async () => {
            return await GraphQlClient.request(DO_SIGN_UP);
        },
        {
            onSuccess: (data) => {
                if (data.user_signUp?.status === 'SUCCESS') {
                    queryClient.invalidateQueries('getMyProfile');
                    queryClient.invalidateQueries('getMyLocation');
                    queryClient.invalidateQueries('getMyAppointment');
                    queryClient.invalidateQueries('getNotificationList');
                }
            },
        },
    );
};
const useSignIn = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            return await GraphQlClient.request(DO_SIGN_IN);
        },
        {
            onSuccess: (data) => {
                if (data.user_signIn?.status === 'SUCCESS') {
                    queryClient.invalidateQueries('getMyProfile');
                    queryClient.invalidateQueries('getMyLocation');
                    queryClient.invalidateQueries('getMyAppointment');
                    queryClient.invalidateQueries('getNotificationList');
                }
            },
        },
    );
};
const UpdateUserLocation = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (locationInput) => {
            return await GraphQlClient.request(UPDATE_USERLOCATION, {
                locationInput,
            });
        },
        {
            onSuccess: (data) => {
                if (data.location_updateLocationOfUser?.status === 'SUCCESS') {
                    queryClient.invalidateQueries('getMyLocation');
                }
            },
        },
    );
};
const UpdateUserProfile = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (profileInput) => {
            return await GraphQlClient.request(UPDATE_USERPROFILE, {
                profileInput,
            });
        },
        {
            onSuccess: (data) => {
                if (data.user_updateProfile?.status === 'SUCCESS') {
                    queryClient.invalidateQueries('getMyProfile');
                }
            },
        },
    );
};
const GetUserByInvitecode = () => {
    return useMutation(async (inviteCode) => {
        return await GraphQlClient.request(GET_USER_BY_INVITECODE, {
            inviteCode,
        });
    });
};
export {
    useSignUp,
    useSignIn,
    // UpdateUserLocation,
    // GetUserByInvitecode,
    // UpdateUserProfile,
};

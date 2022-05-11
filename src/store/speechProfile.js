import create from 'zustand';

const useUserSpeechProfile = create((set) => ({
    profileId: null,
    setProfileId: (profileId) => set(() => ({ profileId })),
}));

export default useUserSpeechProfile;

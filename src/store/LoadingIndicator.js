import create from 'zustand';

const setLoading = create((set) => ({
    isLoading: false,
    enableLoading: () => set(() => ({ isLoading: true })),
    disableLoading: () => set(() => ({ isLoading: false })),
}));

export default setLoading;

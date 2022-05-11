import create from 'zustand';

const setReservationItems = create((set) => ({
    reservation: null,
    setReservation: (reservation) => set(() => ({ reservation })),
}));

export default setReservationItems;

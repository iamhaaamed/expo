import create from 'zustand';

const useDinningOrders = create((set) => ({
    breakfastOrders: [],
    dinnerOrders: [],
    lunchOrders: [],
    drinksOrder: [],
    price: 0,
    orderDetails: {
        time: null,
        inRoomDining: true,
        restaurantId: 0,
        paymentStatus: 'WAITING',
        processingStatuse:'PENDING',
    },
    setBreakfastOrders: (breakfastOrders) => set(() => ({ breakfastOrders })),
    setDinnerOrders: (dinnerOrders) => set(() => ({ dinnerOrders })),
    setLunchOrders: (lunchOrders) => set(() => ({ lunchOrders })),
    setDrinksOrder: (drinksOrder) => set(() => ({ drinksOrder })),
    setPrice: (price) => set(() => ({ price})),
    setOrderDetails: (orderDetails) => set(() => ({ orderDetails})),
    resetState: ()=> set(() => ({price: 0}))
}));

export default useDinningOrders;

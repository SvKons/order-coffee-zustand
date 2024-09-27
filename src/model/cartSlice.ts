import axios from 'axios';
import { StateCreator } from 'zustand';
import { BASE_URL } from '../api/CoreApi';
import { OrderCoffeeRes, orderItem } from '../types/coffeTypes';
import { CartActions, CartState, ListActions, ListState } from './storeTypes';

export const cartSlice: StateCreator<
    CartActions & CartState & ListActions & ListState,
    [['zustand/devtools', never], ['zustand/persist', unknown]],
    [['zustand/devtools', never], ['zustand/persist', unknown]],
    CartActions & CartState
> = (set, get) => ({
    cart: [],
    address: '',
    addToCart: item => {
        const { cart } = get();
        const { id, name, subTitle } = item;
        const prepearedItem: orderItem = {
            id,
            name: `${name} ${subTitle}`,
            size: 'L',
            quantity: 1,
        };
        set({ cart: cart ? [...cart, prepearedItem] : [prepearedItem] });
    },
    orderCoffee: async () => {
        const { cart, address, cleartCart } = get();
        try {
            const { data } = await axios.post<OrderCoffeeRes>(BASE_URL + 'order', {
                address,
                orderItems: cart,
            });
            if (data.success) {
                alert(data.message);
                cleartCart();
            }
        } catch (error) {
            console.log(error);
        }
    },
    cleartCart: () => {
        set({ cart: undefined });
    },
    setAddress: address => {
        set({ address });
    },
});

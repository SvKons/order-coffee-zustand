import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CoffeeType, GetCoffeeListReqParams } from '../types/coffeTypes';
import { listSlice } from './listSlice';
import { CartActions, CartState, ListActions, ListState } from './storeTypes';
import { cartSlice } from './cartSlice';

export const useCoffeeStore = create<CartActions & CartState & ListActions & ListState>()(
    devtools(
        persist((...arg) => ({ ...listSlice(...arg), ...cartSlice(...arg) }), { name: 'coffeeStore', partialize: state => ({ cart: state.cart, address: state.address }) }),
        { name: 'coffeeStore' }
    )
);

export const getCoffeeList = (params?: GetCoffeeListReqParams) => useCoffeeStore.getState().getCoffeeList(params);

export const setParams = (params?: GetCoffeeListReqParams) => useCoffeeStore.getState().setParams(params);

export const setAddress = (address: string) => useCoffeeStore.getState().setAddress(address);

export const orderCoffee = () => useCoffeeStore.getState().orderCoffee();

export const cleartCart = () => useCoffeeStore.getState().cleartCart();

export const addToCart = (item: CoffeeType) => useCoffeeStore.getState().addToCart(item);

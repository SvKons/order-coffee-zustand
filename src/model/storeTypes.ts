import { CoffeeType, GetCoffeeListReqParams, orderItem } from '../types/coffeTypes';

export type ListState = {
    coffeeList?: CoffeeType[];
    controller?: AbortController;
    params: GetCoffeeListReqParams;
};

export type ListActions = {
    getCoffeeList: (params?: GetCoffeeListReqParams) => void;
    setParams: (params?: GetCoffeeListReqParams) => void;
};

export type CartState = {
    cart: orderItem[];
    address: string;
};

export type CartActions = {
    setAddress: (address: string) => void;
    addToCart: (item: CoffeeType) => void;
    orderCoffee: () => void;
    cleartCart: () => void;
};

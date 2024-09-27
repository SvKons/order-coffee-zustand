export enum CoffeeCaregoryEnum {
    cappuccino = 'cappuccino',
    latte = 'latte',
    macchiato = 'macchiato',
    americano = 'americano',
}

export type CoffeeType = {
    id: number;
    name: string;
    subTitle: string;
    type: string;
    price: number;
    image: string;
    rating: number;
};

export type GetCoffeeListReqParams = {
    text?: string;
    type?: CoffeeCaregoryEnum;
};

export type orderItem = {
    id: number;
    name: string;
    size: 'L';
    quantity: number;
};

export type OrdderCoffeeReq = {
    address: string;
    orderItems: orderItem[];
};

export type OrderCoffeeRes = {
    message: string;
    success: boolean;
};

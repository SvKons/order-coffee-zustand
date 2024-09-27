import { Button, Input } from 'antd';
import { cleartCart, orderCoffee, setAddress, useCoffeeStore } from '../model/coffeStore';
import { useShallow } from 'zustand/react/shallow';

export const Cart = () => {
    const [cart, address] = useCoffeeStore(useShallow(state => [state.cart, state.address]));
    return (
        <aside className="cart">
            <h1>Корзина</h1>
            {cart && cart.length > 0 ? (
                <>
                    {cart.map((item, index) => (
                        <span key={index}>{item.name}</span>
                    ))}
                    <Input placeholder="Введите адрес" value={address} onChange={e => setAddress(e.target.value)} />
                    <Button type="primary" onClick={orderCoffee} disabled={!address}>
                        Сделать заказ
                    </Button>
                    <Button onClick={cleartCart}>Очистить корзину</Button>
                </>
            ) : (
                <span>Корзина пуста</span>
            )}
        </aside>
    );
};

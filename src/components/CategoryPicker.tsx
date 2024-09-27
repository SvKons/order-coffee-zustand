import { Button } from 'antd';
import { useShallow } from 'zustand/react/shallow';
import { setParams, useCoffeeStore } from '../model/coffeStore';
import { CoffeeCaregoryEnum } from '../types/coffeTypes';

export const CategoryPicker = () => {
    const [params] = useCoffeeStore(useShallow(state => [state.params]));
    return (
        <div>
            {Object.keys(CoffeeCaregoryEnum).map(key => (
                <Button
                    key={key}
                    danger={params.type === key}
                    onClick={() => {
                        setParams({ type: CoffeeCaregoryEnum[key as keyof typeof CoffeeCaregoryEnum] });
                    }}
                >
                    {key}
                </Button>
            ))}
        </div>
    );
};

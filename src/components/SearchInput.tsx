import { Input } from 'antd';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { getCoffeeList, setParams, useCoffeeStore } from '../model/coffeStore';
import { useUrlStorage } from '../helpers/useUrlStorage';

export const SearchInput = () => {
    const [params] = useCoffeeStore(useShallow(state => [state.params]));

    useEffect(() => {
        getCoffeeList(params);
    }, []);

    useUrlStorage(params, setParams);

    return <Input placeholder="Поиск..." value={params.text} onChange={e => setParams({ text: e.target.value })} />;
};

import {useMemo} from 'react';

export default ({c, n}) => {
    const res = useMemo(() => {
        return {c, n};
    }, [c]);
    return (
        <h2>子组件count{res.c} --- num{res.n}</h2>
    );
};
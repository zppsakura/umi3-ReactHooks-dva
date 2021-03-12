import React, { useEffect, useRef } from 'react';
// import TweenMax from 'gsap/TweenMax';
import './index.less';

const Animate = () => {
    const REL = useRef(null);
    // 当组件加载完成后，在0秒的时间内，将方块的横坐标位置移到600px的位置
    useEffect(() => {
        // TweenMax.to(REL.current, 0, {x:600});
    }, []);
    return (
        <div className="animate">
            <div ref={REL} className="square">方块</div>
        </div>
    );
};

export default Animate;
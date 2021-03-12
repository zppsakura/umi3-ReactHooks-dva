import React, { useState, useEffect, useRef, useContext, createContext, useMemo, useCallback } from 'react';
import styles from './index.less';
import { Button, Input } from 'antd';
import ChildMemo from '../../components/Exception/ChildMemo';

function Index() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  const [number, setNumber] = useState(1);
  const [obj, setObj] = useState({name: '张三', age: 23});
  const [arr, setArr] = useState([1,2,3]);
  const [func, setFunc] = useState(() => {
      return 1;
  });

  const inputEl = useRef('123'); // 获取Dom
  const save = useRef({value: '111'}); // 保存变量

  useEffect(() => {
    //   console.log('num', num);
    //   console.log('count', count);
    // console.log('useEffect');
      return () => {
        //   console.log('componentWillUnmont', count); // 每次都先销毁之前的
      };
  }, []); 

//   useEffect(() => {
//       console.log('count', count);
//   }, []);

  // 父组件
  const MyContext = createContext();
  // 子组件
  const ChildContext = () => {
      const count = useContext(MyContext);
      return (
          <h2>我是子组件{count}</h2>   
      );
  };

  const res = useMemo(() => {
    //   console.log('useMemo更新');
      return {   
          count, num
      };
  },[count]);

  const callback = useCallback(() => {
    // console.log('count', count);
    return count;
  }, [count]);
  
  return (
    <div className={styles.demo}>
        <div className={styles.state}>
            <h1>useState</h1>
            <div>
                <h2>You clicked {count} times</h2>
                <Button onClick={() => setCount(count + 1)}>
                    改变值
                </Button>
            </div>
            <div>
                <h2>{obj.name}--{obj.age}</h2>
                <Button onClick={() => setObj({...obj, name: 'lisi'})}>改变对象</Button>
            </div>
            <div>
                <h2>{arr}</h2>
                <Button onClick={() => setArr(() => {
                    arr.push(4);
                    return [...arr];
                })}>改变数组</Button>
            </div>
            <div>
                <h2>{func}</h2>
                <Button onClick={() => setFunc(4)}>
                    改变函数
                </Button>
            </div>
        </div>


        <div className={styles.effect}>
            <h1>useEffect</h1>
            <Button onClick={() => {
                setCount(count + 1);
            }}>change-count</Button>
        </div>


        <div className={styles.ref}>
            {/* 父子传值， value为父组件准备传给子组件的值 */}
            <MyContext.Provider value={count}>
                <ChildContext />
            </MyContext.Provider>

            <h1>useRef</h1>
            <Input 
                type="text"
                ref={inputEl}
            />
            <br />
            <br />
            <Button type="primary" onClick={() => {
                // console.log('input', inputEl.current.state.value);
                save.current.value = inputEl.current.state.value;
                // console.log('save', save);
            }}>获取ref</Button>
        </div>


        <div className={styles.memo}>
            <h1>useMemo</h1>
            <h2>状态=count{res.count} --- {res.num}</h2>
            {/* <h2>状态=number{res2}</h2> */}
            <Button onClick={() => {
                setNumber(number + 1);
            }}>change-number</Button>
            <Button onClick={() => {
                setCount(count + 1);
            }}>change-count</Button>
            <Button onClick={() => {
                setNum(num + 1);
            }}>change-num</Button>
            <ChildMemo c={res.count} n={res.num} />
        </div>


        <div className={styles.callback}>
            <h1>useCallback</h1>
            <h2>callBack: {callback()}</h2>
            <h2>count状态=count: {count}</h2>
            <h2>num状态=num: {num}</h2>
            <Button onClick={() => {
                setCount(count + 1);
            }}>change-count</Button>
            <Button onClick={() => {
                setNum(num + 1);
            }}>change-num</Button>
        </div>
    </div>
  );
}

export default Index;
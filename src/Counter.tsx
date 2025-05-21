import style from './Counter.module.css';
import {CounterSettings} from "./components/CounterSettings.tsx";
import {CounterOutput} from "./components/CounterOutput.tsx";
import {useState} from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    const [active, setActive] = useState(false);
    return (
        <div className={`${style.bg} ${style.center}`}>
            <div className={style.counterContainer}>
                <CounterSettings
                    setActive={setActive}
                    active={active}
                    value={value}
                    setValue={setValue}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}/>
                <CounterOutput
                    setActive={setActive}
                    active={active}
                    value={value}
                    setValue={setValue}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}/>
            </div>
        </div>
    );
};

export default Counter;
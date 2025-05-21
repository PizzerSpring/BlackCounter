import style from './Counter.module.css';
import {CounterSettings} from "./components/CounterSettings.tsx";
import {CounterOutput} from "./components/CounterOutput.tsx";
import {useState} from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    return (
        <div className={`${style.bg} ${style.center}`}>
            <div className={style.counterContainer}>
                <CounterSettings
                    value={value}
                    setValue={setValue}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}/>
                <CounterOutput
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
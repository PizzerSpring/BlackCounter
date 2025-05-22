import style from './Counter.module.css';
import {CounterSettings} from "./components/CounterSettings.tsx";
import {CounterOutput} from "./components/CounterOutput.tsx";
import {useState} from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    const [active, setActive] = useState('');
    const [error, setError] = useState('Error');

    return (
        <div className={`${style.bg} ${style.center}`}>
            <div className={style.counterContainer}>
                <CounterSettings
                    setError={setError}
                    error={error}
                    setActive={setActive}
                    active={active}
                    value={value}
                    setValue={setValue}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}/>
                <CounterOutput
                    setError={setError}
                    error={error}
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
import style from './Counter.module.css';
import {CountersSettings} from "./components/CountersSettings.tsx";
import {CounterOutput} from "./components/CounterOutput.tsx";

const Counter = () => {
    return (
        <div className={`${style.bg} ${style.center}`}>
            <div className={style.counterContainer}>
                <CountersSettings/>
                <CounterOutput/>
            </div>
        </div>
    );
};

export default Counter;
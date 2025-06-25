import style from "../Counter.module.css";
import {Button} from "./Button.tsx";

type CounterOutputType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    maxValue: number
    active: string
    error: string
    disSet: boolean
}

export const CounterOutput = ({value, setValue, startValue, maxValue, active, error, disSet}:CounterOutputType) => {
    return (
        <div className={`${style.resultContainer} ${style.outerP}`}>
            <div className={`${style.borderCounter} ${style.outerP} ${style.count} ${style.center} ${style.counterPad}`}>
                {error ?
                    <span className={style.error}>{error}</span>
                    :
                    (active ? <div className={style.activeSize}>{active}</div> : <div className={`${value === maxValue ? style.valueMax : ''}`}>{value}</div>)
                }
            </div>
            <div className={`${style.borderCounter} ${style.outerP} ${style.btnContainer}`}>
                <Button disabled={!!error || !!active || maxValue === value || !disSet} title={'inc'} callback={() => {
                    setValue(value + 1)
                }} className={style.btn}/>
                <Button disabled={!!error || !!active || value === 0 || value === startValue || !disSet} title={'reset'} callback={() => {
                    setValue(startValue)
                }} className={style.btn}/>
            </div>
        </div>
    );
};

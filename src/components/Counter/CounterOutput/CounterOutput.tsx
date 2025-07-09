import style from "./CounterOutput.module.css";
import {Button} from "../Button/Button.tsx";

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

    const isCheckedInc = !!error || !!active || maxValue === value || !disSet;
    const isCheckedRes = !!error || !!active || startValue === value || value === 0 || !disSet;

    return (
        <div className={`${style.resultContainer} ${style.outerP} ${style.containerWidth}`}>
            <div className={`${style.borderCounter} ${style.outerP} ${style.count} ${style.center} ${style.counterPad}`}>
                {error ?
                    <span className={style.error}>{error}</span>
                    :
                    (active ? <div className={style.activeSize}>{active}</div> : <div className={`${value === maxValue ? style.valueMax : ''}`}>{value}</div>)
                }
            </div>
            <div className={`${style.borderCounter} ${style.outerP} ${style.btnContainer}`}>
                <Button disabled={isCheckedInc} title={'inc'} callback={() => {
                    localStorage.setItem('value', JSON.stringify(value + 1));
                    setValue(value + 1)
                }} className={style.btn}/>
                <Button disabled={isCheckedRes} title={'reset'} callback={() => {
                    setValue(startValue)
                }} className={style.btn}/>
            </div>
        </div>
    );
};

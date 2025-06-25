import style from "../Counter.module.css";
import {ValueContainer} from "./ValueContainer.tsx";
import {ButtonPanel} from "./ButtonPanel.tsx";
import {Button} from "./Button.tsx";

type CounterOutputType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    active: string
    setActive: (active: string) => void
    error: string
    setError: (error: string) => void
    disSet: boolean
    setDisSet: (disSet: boolean) => void
}


export const CounterOutput = ({value, setValue, startValue, setStartValue, maxValue, setMaxValue, active, setActive, error, setError, disSet, setDisSet}:CounterOutputType) => {
    return (
        <div className={`${style.resultContainer} ${style.outerP}`}>
            <div className={`${style.borderCounter} ${style.outerP} ${style.count} ${style.center} ${style.counterPad}`}>
                {error ?
                    <span className={style.error}>{error}</span>
                    :
                    (active ? <div className={style.activeSize}>{active}</div> : <div className={`${value === maxValue ? style.valueMax : ''}`}>{value}</div>)
                }
            </div>
            {/*<ValueContainer
                disSet={disSet}
                setDisSet={setDisSet}
                setError={setError}
                error={error}
                setActive={setActive}
                active={active}
                output={true}
                value={value}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}/>*/}
            <div className={`${style.borderCounter} ${style.outerP} ${style.btnContainer}`}>
                <Button disabled={!!error || !!active || maxValue === value || !disSet} title={'inc'} callback={() => {
                    setValue(value + 1)
                }} className={style.btn}/>
                <Button disabled={!!error || !!active || value === 0 || value === startValue || !disSet} title={'reset'} callback={() => {
                    setValue(startValue)
                }} className={style.btn}/>
            </div>
           {/* <ButtonPanel error={error} counterButton={2} setValue={setValue} value={value} startValue={startValue} maxValue={maxValue} active={active} setActive={setActive} disSet={disSet} setDisSet={setDisSet}/>*/}
        </div>
    );
};

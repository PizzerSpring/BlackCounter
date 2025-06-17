import style from "../Counter.module.css";
import {ValueContainer} from "./ValueContainer.tsx";
import {ButtonPanel} from "./ButtonPanel.tsx";

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
            <ValueContainer
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
                setMaxValue={setMaxValue}/>
            <ButtonPanel error={error} counterButton={2} setValue={setValue} value={value} startValue={startValue} maxValue={maxValue} active={active} setActive={setActive} disSet={disSet} setDisSet={setDisSet}/>
        </div>
    );
};

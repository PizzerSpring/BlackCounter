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
    active: boolean
    setActive: (active: boolean) => void
}


export const CounterOutput = ({value, setValue, startValue, setStartValue, maxValue, setMaxValue, active, setActive}:CounterOutputType) => {
    return (
        <div className={`${style.resultContainer} ${style.outerP}`}>
            <ValueContainer
                setActive={setActive}
                active={active}
                output={true}
                value={value}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}/>
            <ButtonPanel counterButton={2} setValue={setValue} value={value} startValue={startValue} maxValue={maxValue} active={active}/>
        </div>
    );
};

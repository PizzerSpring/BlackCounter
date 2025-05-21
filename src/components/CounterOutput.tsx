import style from "../Counter.module.css";
import {ValueContainer} from "./ValueContainer.tsx";
import {ButtonPanel} from "./ButtonPanel.tsx";

type CounterOutputType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
}


export const CounterOutput = ({value, setValue, startValue, setStartValue}:CounterOutputType) => {
    return (
        <div className={`${style.resultContainer} ${style.outerP}`}>
            <ValueContainer output={true} value={value} startValue={startValue} setStartValue={setStartValue}/>
            <ButtonPanel counterButton={2} setValue={setValue} value={value} startValue={startValue}/>
        </div>
    );
};

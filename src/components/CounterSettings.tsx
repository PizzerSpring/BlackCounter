import style from "../Counter.module.css";
import {ValueContainer} from "./ValueContainer.tsx";
import {ButtonPanel} from "./ButtonPanel.tsx";

type CounterSettingsType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}

export const CounterSettings = ({value, setValue, startValue, setStartValue, maxValue, setMaxValue}: CounterSettingsType) => {
    return (
        <div className={`${style.settingsContainer} ${style.outerP}`}>
            <ValueContainer
                output={false}
                value={value}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}/>
            <ButtonPanel counterButton={1} setValue={setValue} value={value} startValue={startValue} maxValue={maxValue}/>
        </div>
    );
};

import style from "../Counter.module.css";
import {ValueContainer} from "./ValueContainer.tsx";
import {ButtonPanel} from "./ButtonPanel.tsx";

type CounterSettingsType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
}

export const CounterSettings = ({value, setValue, startValue, setStartValue}: CounterSettingsType) => {
    return (
        <div className={`${style.settingsContainer} ${style.outerP}`}>
            <ValueContainer output={false} value={value} startValue={startValue} setStartValue={setStartValue}/>
            <ButtonPanel counterButton={1} setValue={setValue} value={value} startValue={startValue}/>
        </div>
    );
};

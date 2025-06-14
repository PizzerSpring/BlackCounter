import style from "../Counter.module.css";
import {ButtonPanel} from "./ButtonPanel.tsx";
import {ValueContainer} from "./ValueContainer.tsx";


type CounterSettingsType = {
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
}

export const CounterSettings = ({value, setValue, startValue, setStartValue, maxValue, setMaxValue, active, setActive, error, setError}: CounterSettingsType) => {
    return (
        <div className={`${style.settingsContainer} ${style.outerP}`}>
            <ValueContainer
                setError={setError}
                error={error}
                setActive={setActive}
                active={active}
                output={false}
                value={value}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}/>
            <ButtonPanel error={error} counterButton={1} setValue={setValue} value={value} startValue={startValue} maxValue={maxValue} active={active} setActive={setActive}/>
        </div>
    );
};

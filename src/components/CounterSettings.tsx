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
    disSet: boolean
    setDisSet: (disSet: boolean) => void
}

export const CounterSettings = ({value, setValue, startValue, setStartValue, maxValue, setMaxValue, active, setActive, error, setError, setDisSet, disSet}: CounterSettingsType) => {
    return (
        <div className={`${style.settingsContainer} ${style.outerP}`}>
            <ValueContainer
                disSet={disSet}
                setDisSet={setDisSet}
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
            <ButtonPanel disSet={disSet} setDisSet={setDisSet} error={error} counterButton={1} setValue={setValue} value={value} startValue={startValue} maxValue={maxValue} active={active} setActive={setActive}/>
        </div>
    );
};

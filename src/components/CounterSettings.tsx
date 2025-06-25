import style from "../Counter.module.css";
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import type {ChangeEvent} from "react";

type CounterSettingsType = {
    setValue: () => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    error: string
    disSet: boolean
}

export const CounterSettings = ({setValue, startValue, setStartValue, maxValue, setMaxValue, error, disSet}: CounterSettingsType) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = +e.currentTarget.value;
        setMaxValue(newMaxValue);
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = +e.currentTarget.value;
        setStartValue(newMinValue);
    }

    return (
        <div className={`${style.settingsContainer} ${style.outerP}`}>
            <div className={style.maxContainer}>
                <span className={style.val}>{'max value:'}</span>
                <Input className={style.field} callback={onChangeMaxValueHandler} value={maxValue}/>
            </div>
            <div className={style.minContainer}>
                <span className={style.val}>{'start value:'}</span>
                <Input className={style.field} callback={onChangeMinValueHandler} value={startValue}/>
            </div>
            <div className={`${style.borderCounter} ${style.outerP} ${style.center}`}>
                <Button disabled={!!error || maxValue === 0 || disSet} title={'set'} callback={setValue} className={style.btn}/>
            </div>
        </div>
    );
};

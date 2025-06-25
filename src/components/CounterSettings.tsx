import style from "../Counter.module.css";
import {ButtonPanel} from "./ButtonPanel.tsx";
import {ValueContainer} from "./ValueContainer.tsx";
import {Button} from "./Button.tsx";
import {ValueInput} from "./ValueInput.tsx";
import {Input} from "./Input.tsx";
import type {ChangeEvent} from "react";


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

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = +e.currentTarget.value;
        /*
                const isValid = revalidateError(startValue,newMaxValue )

                if (!isValid) {
                    setMaxValue(newMaxValue);
                    return
                }*/
        // setActive(`enter values and press 'set'`);
        //setDisSet(false);
        // setActive(`enter values and press 'set'`)
        // value === 0 && setActive(`enter values and press 'set'`)
        setMaxValue(newMaxValue);
    }

    return (
        <div className={`${style.settingsContainer} ${style.outerP}`}>
            <div className={style.maxContainer}>
                <span className={style.val}>{'max value:'}</span>
                <Input className={style.field} callback={onChangeMaxValueHandler} value={maxValue}/>
            </div>
            <div className={style.minContainer}>
                <span className={style.val}>{'start value:'}</span>
                <Input className={style.field} callback={(e) => {
                    setActive(`enter values and press 'set'`);
                    setDisSet(false);
                    //error && setActive(`enter values and press 'set'`);
                    setStartValue(+e.currentTarget.value);
                }} value={startValue}/>
            </div>
            {/*<div className={`${style.borderCounter} ${style.outerP} ${style.valContainer}`}>
                <ValueInput
                    active={active}
                    value={value}
                    disSet={disSet}
                    setDisSet={setDisSet}
                    error={error}
                    setError={setError}
                    setActive={setActive}
                    title={'max value:'}
                    className={style.maxContainer}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}/>
                <ValueInput
                    active={active}
                    value={value}
                    disSet={disSet}
                    setDisSet={setDisSet}
                    error={error}
                    setError={setError}
                    setActive={setActive}
                    title={'start value:'}
                    className={style.minContainer}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}/>
            </div>*/}
          {/*  <ValueContainer
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
                setMaxValue={setMaxValue}/>*/}
            <div className={`${style.borderCounter} ${style.outerP} ${style.center}`}>
                <Button disabled={!!error || maxValue === 0 || disSet} title={'set'} callback={() => {
                    setValue(startValue)
                    setActive('')
                    setDisSet(true);
                    localStorage.setItem('maxValue', JSON.stringify(maxValue));
                    localStorage.setItem('startValue', JSON.stringify(startValue));
                    // console.log(value)
                }} className={style.btn}/>
            </div>
            {/*<ButtonPanel disSet={disSet} setDisSet={setDisSet} error={error} counterButton={1} setValue={setValue} value={value} startValue={startValue} maxValue={maxValue} active={active} setActive={setActive}/>*/}
        </div>
    );
};

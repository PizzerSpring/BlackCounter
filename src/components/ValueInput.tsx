import style from "../Counter.module.css";
import {type ChangeEvent, useEffect} from "react";
import {Input} from "./Input.tsx";

type ValueInputType = {
    title: string
    className?: string
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setActive: (active: string) => void
    setError: (error: string) => void
    error: string
}

export const ValueInput = ({
                               title,
                               className,
                               startValue,
                               setStartValue,
                               maxValue,
                               setMaxValue,
                               setActive,
                               setError,
                               error
                           }: ValueInputType) => {

    const isValid = maxValue <= startValue || startValue < 0 || maxValue < 0;
    //console.log('values')

    useEffect(() => {
        console.log('value input')
        isValid ? setError('Incorrect value!')
            : setError('');
        /*localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));*/
    }, [
        maxValue, startValue
    ])

    return (
        <>
            {title === 'max value:' ?
                <div className={className}>
                    <span className={style.val}>{title}</span>
                    <Input className={style.field} callback={(e) => {
                       error && setActive(`enter values and press 'set'`)
                        setMaxValue(+e.currentTarget.value);
                    }} value={maxValue}/>
                </div>
                : <div className={className}>
                    <span className={style.val}>{title}</span>
                    <Input className={style.field} callback={(e) => {
                        error && setActive(`enter values and press 'set'`)
                        setStartValue(+e.currentTarget.value);
                    }} value={startValue} />
                </div>}
        </>
    );
};

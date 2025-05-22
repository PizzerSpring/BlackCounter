import style from "../Counter.module.css";
import {useEffect} from "react";

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

export const ValueInput = ({title, className, startValue, setStartValue, maxValue, setMaxValue, setActive, setError, error}: ValueInputType) => {

    const isValid = maxValue <= startValue || startValue < 0 || maxValue < 0;

    useEffect(() => {
        isValid ? setError('Incorrect value!')
            : setError('');
    }, [
        maxValue, startValue,
    ])

    return (
        <>
            {title === 'max value:' ?
                <div className={className}>
                    <span className={style.val}>{title}</span>
                    <input onChange={(e) => {
                        setActive(`enter values and press 'set'`)
                        error && setActive('')
                        setMaxValue(+e.currentTarget.value);
                        console.log(maxValue);
                    }} className={style.field} type="number" placeholder={`${maxValue}`}/>
                </div>
                : <div className={className}>
                    <span className={style.val}>{title}</span>
                    <input onChange={(e) => {
                        setActive(`enter values and press 'set'`)
                        error && setActive('')
                        setStartValue(+e.currentTarget.value);
                        console.log(startValue)
                    }} className={style.field} type="number" placeholder={`${startValue}`}/>
                </div>}
        </>
    );
};

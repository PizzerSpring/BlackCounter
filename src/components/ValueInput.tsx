import style from "../Counter.module.css";
import {useEffect} from "react";

type ValueInputType = {
    title: string
    className?: string
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setActive: (active: boolean) => void
    setError: (error: boolean) => void
    error: boolean
}

export const ValueInput = ({title, className, startValue, setStartValue, maxValue, setMaxValue, setActive, setError, error}: ValueInputType) => {

    const isValid = maxValue <= startValue || startValue < 0 || maxValue < 0;

    useEffect(() => {
        isValid ? setError(true)
            : setError(false);
    }, [
        maxValue, startValue,
    ])

    return (
        <>
            {title === 'max value:' ?
                <div className={className}>
                    <span className={style.val}>{title}</span>
                    <input onChange={(e) => {
                        setMaxValue(+e.currentTarget.value);
                        setActive(true)
                        error && setError(false)
                    }} className={style.field} type="number" placeholder={`${maxValue}`}/>
                </div>
                : <div className={className}>
                    <span className={style.val}>{title}</span>
                    <input onChange={(e) => {
                        setStartValue(+e.currentTarget.value);
                        setActive(true)
                        error && setError(false)
                    }} className={style.field} type="number" placeholder={`${startValue}`}/>
                </div>}
        </>
    );
};

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
    disSet: boolean
    setDisSet: (disSet: boolean) => void
    value: number
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
                               error,
                               setDisSet,
    value,
                               disSet
                           }: ValueInputType) => {

    const isValid = maxValue <= startValue || startValue < 0 || maxValue < 0;
    //console.log('values')

    useEffect(() => {
        //console.log('value input')
        isValid ? setError('Incorrect value!')
            : setError('');
        /*localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));*/
    }, [
        maxValue, startValue
    ])

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if(value) {
            setActive(`enter values and press 'set'`);
            setDisSet(false);
        }
       // error && setActive(`enter values and press 'set'`);
        setMaxValue(+e.currentTarget.value);
    }


    return (
        <>
            {title === 'max value:' ?
                <div className={className}>
                    <span className={style.val}>{title}</span>
                    <Input className={style.field} callback={onChangeMaxValueHandler} value={maxValue}/>
                </div>
                : <div className={className}>
                    <span className={style.val}>{title}</span>
                    <Input className={style.field} callback={(e) => {
                        //setDisSet(false);
                        if(value) {
                            setActive(`enter values and press 'set'`);
                            setDisSet(false);
                        }
                        //error && setActive(`enter values and press 'set'`);
                        setStartValue(+e.currentTarget.value);
                    }} value={startValue} />
                </div>}
        </>
    );
};

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
    active: string
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
                               disSet, active
                           }: ValueInputType) => {

   // const isValid = maxValue <= startValue || startValue < 0 || maxValue < 0;
    //console.log('values')

/*    useEffect(() => {
        //console.log('value input')
        isValid ? setError('Incorrect value!')
            : setError('');
        /!*localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));*!/
    }, [
        maxValue, startValue
    ])*/

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
        <>
            {title === 'max value:' ?
                <div className={className}>
                    <span className={style.val}>{title}</span>
                    <Input className={style.field} callback={onChangeMaxValueHandler} value={maxValue}/>
                </div>
                : <div className={className}>
                    <span className={style.val}>{title}</span>
                    <Input className={style.field} callback={(e) => {
                            setActive(`enter values and press 'set'`);
                            setDisSet(false);
                        //error && setActive(`enter values and press 'set'`);
                        setStartValue(+e.currentTarget.value);
                    }} value={startValue} />
                </div>}
        </>
    );
};

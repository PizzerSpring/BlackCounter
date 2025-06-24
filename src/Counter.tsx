import style from './Counter.module.css';
import s from './components/Container.module.css';
import {CounterSettings} from "./components/CounterSettings.tsx";
import {CounterOutput} from "./components/CounterOutput.tsx";
import {type ChangeEvent, useEffect, useState} from "react";
import {Input} from "./components/Input.tsx";
import {Button} from "./components/Button.tsx";

const Counter = () => {

    /*const getStartValueFromLS = () => {
        let startValueLS = 0;

        const startValueAsString = localStorage.getItem('startValue');
        if(startValueAsString) {
            startValueLS = Number(JSON.parse(startValueAsString))
        }
        return startValueLS || 0
    }*/

    //getStartValueFromLS();

    const [value, setValue] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1);

    const [active, setActive] = useState('');
    const [error, setError] = useState('');
    const [disSet, setDisSet] = useState(false);

    useEffect(() => {
       // console.log('counter')
        /*const maxValueAsString = localStorage.getItem('maxValue');
        if(maxValueAsString) {
            const newValue = JSON.parse(maxValueAsString);
            setMaxValue(newValue);
        }*/

        const maxValueAsString = localStorage.getItem('maxValue');
        if(maxValueAsString) {
           // console.log('maxValueAsString', maxValueAsString);
            setMaxValue(+maxValueAsString);
        }


        const startValueAsString = localStorage.getItem('startValue');
        if(startValueAsString) {
            const newValue = JSON.parse(startValueAsString);
            setStartValue(newValue);
        }
    }, [])


    const revalidateError = (minValueNumber: number, maxValueNumber: number) =>
    {
        const isLessValue = maxValueNumber < minValueNumber
        const isEqual =  maxValueNumber === minValueNumber
        const minLessZero = minValueNumber < 0
        const maxLessZero =  maxValueNumber < 0

        const isInvalid = minLessZero || maxLessZero || isLessValue || isEqual
        if (isInvalid) {
            setError('Incorrect value!')
            return false
        }

        setError('');
        return  true
    }

    const onMaxValueHandler = (maxValueProps: number) => {
        const newMaxValue = maxValueProps;

        const isValid = revalidateError(startValue,newMaxValue )

        if (!isValid) {
            setMaxValue(newMaxValue);
            return
        }
        // setActive(`enter values and press 'set'`);
        setDisSet(false);
        setActive(`enter values and press 'set'`)
        // value === 0 && setActive(`enter values and press 'set'`)
        setMaxValue(newMaxValue);
    }

    const onMinValueHandler = (minValue: number) => {
        const newMinValue = minValue;

        const isValid = revalidateError(newMinValue,maxValue )

        if (!isValid) {
            setStartValue(newMinValue);
            return
        }
        // setActive(`enter values and press 'set'`);
        setDisSet(false);
        setActive(`enter values and press 'set'`)
        // value === 0 && setActive(`enter values and press 'set'`)
        setStartValue(newMinValue);
    }

    const onSetPressHandler = () => {

    }

    return (
        <div className={`${style.bg} ${style.center}`}>
            <div className={`${style.counterContainer} ${s.container}`}>
                <CounterSettings
                    disSet={disSet}
                    setDisSet={setDisSet}
                    setError={setError}
                    error={error}
                    setActive={setActive}
                    active={active}
                    value={value}
                    setValue={setValue}
                    startValue={startValue}
                    setStartValue={onMinValueHandler}
                    maxValue={maxValue}
                    setMaxValue={onMaxValueHandler}/>
                <CounterOutput
                    disSet={disSet}
                    setDisSet={setDisSet}
                    setError={setError}
                    error={error}
                    setActive={setActive}
                    active={active}
                    value={value}
                    setValue={setValue}
                    startValue={startValue}
                    setStartValue={onMinValueHandler}
                    maxValue={maxValue}
                    setMaxValue={onMaxValueHandler}/>
            </div>
        </div>
    );
};

export default Counter;
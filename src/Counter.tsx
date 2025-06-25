import style from './Counter.module.css';
import s from './components/Container.module.css';
import {CounterSettings} from "./components/CounterSettings.tsx";
import {CounterOutput} from "./components/CounterOutput.tsx";
import {useEffect, useState} from "react";

const Counter = () => {

    const [value, setValue] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1);

    const [active, setActive] = useState('');
    const [error, setError] = useState('');
    const [disSet, setDisSet] = useState(false);

    useEffect(() => {

        const maxValueAsString = localStorage.getItem('maxValue');
        const startValueAsString = localStorage.getItem('startValue');
        const valueAsString = localStorage.getItem('value');

        if(maxValueAsString && startValueAsString && valueAsString) {
            setMaxValue(+maxValueAsString);
            setStartValue(+startValueAsString);
            setValue(+valueAsString);
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
        setDisSet(false);
        setActive(`enter values and press 'set'`)
        setMaxValue(newMaxValue);
    }

    const onMinValueHandler = (minValue: number) => {
        const newMinValue = minValue;

        const isValid = revalidateError(newMinValue,maxValue )

        if (!isValid) {
            setStartValue(newMinValue);
            return
        }
        setDisSet(false);
        setActive(`enter values and press 'set'`)
        setStartValue(newMinValue);
    }

    const onSetPressHandler = () => {
        setValue(startValue)
        setActive('')
        setDisSet(true);
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }

    return (
        <div className={`${style.bg} ${style.center}`}>
            <div className={`${style.counterContainer} ${s.container}`}>
                <CounterSettings
                    disSet={disSet}
                    error={error}
                    setValue={onSetPressHandler}
                    startValue={startValue}
                    setStartValue={onMinValueHandler}
                    maxValue={maxValue}
                    setMaxValue={onMaxValueHandler}/>
                <CounterOutput
                    disSet={disSet}
                    error={error}
                    active={active}
                    value={value}
                    setValue={setValue}
                    startValue={startValue}
                    maxValue={maxValue}/>
            </div>
        </div>
    );
};

export default Counter;
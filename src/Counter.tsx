import style from './Counter.module.css';
import s from './components/Container.module.css';
import {CounterSettings} from "./components/CounterSettings.tsx";
import {CounterOutput} from "./components/CounterOutput.tsx";
import {useEffect, useState} from "react";
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
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}/>
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
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}/>
            </div>
        </div>
    );
};

export default Counter;
import style from "../Counter.module.css";
import {ValueInput} from "./ValueInput.tsx";

type ValueContainerType = {
    output: boolean
    value: number
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    active: boolean
    setActive: (active: boolean) => void
}

export const ValueContainer = ({output, value, startValue, setStartValue, maxValue, setMaxValue, active, setActive}: ValueContainerType) => {
    return (
        <>
            {output ?
                <div className={`${style.borderCounter} ${style.outerP} ${style.count} ${style.center} ${style.counterPad}`}>
                    {active ? value : `enter values and press 'set'`}
                </div> :
                <div className={`${style.borderCounter} ${style.outerP} ${style.valContainer}`}>
                    <ValueInput
                        setActive={setActive}
                        title={'max value:'}
                        className={style.maxContainer}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        maxValue={maxValue}
                        setMaxValue={setMaxValue}/>
                    <ValueInput
                        setActive={setActive}
                        title={'start value:'}
                        className={style.minContainer}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        maxValue={maxValue}
                        setMaxValue={setMaxValue}/>
                </div>
            }
        </>
    );
};

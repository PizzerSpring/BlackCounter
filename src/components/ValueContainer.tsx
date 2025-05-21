import style from "../Counter.module.css";
import {ValueInput} from "./ValueInput.tsx";

type ValueContainerType = {
    output: boolean
    value: number
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}

export const ValueContainer = ({output, value, startValue, setStartValue, maxValue, setMaxValue}: ValueContainerType) => {
    return (
        <>
            {output ?
                <div
                    className={`${style.borderCounter} ${style.outerP} ${style.count} ${style.center} ${style.counterPad}`}>{value}</div> :
                <div className={`${style.borderCounter} ${style.outerP} ${style.valContainer}`}>
                    <ValueInput
                        title={'max value:'}
                        className={style.maxContainer}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        maxValue={maxValue}
                        setMaxValue={setMaxValue}/>
                    <ValueInput
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

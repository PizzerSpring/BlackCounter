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
    error: boolean
    setError: (error: boolean) => void
}

export const ValueContainer = ({
                                   output,
                                   value,
                                   startValue,
                                   setStartValue,
                                   maxValue,
                                   setMaxValue,
                                   active,
                                   setActive,
                                   error,
                                   setError
}: ValueContainerType) => {
    return (
        <>
            {output ?
                <div className={`${style.borderCounter} ${style.outerP} ${style.count} ${style.center} ${style.counterPad}`}>
                    {
                    error ? <span className={style.error}>Incorrect value!</span> :
                        (active ? value : `enter values and press 'set'`)
                    }
                </div> :
                <div className={`${style.borderCounter} ${style.outerP} ${style.valContainer}`}>
                    <ValueInput
                        error={error}
                        setError={setError}
                        setActive={setActive}
                        title={'max value:'}
                        className={style.maxContainer}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        maxValue={maxValue}
                        setMaxValue={setMaxValue}/>
                    <ValueInput
                        error={error}
                        setError={setError}
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

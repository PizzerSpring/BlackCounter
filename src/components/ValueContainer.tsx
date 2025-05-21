import style from "../Counter.module.css";
import {ValueInput} from "./ValueInput.tsx";

type ValueContainerType = {
    output: boolean
}

export const ValueContainer = ({output}: ValueContainerType) => {
    return (
        <>
            {output ?
                <div
                    className={`${style.borderCounter} ${style.outerP} ${style.count} ${style.center} ${style.counterPad}`}>0</div> :
                <div className={`${style.borderCounter} ${style.outerP} ${style.valContainer}`}>
                    <ValueInput title={'max value:'} className={style.maxContainer}/>
                    <ValueInput title={'start value:'} className={style.minContainer}/>
                </div>
            }
        </>
    );
};

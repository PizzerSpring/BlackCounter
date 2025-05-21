import style from "../Counter.module.css";
import {Button} from "./Button.tsx";

type ButtonPanelType = {
    counterButton: number
    value: number
    setValue: (value: number) => void
    startValue: number
}

export const ButtonPanel = ({counterButton, setValue, value, startValue}: ButtonPanelType) => {
    return (
        <>
            {counterButton === 1 ? <div className={`${style.borderCounter} ${style.outerP} ${style.center}`}>
                <Button title={'set'} callback={() => {
                    setValue(startValue)
                }} className={style.btn}/>
            </div> : <div className={`${style.borderCounter} ${style.outerP} ${style.btnContainer}`}>
                <Button title={'inc'} callback={() => {

                    setValue(value + 1)
                }} className={style.btn}/>
                <Button title={'reset'} callback={() => {
                    setValue(0)
                }} className={style.btn}/>
            </div>}
        </>
    );
};

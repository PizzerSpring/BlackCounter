import style from "../Counter.module.css";
import {Button} from "./Button.tsx";

type ButtonPanelType = {
    counterButton: number
    value: number
    setValue: (value: number) => void
    startValue: number
    maxValue: number
    active: string
    setActive: (active: string) => void
}

export const ButtonPanel = ({counterButton, setValue, value, startValue, maxValue, active, setActive}: ButtonPanelType) => {
    return (
        <>
            {counterButton === 1 ? <div className={`${style.borderCounter} ${style.outerP} ${style.center}`}>
                <Button disabled={!active} title={'set'} callback={() => {
                    setValue(startValue)
                    setActive('')
                }} className={style.btn}/>
            </div> : <div className={`${style.borderCounter} ${style.outerP} ${style.btnContainer}`}>
                <Button disabled={!!active} title={'inc'} callback={() => {
                    if(value < maxValue) {
                        setValue(value + 1)
                    }
                }} className={style.btn}/>
                <Button disabled={!!active} title={'reset'} callback={() => {
                    setValue(0)
                }} className={style.btn}/>
            </div>}
        </>
    );
};

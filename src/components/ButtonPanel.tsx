import style from "../Counter.module.css";
import {Button} from "./Button.tsx";
import {useState} from "react";

type ButtonPanelType = {
    counterButton: number
    value: number
    setValue: (value: number) => void
    startValue: number
    maxValue: number
    active: string
    setActive: (active: string) => void
    error: string
}

export const ButtonPanel = ({counterButton, setValue, value, startValue, maxValue, active, setActive, error}: ButtonPanelType) => {
    const [disSet, setDisSet] = useState(false);
    return (
        <>
            {counterButton === 1 ? <div className={`${style.borderCounter} ${style.outerP} ${style.center}`}>
                <Button disabled={!!error || maxValue === 0 || disSet} title={'set'} callback={() => {
                    setValue(startValue)
                    setActive('')
                }} className={style.btn}/>
            </div> : <div className={`${style.borderCounter} ${style.outerP} ${style.btnContainer}`}>
                <Button disabled={!!error || !!active || maxValue === value || disSet} title={'inc'} callback={() => {
                        setValue(value + 1)
                }} className={style.btn}/>
                <Button disabled={!!error || !!active || value === 0 || disSet} title={'reset'} callback={() => {
                    setValue(startValue)
                }} className={style.btn}/>
            </div>}
        </>
    );
};

import style from "../Counter.module.css";
import {Button} from "./Button.tsx";

type ButtonPanelType = {
    counterButton: number
}

export const ButtonPanel = ({counterButton}: ButtonPanelType) => {
    return (
        <>
            {counterButton === 1 ? <div className={`${style.borderCounter} ${style.outerP} ${style.center}`}>
                <Button title={'set'} callback={() => {
                }} className={style.btn}/>
            </div> : <div className={`${style.borderCounter} ${style.outerP} ${style.btnContainer}`}>
                <Button title={'inc'} callback={() => {
                }} className={style.btn}/>
                <Button title={'reset'} callback={() => {
                }} className={style.btn}/>
            </div>}
        </>
    );
};

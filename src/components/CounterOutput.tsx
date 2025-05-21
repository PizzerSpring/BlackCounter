import style from "../Counter.module.css";
import {ValueContainer} from "./ValueContainer.tsx";
import {ButtonPanel} from "./ButtonPanel.tsx";
import {useState} from "react";

export const CounterOutput = () => {
    const [value, setValue] = useState(0);
    return (
        <div className={`${style.resultContainer} ${style.outerP}`}>
            <ValueContainer output={true} value={value}/>
            <ButtonPanel counterButton={2} setValue={setValue} value={value}/>
        </div>
    );
};

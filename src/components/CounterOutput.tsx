import style from "../Counter.module.css";
import {ValueContainer} from "./ValueContainer.tsx";
import {ButtonPanel} from "./ButtonPanel.tsx";

export const CounterOutput = () => {
    return (
        <div className={`${style.resultContainer} ${style.outerP}`}>
            <ValueContainer output={true}/>
            <ButtonPanel counterButton={2}/>
        </div>
    );
};

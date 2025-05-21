import style from "../Counter.module.css";
import {ValueContainer} from "./ValueContainer.tsx";
import {ButtonPanel} from "./ButtonPanel.tsx";

export const CountersSettings = () => {
    return (
        <div className={`${style.settingsContainer} ${style.outerP}`}>
            <ValueContainer output={false}/>
            <ButtonPanel counterButton={1}/>
        </div>
    );
};

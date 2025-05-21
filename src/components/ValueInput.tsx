import style from "../Counter.module.css";

type ValueInputType = {
    title: string
    className?: string
}

export const ValueInput = ({title, className}: ValueInputType) => {
    return (
        <div className={className}>
            <span className={style.val}>{title}</span>
            <input className={style.field} type="number" placeholder="0"/>
        </div>
    );
};

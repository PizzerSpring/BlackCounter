import style from "../Counter.module.css";

type ValueInputType = {
    title: string
    className?: string
    startValue: number
    setStartValue: (startValue: number) => void
}

export const ValueInput = ({title, className, startValue, setStartValue}: ValueInputType) => {
    return (
        <div className={className}>
            <span className={style.val}>{title}</span>
            <input onChange={(e) => {
                setStartValue(+e.currentTarget.value);
            }} className={style.field} type="number" placeholder={`${startValue}`}/>
        </div>
    );
};

import style from "../Counter.module.css";

type ValueInputType = {
    title: string
    className?: string
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}

export const ValueInput = ({title, className, startValue, setStartValue, maxValue, setMaxValue}: ValueInputType) => {
    return (
        <>
            {title === 'max value:' ?
                <div className={className}>
                    <span className={style.val}>{title}</span>
                    <input onChange={(e) => {
                        setMaxValue(+e.currentTarget.value);
                    }} className={style.field} type="number" placeholder={`${maxValue}`}/>
                </div>
                : <div className={className}>
                    <span className={style.val}>{title}</span>
                    <input onChange={(e) => {
                        setStartValue(+e.currentTarget.value);
                    }} className={style.field} type="number" placeholder={`${startValue}`}/>
                </div>}
        </>
    );
};

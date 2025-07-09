import type {ChangeEvent} from "react";

type InputType = {
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    className?: string
}

export const Input = ({callback, value, className}: InputType) => {
    return (
        <input onChange={callback} className={className} type="number" placeholder={`${value}`} value={value}/>
    );
};


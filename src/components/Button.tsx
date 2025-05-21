
type ButtonType = {
    title: string
    callback: () => void
    className?: string
    disabled?: boolean
}

export const Button = ({title, callback, className, disabled}: ButtonType) => {
    return (
        <button disabled={disabled} className={className} onClick={() => {
            callback()
        }}>{title}</button>
    );
};

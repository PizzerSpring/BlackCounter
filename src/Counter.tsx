import style from './Counter.module.css';

const Counter = () => {
    return (
        <div className={`${style.bg} ${style.center}`}>
            <div className={style.counterContainer}>
                <div className={`${style.settingsContainer} ${style.outerP}`}>
                    <div className={`${style.borderCounter} ${style.outerP} ${style.valContainer}`}>
                        <div className={style.maxContainer}>
                            <span className={style.val}>max value:</span>
                            <input className={style.field} type="number" placeholder="0"/>
                        </div>
                        <div className={style.minContainer}>
                            <span className={style.val}>start value:</span>
                            <input className={style.field} type="number" placeholder="0"/>
                        </div>
                    </div>
                    <div className={`${style.borderCounter} ${style.outerP} ${style.center}`}>
                        <button className={style.btn}>set</button>
                    </div>
                </div>
                <div className={`${style.resultContainer} ${style.outerP}`}>
                    <div className={`${style.borderCounter} ${style.outerP} ${style.count} ${style.center} ${style.counterPad}`}>0</div>
                    <div className={`${style.borderCounter} ${style.outerP} ${style.btnContainer}`}>
                        <button className={style.btn}>inc</button>
                        <button className={style.btn}>reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
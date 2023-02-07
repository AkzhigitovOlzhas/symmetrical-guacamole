import {useState} from "react";
import classes from "./counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={classes.counter}>
            <h1 className={classes.green}>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

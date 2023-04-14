import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import './AIEngine.css'


export default function Spinner() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("red");

    return (
        <div className="sweet-loading">
            <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
            <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

            <HashLoader
                className="spinner"
                color={color}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <div>
                hilas
            </div>
        </div>
    );
}


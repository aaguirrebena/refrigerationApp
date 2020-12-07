import React, { useEffect, useState } from "react";
import './Form.css'

function Form({handle}) {

    const [ti, setTi] = useState("");
    const [tf, setTf] = useState("");

    function handleChangeTi(event) {
        setTi(event.target.value);
    }
    function handleChangeTf(event) {
        setTf(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        handle(ti, tf)
    }

    return (
        <div className="main">
            <form onSubmit={handleSubmit} className="main__form">
                <div className="main__ti">
                    <label>
                        Temperatura Ambiente:
                        <input type="number" value={ti} onChange={handleChangeTi} />
                    </label>
                </div>
                <div className="main__tf">
                    <label>
                        Temperatura Buscada:
                        <input type="number" value={tf} onChange={handleChangeTf} />
                    </label>
                </div>
                <div className="main__submit">
                    <input type="submit" value="Submit" />

                </div>
            </form>
        </div>
    )
}

export default Form

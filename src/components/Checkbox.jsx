import { useState } from "react";

const Checkbox = ( label, name, value, defaultCheck = false ) => {
    const [checked, setChecked] = useState(defaultCheck);

    const handleChange = () => {
        setChecked(!checked);
    }

    return (
        <label>
            <p>{label}</p>
            <input type='checkbox' name={name} value={value} checked={defaultCheck} onChange={handleChange} />
        </label>
    )
}

export default Checkbox;
import { useState } from "react";

const Checkbox = ({ label, name, value, defaultCheck = false }) => {
    const [checked, setChecked] = useState(defaultCheck);

    const handleChange = () => {
        setChecked(!checked);
    }

    return (
        <label>
            {`${label}: `}
            <input type='checkbox' name={name} value={value} checked={checked} onChange={handleChange} />
        </label>
    )
}

export default Checkbox;
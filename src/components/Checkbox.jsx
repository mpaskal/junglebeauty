import { useState } from "react";

const Checkbox = ({ label, name, value, changeHandler, defaultCheck = false }) => {
    const [checked, setChecked] = useState(defaultCheck);

    const handleChange = (event) => {
        setChecked(!checked);
        changeHandler(event);
    }

    return (
        <label>
            {`${label}: `}
            <input type='checkbox' className='checkbox' name={name} value={value} checked={checked} onChange={handleChange} />
        </label>
    )
}

export default Checkbox;
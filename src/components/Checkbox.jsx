import { useState } from "react";

const Checkbox = ({ label, category, value, handleChange, checked }) => {
    return (
        <label>
            {`${label}: `}
            <input type='checkbox' className='checkbox' name={category} value={value} checked={checked} onChange={handleChange} />
        </label>
    )
}

export default Checkbox;
import React from "react";

const InputBar = ({value, handleChange, onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
            <input value = {value} type = 'text' onChange={handleChange}></input>
        </form>
    )
}

export default InputBar;
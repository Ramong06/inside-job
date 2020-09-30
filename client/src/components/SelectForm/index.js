import React, { useState } from "react";
import "./style.css";

function SelectForm({selectItem, handleChange, itemList}) {

    return (
        <form onChange={handleChange}>
            <select value={selectItem} onChange={handleChange}>
                {itemList.map((item, index) => (
                    <option key={index} value={index}>{item.label}</option>
                ))}
            </select>
        </form>
    );
}

export default SelectForm;

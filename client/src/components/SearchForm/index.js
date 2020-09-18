import React from "react";

function SearchForm(props) {
    return (
            <div className="form-group">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="results"
                    className="form-control"
                />
                <button onClick={props.handleFormSubmit}>Submit</button>
            </div>
    );
}

export default SearchForm;
import React from "react";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    value={props.search}
                    onSubmit={props.handleSubmit}
                    name="term"
                    className="form-control"
                />
            </div>
        </form>
    );
}

export default SearchForm;
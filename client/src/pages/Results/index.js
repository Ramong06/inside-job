import React, { useState, useEffect } from "react";

function Results({ searchData }) {
  console.log(searchData);

  return (
    <React.Fragment>
      {searchData.length ? (
        <div>
          <ul>
            {searchData.map((company) => {
              return <li>{company.name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>No Results</div>
      )}
    </React.Fragment>
  );
}

export default Results;

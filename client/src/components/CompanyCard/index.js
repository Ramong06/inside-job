import React from "react";
import "./style.css";

function CompanyCard() {
  return (
    <div className="row justify-content-center">
      <div className="col col-lg-8">
        <div className="card-group">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Company Name</h5>
              <p className="card-text">Full Description </p>
              <p className="card-text">Salary Info</p>
              <p className="card-text">Ticker - Industry - Sector</p>
              <a href="#" className="card-link">
                Link to company website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;

//   function CompanyCard (props) {
//     console.log(props);
//     return (
//       <div className="row justify-content-center">
//         <div className="col col-lg-8">
//           <div className="card-group">
//             <div className="card" style={{ width: "100%" }}>
//               <div className="card-body">
//                 <h5 className="card-title">{props.company.name}</h5>
//                 <p className="card-text">{props.company.description}</p>
//                 <p className="card-text">{props.company.salary}</p>
//                 <p className="card-text">{props.company.symbol} - {props.company.industry} - {props.company.sector}</p>
//                 <a href="#" className="card-link">
//                   {props.company.website}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

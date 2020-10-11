import React from "react";
import "./style.css";

function CompanyCard({ data }) {
  return data ? (
    <div className="row justify-content-center">
      <div className="col col-lg-8">
        <div className="card-group">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">{data.companyName}</h5>
              <p className="card-text">{data.description}</p>
              {/* Needs to get populated from DB */}
              <p className="card-text">{data.salary}</p>
              <p className="card-text">
                {data.symbol} - {data.sector} - {data.industry}
              </p>
              <a href="#" className="card-link">
                Link to company website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
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

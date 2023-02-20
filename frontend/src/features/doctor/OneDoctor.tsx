import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Doctor } from "./Type/type";

const OneDoctor = ({ oneDoctor }: { oneDoctor: Doctor }) => {
  const { doctorId } = useParams();
  console.log(doctorId);

  return (
    <div className="doctorDIv">
      <div>{oneDoctor.name}</div>
      <div>{oneDoctor.specific}</div>
      <div className="photoDotcorDiv">
        <img src={oneDoctor.img}></img>
      </div>
      <NavLink to={`/doctors/:${oneDoctor.id}`}>подробная информация</NavLink>
    </div>
  );
};
// const OneDoctor = ({ oneDoctor }: { oneDoctor: Doctor }) => {
//   const [page, setPage] = useState("standart");
//   return (
//     <>
//       {" "}
//       {page === "standart" ? (
//         <div className="doctorDIv">
//           <div>{oneDoctor.id}</div>
//           <div>{oneDoctor.name}</div>
//           <div>{oneDoctor.specific}</div>
//           <div className="photoDotcorDiv">
//             <img src={oneDoctor.img}></img>
//           </div>
//           <button onClick={() => setPage("info")}>Подродная информация</button>
//           {/* <NavLink to={`/doctors/${oneDoctor.id}`}>подробная информация</NavLink> */}
//           {/* <div>{oneDoctor.info}</div> */}
//         </div>
//       ) : (
//         <div className="doctorDIv">
//           <div>{oneDoctor.id}</div>
//           <div>{oneDoctor.name}</div>
//           <div>{oneDoctor.specific}</div>
//           <div className="photoDotcorDiv">
//             <img className="ptohoDoctor" src={oneDoctor.img}></img>
//           </div>
//           <div>{oneDoctor.info}</div>
//           <button onClick={() => setPage("standart")}>Скрыть</button>
//         </div>
//       )}
//     </>
//   );
// };

export default OneDoctor;

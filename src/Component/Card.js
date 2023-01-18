import React, { useState } from "react";
import ReadMore from "./ReadMore";
import Records from "./records.json";
function Card() {

  return (
    <div className="justify-items-center grid grid-cols-1 lg:grid-cols-3 lg:gap-3 gap-2  mx-2 px-2 justify-center">{
      Records && Records.map((record) => {
        return(
      <div className=" mt-5 key={record.id} max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <div className="img max-w-sm" >
          <img className="rounded-t-lg" src={record.image1} alt="" />
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {record.tittle}
            </h5>
          </a>
          {record.para1}
          <ReadMore/>
                </div>
      </div>)})}

          </div>
  );
}

export default Card;

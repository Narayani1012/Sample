import React from "react";

const Input = ({inputname,placeholdername,typename,valuename,onChangename}) => {
    return (
      <div>
        <br/>
        <input className="text" name={inputname} placeholder={placeholdername} value={valuename} onChange={onChangename} type={typename} />
      </div>
    );
}

export default Input
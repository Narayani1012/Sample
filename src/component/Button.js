import React from "react";

const Button = ({name,color,onchange,border_line}) => {
    return (
      <div>
        <br/>
          <button className="reg-btn" style={{background:color,border:border_line}} onClick={onchange}>{name}</button>
      </div>
    );
}

export default Button;
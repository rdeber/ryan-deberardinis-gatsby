import React from "react"

export default ({ children }) => (

  <div className="marvel-device ipad black landscape">
    <div className="camera"></div>
    <div className="screen">
      {children}
    </div>
    <div className="home"></div>
  </div>

)
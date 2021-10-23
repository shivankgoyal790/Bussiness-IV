import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Infocard from "./Infocard";
import logo from "../../../images/images_features12-a_0-1544804161468.jpg"
const Infocardcontainer = () =>{
    return(
        <div className="w-75 d-flex justify-content-center flex-column flex-md-row gap-5">
            <div className="d-flex flex-column gap-5 align-items-center">
                <Infocard align="flex-end" head="Digital Computing" alignpara="right"/>
                <Infocard align="flex-end" head="Cloud Computing" alignpara="right"/>
                <Infocard align="flex-end" head="AI Frameworks" alignpara="right"/>
            </div>
            <div className="w-50 d-flex justify-content-center align-items-center"><img src={logo} alt="logo" style={{width:"100%"}}/></div>
            <div className="d-flex flex-column gap-5 align-items-center">
                <Infocard head="My Heading is awesome" />
                <Infocard head="My Heading is awesome" />
                <Infocard head="My Heading is awesome" />
            </div>
        </div>
    )
}

export default Infocardcontainer
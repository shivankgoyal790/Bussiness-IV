// info card in the whatwedo container
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Infocard = (props) =>{
    return(
        <div className="d-flex flex-column text-white gap-3" style={{alignItems:props.align}}>
                <FontAwesomeIcon icon={faCloud} style={{fontSize:"50px"}}/>
                <h4>{props.head}</h4>
                <p style={{textAlign:props.alignpara}}>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore.</p>
        </div>
    )
}

export default Infocard
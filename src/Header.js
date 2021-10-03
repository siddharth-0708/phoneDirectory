import React, { Fragment ,useEffect, useState } from "react";
import {LocationHook} from "./customHook"
const Header = function(props){
    // const [showData, setshowData] = useState({"city": "", "region": ""});

    // useEffect(() => { 
    //     async function locationData(){
    //         const response  = await getLocationData();
    //         setshowData(response);
    //     }
    //     locationData();
    //   },[]);
    const showData = LocationHook();

    return(
        <Fragment>
        <div className = "header">
            {props.headingName}
        </div>
        <h4>
            Welcome user, your city name is {showData.city} and county name is {showData.region}
        </h4>
        </Fragment>
    )    
}
export default Header;
import React, { useContext } from "react";
import subscriberCountContext from "./SubscriberCountContext";
import { useSelector } from "react-redux";

export default function Footer(){
    //const subscribersReduxList = useSelector(state => state.subscribers); 
    console.log("THIS IS FOOOTERRRR");
    const count = useContext(subscriberCountContext)
    return(
        <h4> Number of Enteries: {count}</h4>
    )    
}

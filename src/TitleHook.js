import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function TitleHook(){
    //const subscribersReduxList = useSelector(state => state.subscribers); 
    console.log("THIS IS TitleHook");
    const count = useSelector(state => state.subscribers);
    useEffect(() => {
        console.log("This is use effect of showsubscribers component");
            document.title = "Phone Directory - " + count.length;
      },[count]); 
    return(
        null
    )    
}
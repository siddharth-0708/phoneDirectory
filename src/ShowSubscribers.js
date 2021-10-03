import React, { useEffect } from "react";
import Header from "./Header";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

export default function ShowSubscribers(props) { //from phone directory in functional props can be catched as parameters
  function clickHandler(id){
    props.deleteSubscriberHandler(id);
  }
  //GLOBAL REDUX USEEEE: CASE: SUPPOSE SHOWSUB PROPS U ARE NOT GETTING NOW
  //THE ONE WE USED TO CREATE STORE HAS A STATE AND ACTION. THIS CALL BACK WILL PASS ENTIRE JSON AND WE ARE FILTERING LIKE PLEASE GIVE ME ONLY VALUE OF SUBSCRIBERS
  const subscribersReduxList = useSelector(state => state.subscribers); 

  useEffect(() => {
    console.log("This is use effect of showsubscribers component");
        //document.title = "Phone Directory - " + subscribersReduxList.length;
  },[subscribersReduxList]);

  return (
    <div>
        <Header headingName = "Phone Directory"/> {/* this is user defined component so react will allow u to pass props */}
       <Link to = "/add"> <button id="button"> Add</button> </Link> {/* Link to is same as a href*/}
        <div id="data">
          <div className="heading info">
            <span className = "name"> Name </span>
            <span className = "phone">Phone Number</span>
            <button id="delete" className = "dummy">Action</button>
          </div>
          {/*<div>
            sid
          </div>*/}
          {subscribersReduxList.map((obj) => {
            return (
              <div className="info" key={obj.id}>
                <span className = "name"> {obj.name} </span>
                <span className = "phone"> {obj.phone}</span>
                <button id="delete" onClick = {()=> clickHandler(obj.id)}>Delete</button>
              </div>
            );
          }) }
      </div>
   </div> 
 );
}
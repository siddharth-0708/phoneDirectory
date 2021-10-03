import React, { useState, useEffect } from "react";
import Header from "./Header";
import {Link, useHistory} from "react-router-dom";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import { useSelector } from "react-redux";

export default function AddSubscriber(props){
  console.log("This is Intsnace of AddSubscriber")
  //const subscribersReduxList = useSelector(state => state.subscribers); 

  //addsubscriber IS THE STATE HEREEEEEEEE STEP1
  const [addSubscriber, addSubscriberSet] = useState({
    name: "",
    phone: ""
  })

  useEffect(() => {
    console.log("This is use effect of AddSubscriber component");
  },[]);
  const {name, phone} = addSubscriber;

  const history = useHistory();

  function changeHandler(e){
    const state = addSubscriber;
    state[e.target.name] = e.target.value;
    //METHOD 1
    addSubscriberSet({...state});
}
  function onFormSubmit(e){
    props.addSubscriberProps(addSubscriber);
    //METHOD2
    addSubscriberSet({
      name: "",
      phone: ""
    });
    //history.push("/"); //THIS IS NOT CALLING RENDER AGAIN. IT IS SIMPLY GOING TO SUBSCRIBERS PAGE
}
  return(
    <div>
      {console.log("This is AddSubscriber RENDERING")}
    <Header headingName = "Add Subscription"/> {/* this is user defined component so react will allow u to pass props */}
    <Link to = "/"><button id="button"> Back</button></Link>
    <ValidatorForm id="data" onSubmit = {onFormSubmit}>
      <TextValidator 
        type = "text"
        label = "Name:"
        name = "name" 
        onChange = {changeHandler} 
        value = {name}
        validators = {["required"]}
        errorMessages = {['Name is needed']}
        >
      </TextValidator>

      <br/>

      <TextValidator 
        type = "text"
        label = "PhoneNo:"
        name = "phone" 
        onChange = {changeHandler} 
        value = {phone}
        validators = {["required"]}
        errorMessages = {['Phone number is needed']}
        >
      </TextValidator>

      <br/>
      
      <input type="submit" />
    </ValidatorForm>
      </div>  
    )
}
import React, { useState, useEffect, Fragment } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import "./ShowSubscribers.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Footer from "./Footer";
import subscriberCountContext from "./SubscriberCountContext";
import { useDispatch } from "react-redux";
import TitleHook from "./TitleHook";

export default function PhoneDirectory(){
  console.log("This is Intsnace of phone directpory")

    const [subscribers, setSubscribersList] = useState([]);

    const dispatch = useDispatch();

    async function load(){
        try {
            const rawPromise = fetch('http://localhost:7081/contacts',{
                method: 'GET',
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json;charset=UTF-8"
                }
            })
            const rawResponse = await rawPromise;
            var data = await rawResponse.json();
            
          if(rawResponse.ok){
            dispatch({"type": "SET_SUBSCRIBERS", "payload": data});
            setSubscribersList(data);
          }else{
              const error = new Error();
              error.message = error.message ?  error.message : "something happened";
              throw error;
          }
    
          } catch (error) {
              
          }
    }

    useEffect(() => { //This happens just once
        console.log("THIS IS USE EFFECT OF PHONE DIRECTORY")
        load();
      },[]);

    function deleteSubscriberHandler(id) {
        async function onDelete(){
            try {
                const rawPromise = fetch('http://localhost:7081/contacts/' + id,{
                    method: 'DELETE',
                    headers: {
                      "Accept": "application/json",
                      "Content-Type": "application/json;charset=UTF-8"
                    }
                })
                const rawResponse = await rawPromise;
                var data = await rawResponse.json();
                
              if(rawResponse.ok){
                load();
              }else{
                  const error = new Error();
                  error.message = error.message ?  error.message : "something happened";
                  throw error;
              }
        
              } catch (error) {
                  
              }
        }
        onDelete();
        // console.log(a);
        // let subscribersList = subscribers;
        // let subscriberIndex = 0;
        // subscribersList.forEach(function(sub, index){
        //     if(sub.id === id){
        //         subscriberIndex = index;
        //     }
        // });
        // let newSubscribers = subscribersList.filter((sub) => sub.id !== id);
        // console.log(newSubscribers);
        // setSubscribersList(newSubscribers);
    } 

    function addSubscriber (newSubscriber){
        async function onAdd(){
            const params = newSubscriber;
            try {
                const rawPromise = fetch('http://localhost:7081/contacts',{
                    method: 'POST',
                    body: JSON.stringify(params),
                    headers: {
                      "Accept": "application/json",
                      "Content-Type": "application/json;charset=UTF-8"
                    }
                })
                const rawResponse = await rawPromise;
                var data = await rawResponse.json();
                
              if(rawResponse.ok){
                dispatch({"type": "SET_SUBSCRIBERS", "payload": data});
                load();
              }else{
                  const error = new Error();
                  error.message = error.message ?  error.message : "something happened";
                  throw error;
              }
        
              } catch (error) {
                  
              }
        }
        onAdd();
        // let sub = subscribers; //THIS WILL ALSO NOT RENDER THIS PAGE
        // if(sub.length > 0){
        //     newSubscriber.id = sub[sub.length - 1].id + 1;
        // }else{
        //     newSubscriber.id = 1;
        // }
        // sub.push(newSubscriber);
        // setSubscribersList(sub);
    }
    return (
        <Fragment>
          {console.log("This is pjhone rendering functional")}
            <Router>
                <div>
                <Route path = "/" exact render = {(props) => <ShowSubscribers {...props} showSub = {subscribers} deleteSubscriberHandler = {deleteSubscriberHandler}/>}/>
                <Route path = "/add" render = {(props) => <AddSubscriber {...props} addSubscriberProps = {(newSubscriber) => addSubscriber(newSubscriber)}/>}/>
                </div>
            </Router>
            {console.log("This is fragmentttt " + subscribers.length)}
            <subscriberCountContext.Provider value = {subscribers.length}>
            <Footer/>
            </subscriberCountContext.Provider>
            <TitleHook/>
        </Fragment>
    )
}

//<Route path = "/" exact render = {(props) => <ShowSubscribers {...props} showSub = {subscribers} deleteSubscriberHandler = {(id) => deleteSubscriberHandler(id)}/>}/>
//<Route path = "/" exact render = {(props) => <ShowSubscribers {...props} showSub = {subscribers} deleteSubscriberHandler = {deleteSubscriberHandler}/>}/>

import { useState, useEffect} from "react";

export default async function getLocationData(){
    try {
        const rawPromise = fetch('http://ipapi.co/json',{
            method: 'GET',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json;charset=UTF-8"
            }
        })
        const rawResponse = await rawPromise;
        var data = await rawResponse.json();
        
      if(rawResponse.ok){
            return data;
      }else{
          const error = new Error();
          error.message = error.message ?  error.message : "something happened";
          throw error;
      }

      } catch (error) {
          
      }
      return {};
}

//USED TO ACHIEVE ABSTRACTION
export const LocationHook = () => {
    const [showData, setshowData] = useState({"city": "", "region": ""});

    useEffect(() => { 
        async function locationData(){
            const response  = await getLocationData();
            setshowData(response);
        }
        locationData();
      },[]);

      return showData;
}
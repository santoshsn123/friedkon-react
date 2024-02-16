import axios from "axios";
import { resolve } from "path";
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const getAPIData = async (url: string) => await axios.get(`${apiUrl}/${url}`);

const callApis = (apiEndpoints:Array<string>) => {
   return new Promise((resolve, reject)=>{
    Promise.all(apiEndpoints.map(getAPIData))
    .then(
      (data:any) => resolve(data)
    )
    .catch((error) => reject(error));
   })
}

const changeDateFormat=(date:Date)=>{
  return `${date.getDate()}-${addZeroIfRequired(date.getMonth()+1)}-${date.getFullYear()}`
}
const addZeroIfRequired = (value:number)=> JSON.stringify(value).length<2?`0${JSON.stringify(value)}`:JSON.stringify(value);


export  {callApis, getAPIData, changeDateFormat}
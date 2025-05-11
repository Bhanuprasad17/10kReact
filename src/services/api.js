// import { registerPostApi } from "./constants"

import axios from "axios";
import { registerPostApi } from "./constants";

// export const postRegisterData = async(payload) =>{
//     const response = await fetch(registerPostApi, payload)
//     const data = response.json()
//     if(response.ok){
//         console.log('successfully data posted on json db')
//     }else{
//         console.log('failed to post the data on json db')
//     }
// }

// export const loginApiData = async(payload) => {
//     const response = await fetch(`${registerPostApi}?email=${payload.email}&password=${payload.password}`)
//     const data = await response.json()
//     // console.log('data',data)
//     return data
// }

export const postRegisterData = async (payload) => {
  try {
    const response = await axios.post(registerPostApi, payload);
    console.log("data", response.data);
  } catch (error) {
    console.log("Failed to post the data:", error.message);
  }
};


export const getLoginData = async (payload) =>{
    try {
        const response = await axios.get(registerPostApi, {
            params : {
                email : payload.email,
                password : payload.password
            }
        })

        // console.log(response.data[0])

        return response.data[0]
        
    } catch (error) {
        console.log('failed to login', error.message)
    }
}

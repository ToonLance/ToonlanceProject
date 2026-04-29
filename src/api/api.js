import axios from "axios";

export const fetchApi = async()=>{
    try {
       let res = await axios.get('http://localhost:5000/hello') 
      console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}
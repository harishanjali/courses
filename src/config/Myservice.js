import { URL,USER_URL } from "./URL";
import axios from 'axios'

function getCourses(){
    return axios.get(URL);
}
function getUsers(){
    return axios.get(USER_URL);
}
function addUser(data){
    return axios.post(USER_URL,data)
}
export {getCourses,addUser,getUsers}
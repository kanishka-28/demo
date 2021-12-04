import axios from "axios";

export const signupApi = (data)=>{
    return axios.post("/api/auth/createuser", data)
}

export const loginApi = (data)=>{
    return axios.post("/api/auth/login", data)
}

export const getUser=async ()=>{
    return await axios.get("/api/auth/getuser",{
        headers:{
            token: localStorage.getItem("token")
        }
    });
}

export const getNotes=async ()=>{
    return await axios.get("/api/notes/fetchnotes",{
        headers:{
            token: localStorage.getItem("token")
        }
    });
}

export const addNote = (data)=>{
    return axios.post(`/api/notes/addnote`, data, {
        headers:{
            token: localStorage.getItem("token")
        }
    })
}

export const editNote = ({title, tag, description, id})=>{
    return axios.put(`/api/notes/updatenote/${id}`, {title, tag, description}, {
        headers:{
            token: localStorage.getItem("token")
        }
    })
}

export const deleteNote = (id)=>{
    return axios.delete(`/api/notes/delete/${id}`, {
        headers:{
            token: localStorage.getItem("token")
        }
    })
}


export const searchNote = (data)=>{
    return axios.get(`/api/notes/searchnote/${data}`,{
        headers:{
            token: localStorage.getItem("token")
        }
    })
}

export const searchTag = (data)=>{
    return axios.get(`/api/notes/searchnote/${data}`,{data}, {
        headers:{
            token: localStorage.getItem("token")
        }
    })
}

import axios from "axios";

const API_URL = "http://localhost:8080";


export const savePost = async (payload) => {
    try {  
        return await axios.post(`${API_URL}/post`, payload); 
    } catch (error) {
        console.log("Error:  ", error.message);
        return error.response.data;
    }
}

export const getAllPosts = async () => {
    try {  
        return await axios.get(`${API_URL}/posts`);    
    } catch (error) {
        console.log("Error: ", error.message);
        return error.response.data;
    }
}  

// Delete 
export const deletePost = async (id) => {
    try {
        return await axios.delete(`${API_URL}/posts/delete/${id}`);
    } catch (error) {
        console.log("Delete Error: ", error.message);
        throw error.response.data;
    }
};






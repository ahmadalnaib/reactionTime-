
import {ref } from 'vue'
import axios from 'axios'

const getProject=(id)=>{
  const project= ref(null);
  const error= ref(null);

  const fetchProject=async()=>{
    try{
      const response= await axios.get(`http://localhost:3000/projects/${id}`);
      project.value=  response.data;

    }catch(err){
      error.value=err.message
    }
  }
  return {
    project,
    error,
    fetchProject
  }

}

export default getProject
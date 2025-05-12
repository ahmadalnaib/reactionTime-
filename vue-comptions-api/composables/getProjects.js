import {ref } from 'vue'
import axios from 'axios'

const getProjects = ()=>{
  const projects= ref([]);
const error= ref(null);

const fetchProjects=async()=>{
  try{
    const response= await axios.get('http://localhost:3000/projects');

    projects.value=  response.data;

  }catch(err){
    error.value=err.message
  }
}
return {
  projects,
  error,
  fetchProjects
}
}

export default getProjects
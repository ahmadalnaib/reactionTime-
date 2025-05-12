import {ref,onMounted} from 'vue'
import axios  from 'axios';

const getProjecs=()=>{

const projects=ref([])
const error=ref(null)

const fetchProjects=async ()=>{
  const res = await axios.get('http://localhost:3001/projects');
  console.log(res.data)
  projects.value=res.data
}

return {
  projects,
  error,
  fetchProjects
}
}

export default getProjecs;
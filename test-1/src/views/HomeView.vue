<script setup>
import { onMounted } from 'vue';
import getProjecs from '../../composables/getProjects';

const {fetchProjects,projects,error}= getProjecs()



onMounted(()=>{
  fetchProjects()
})



</script>
<template>
    <div class="tasks" :key="task.id" v-for="task in tasks">
        <Task 
         @toggleRemainder="$emit('toggle-remainder',task.id)"
          :task="task"
          @clear-task="$emit('clear-Task',task.id)"
          />
    </div>
    
</template>

<script>
import Task from "./Task"
    export default{
        name:'Tasks',
        props:{
            tasks:Array,
        },
       
        emits:['toggle-remainder','clear-Task'],
        components:{
            Task,
        },
    }
</script>

<style scoped>
   
</style>
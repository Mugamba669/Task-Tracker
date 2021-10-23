<template>
   <div class="taskTracker">
      <Header
        @show-task-add="showAddTask()"
        :toggleAdd="showTask"
       
       />
      <AddTask 
      @add-new-task="addNewTask"
      v-if="showTask"/>

      <div v-if="events" class="tasks">
        <Tasks
         @clear-Task="clearTask" 

         @toggle-remainder="toggle"
         :tasks="tasks"/>
      </div>
</template>

<script>
import Header from "./components/Header"
import Tasks from "./components/Tasks/Tasks"
import AddTask from "./components/AddTask/AddTask"
export default {
    name: 'Home',
       data(){
      return{
        showTask:false,
        events:true,
        tasks :[]
      }
    },
   components:{
     Header,
     Tasks,
     AddTask,
   },
   methods:{
     showAddTask(){
       this.showTask = !this.showTask;
       this.events = !this.events;
     },
     async fetchTask(id){
       const db = await fetch(`api/Tasks/${id}`);
       const response = await db.json();
       return response;
     },
         async toggle(id){
            const taskToggle = await this.fetchTask(id);
            const updateRemainder =  {...taskToggle , remainder:!taskToggle.remainder}
               await fetch(`api/Tasks/${id}`,{
                    method:'PUT',
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(updateRemainder),
                });
               this.tasks = this.tasks.map((task) => task.id === id?{...task,remainder:!task.remainder}:task)

              console.log(await this.fetchTask(id))
            },

           async clearTask(id){
             this.tasks = this.tasks.filter((task) => task.id !== id);
                 await fetch(`api/Tasks/${id}`,{
                    method:'DELETE',
                    headers:{
                        "Content-Type": "application/json"
                    },
                })
            },
           async addNewTask(task){
               await fetch("api/Tasks/",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify(task)
                });
              this.tasks.push(task);

            }
   },
 async created(){
     const dbQuery = await fetch("api/Tasks/");
     const data = await dbQuery.json();
     this.tasks = data;
  }
   
}
</script>

<style lang="">
     .taskTracker{
      margin: 10px;
      width:400px;
      height: 400px;
      padding: 10px;
      border: 1px solid #00ccff;
      border-radius: 5px;
    }

     .tasks{
        height:340px;
        overflow-y:scroll;
        overflow-x:hidden;
    }

     .tasks::-webkit-scrollbar{
        appearance:none;
        width:5px;
        height:5px;
    }

    .tasks::-webkit-scrollbar-thumb{
        background:rgba(94, 91, 97, 0.933);
        border-radius:5px;
    }
</style>
<template>
    <div class="form">
        <label> Task Name</label>
        <input type="text" v-model="taskname" class="task-name" placeholder="Enter task name"/>
       <label>Period</label>
        <input type="date" v-model="period" name="taskperiod"/>

        <div class="remind">
            <label>Remainder</label>
           <input type="checkbox" name="remainder" class="remainder" v-model="remainder"/>
        </div>

       
        <button @click="showTask()">Add Task</button>
    </div>
</template>

<script>
    export default{
        name:'AddTask',
       data(){
            return{
                taskname:"",
                period:"",
                remainder:false,
            }
       },
        methods:{
           async showTask(){
                const task = {
                    id:Math.floor(Math.random() * 10000),
                    remainder:this.remainder,
                    taskname:this.taskname,
                    period:this.period
                }
            this.$emit('add-new-task',task);
            // this.$emit()
               this.taskname = '';
               this.period = '';
               this.remainder = false
                
            }
        }
    }
</script>

<style scoped>
    .form{
        display:flex;
        flex-direction:column;
        width:350px;
        margin:10px;
        padding:10px;
        border: 1px solid #3A3A55;
        border-radius:4px;
    }
    .form label{
        margin:5px;
        font:400 17px Ubuntu,Arial;
    }
    .form input{
        outline:none;
        border:1px solid gray;
        padding:10px;
        margin:10px;
        font:300 16px Ubuntu,Arial;
        border-radius:4px;
    }
    .form input:hover{
         box-shadow:inset 0px 0px 1px 0px #00ccff;
        border:1px solid #00ccff;
    }
    .form .task-name{
        font:400 14px Ubuntu,Arial!important;
    }

    .form button{
        padding:10px;
        outline:none;
        background:#000ccc;
        color:#ffff;
        border:none;
        border-radius:5px;
        cursor:pointer;
        transition:0.3s cubic-bezier(0,0.55,-0.008,0.25,0.33,0.002,0.89);
        margin:10px;
        font:400 15px Ubuntu,Arial!important;
        transform:scale(1,1)
    }
    .form button:hover{
        transform:scale(1.1,1.1);
    }
    .form .remind{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .form  .remind .remainder{
        width:20px;
        height:20px;
        outline:none;
    }
</style>
<template>
    <div @dblclick="$emit('toggleRemainder',task.remainder)" :class="[task.remainder? 'active' :'','taskBody']">
        <div class="taskDetails">
            <b>{{task.taskname}}</b>
            <b>{{task.period}}</b>
        </div>
    <!-- contanier for closing button -->
         <div class="clearTask">
             <button @click="clearTask()">&times;</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Task',
        props:{
           task:Object,
        },
       methods:{
           clearTask(){
               this.$emit("clear-task",this.task.id)
           }
       }

    }
</script>


<style scoped>
     .taskBody{
        user-select: none;
        margin:10px;
        width:380px;
        height:70px;
        background:#dddd;
        border-radius:2px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:space-around;
    }
    .taskBody.active{
        border-left:3px solid grey;
    }
    .taskBody .taskDetails{
        width:270px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:space-around;
        margin:10px;
    }

    .taskBody .taskDetails p , b{
        font:400 16px Ubuntu,Arial;
    }

    .clearTask{
        width:80px;
        /* background:#ccc; */
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .clearTask button{
        width:40px;
        height:40px;
        font-size:29px;
        outline:none;
        border:none;
        cursor:pointer;
        background:none;
        color:red;
    }
</style>
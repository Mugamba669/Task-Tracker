<template>
    <button :class="[color]" @click="onClick">{{text}}</button>
</template>

<script>
    export default{
        name:'Button',
        props:{
            text:String,
            color:String,
        },
        methods:{
            onClick(){
                this.$emit("show-add-task")
                }
        },
        created(){
        console.log(this.color)
    }
    }
    
</script>

<style scoped> 
    button{
        width:60px;
        height:35px;
        background:#000ccc;
        color:white;
        border:none;
        border-radius:5px;
        padding:0px;
        font:400 15px Ubuntu;
        cursor:pointer;
    }
    button.active{
        background:#E41313;
    }
</style>


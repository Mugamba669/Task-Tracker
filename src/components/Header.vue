<template>
    <header>
        <b>Task Tracker</b>
        <Button 
        :text="toggleAdd ?'Close':'Add'"
        :color="toggleAdd ? 'active':''"
        @show-add-task="$emit('show-task-add')"
        />
    </header>
</template>

<script>
import Button from "./Button"
export default {
    name:'Header',
    props:{
        toggleAdd:Boolean,
    },
    components:{
        Button
    },
    created(){
        console.log(this.toogleAdd)
        }
}
</script>

<style lang="css" scoped>
    header{
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:space-around;
        margin:10px
    }
    header b{
        font:400 18px Ubuntu,Arial;
        
    }
</style>
<template>
    <footer>
        <router-link class="link" to="/">Home</router-link> 
            <b>|</b>
        <router-link  class="link" to="/about">About</router-link>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="css" scoped>
    footer{
        display: flex;
        flex-direction: row;
        width:200px;
        justify-content: space-evenly;
        background: #454653;
        padding: 10px;
        border-radius: 5px;
    }
    footer b{
        color:white;
        font:400 18px Ubuntu,Arial;
    }
   footer .link{
        text-decoration: none;
        color:azure;
        font:300 18px Ubuntu,Arial;
    }
</style>
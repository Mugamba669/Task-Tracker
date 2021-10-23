<template>
    <div class="card">
        <img class="cover" src="../assets/logo.png"/>
        <h3>Mugamba Bruno</h3>
        <b>
            <a class="email" href="mailto:brunohectre@gmail.com"> brunohectre@gmail.com</a></b>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="css" scoped>
    .card{
        width:300px;
        height:300px;
        background: #F9FCFC;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin: 15px;
        box-shadow: 0px 2px 3px 0px #222;
        transition: 0.3s ease-in-out;
    }
    .card:hover{
        box-shadow: 0px 1px 2px 0px #222;
    }
.card .cover{
    width:150px;
    height: 150px;
    border-radius: 50%;
}
.card h3{
    font:400 18px Ubuntu , Arial;
}
.card b{
   
    font:300 14px Ubuntu , Arial;
}
.card .email{
     text-decoration: none;
     color: #222222;
}
</style>
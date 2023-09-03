<script setup>

</script>

<template>
    <div class="nav">
        <h3><router-link :to="{ name: 'Home'}">Home</router-link></h3>
        <h3><router-link :to="{ name: 'Shop'}">Shop</router-link></h3>
        <router-link :to="{ name: 'Home'}" class="logo-link"><div class="logo"><img src="../assets/solixx_logo.png" /></div></router-link>
        <h3><router-link :to="{ name: 'AdminPanel'}">Admin Panel</router-link></h3>
        <h3><router-link :to="{ name: 'Commands'}">Commands</router-link></h3>
    </div>
</template>

<style scoped>
    .nav{
        z-index: 99;
        width: 100%;
        height: 75px;
        position: absolute;
        background-color: #111;
        color: whitesmoke;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    .nav a{
        color: whitesmoke;
        text-decoration: none;
    }

    .nav .logo-link{
        display: none;
    }

    .nav h3{
        width: 30%;
        font-size: 0.7rem;
    }

    @media only screen and (min-width: 600px) {

        .nav h3{
            width: 20%;
            font-size: 1.25rem;
        }

        .nav .logo-link{
            display: block;
        }
        .nav .logo{
            width: 150px;
            height: 150px;
            background-color: #111;
            border-radius: 50%;
            display: flex;
            justify-content: center;
        }

        .nav img{
            position: absolute;
            top: 0;
            width: 100px;
            height: 100px;
        }
    }

    @media only screen and (min-width: 1024px){
        .nav h3{
            font-size: 1.5rem;
        }
    }
</style>
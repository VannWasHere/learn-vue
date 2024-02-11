<template>
    <nav class="navigation">
        <section class="left-navbar">
            <div id="image-container">
                <img src="../assets/logo.png" id="nav-image" alt="Vue Logo">
            </div>
            <div class="nav-list">
                <ul>
                    <router-link to="/" class="vue-link">Home</router-link>
                    <router-link to="/about" class="vue-link">About</router-link>
                    <router-link to="/products" class="vue-link">Products</router-link>
                    <router-link to="/contact" class="vue-link">Contact</router-link>
                </ul>
            </div>
        </section>
        <section class="right-navbar">
            <div class="profile-section">
                <h2><a href="">{{ name }}</a></h2>
            </div>
            <button id="sign-out-button">Sign Out</button>
        </section>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar',
    props: {
        name: String
    }
}
</script>

<style scoped>
    .navigation {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        background-color: transparent;
        backdrop-filter: blur(10px);
        position: fixed;
        width: 100%;
        top: 0;
    }
    .left-navbar {
        display: flex;
        width: 100%;
        align-items: center;
    }
    #image-container {
        width: 50px;
        height: 50px;
    }
    #nav-image {
        width: 100%
    }
    .nav-list {
        padding-left: 1rem;
        padding-right: 1rem;
        margin: 10px;
        width: 20%;
        font-size: 17px;
        margin-left: 30px;
    }
    .nav-list ul {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
    .right-navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: fit-content;
        text-align: right;
        gap: 12px;
    }
    h2 {
        font-size: 18px;
    }
    .profile-section h2 a{
        text-decoration: none;
        color: #1B1A17;
    }
    #sign-out-button {
        cursor: pointer;
        width: 80px;
        padding: 8px;
        border-radius: 8px;
        background-color: red;
        border:none;
        color: #d9d9d9;
        font-weight: bold;
    }
    .vue-link {
        color: #1B1A17;
        font-weight: bold;
    }
</style>
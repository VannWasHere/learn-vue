<template>
    <nav class="navigation">
        <section class="left-navbar">
            <div id="image-container">
                <img src="../assets/logo.png" id="nav-image" alt="Vue Logo">
            </div>
            <div class="nav-list">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </section>
        <section class="right-navbar">
            <div class="profile-section">
                <h2><a href="">Justine Donovan</a></h2>
            </div>
            <button id="sign-out-button">Sign Out</button>
        </section>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar'
}
</script>

<style scoped>
    .navigation {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        background-color: rgb(17, 15, 15);
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
    }
    .nav-list ul>li{
        list-style: none;
    }
    .nav-list ul>li a {
        text-decoration: none;
        color: #d9d9d9;
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
        color: #d9d9d9;
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
</style>
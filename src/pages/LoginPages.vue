<template>
    <div class="form">
        <form class="form-container">
            <div class="form-input">
                <label for="username">Username</label> <br>
                <input type="text" placeholder="Ex: Justine Donovan">
            </div>
            <div class="form-input">
                <label for="password">Password</label> <br>
                <input type="password" placeholder="Input Password">
            </div>
            <button type="submit">Submit Form</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "LoginPages"
}
</script>

<style scoped>
    .form {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
</style>
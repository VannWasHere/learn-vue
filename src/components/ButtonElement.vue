<template>
    <button :class="buttonClass + ' rounded'">{{ message }}</button>
</template>

<script>
export default {
    name: 'ButtonElement',
    props: {
        buttonClass: {
            type: String,
            default: "primary"
        },
        message: {
            type: String,
            default: "Click Me"
        },
        isFull: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.primary {
    background-color: #2A7886;
    padding: 5px;
    border: none;
    color: #F1F3F4;
    cursor: pointer;
    border-radius: 8px;
    width: 100%;
}
.not-full {
    width: 120px;
}
</style>
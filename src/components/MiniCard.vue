<template>
    <div class="card-container">
        <div class="card-image">
            <img src="../assets/sample-images.png" alt="Product Names">
        </div>
        <div class="card-info">
            <p id="product-name">{{ ProductName }}</p>
            <div class="card-desc">
                <p id="product-price">Rp. {{ ProductPrice }}</p>
                <ButtonElement message="See Product"/>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonElement from './ButtonElement.vue';
export default {
    name: 'MiniCard',
    props: {
        ProductName: String,
        ProductPrice: String
    },
    components: {
    ButtonElement,
}
}
</script>

<style scoped>
.card-container {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    width: 130px;
    height: 240px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: #dde1e2;
}
.card-image {
    width: 100%;
    text-align: center;
    padding: 10px;
}
.card-image img {
    width: max-content;
    width: 120px;
    height: 120px;
}
.card-info {
    height: 100%;
    background-color: #ebebeb;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px;
}
.card-desc {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 80%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}
#product-name {
    font-weight: bold;
}
#product-price {
    margin-bottom: 10px;
    font-weight: 600;
    color: rgb(5, 84, 5);
    padding: 1px 2px;
}
</style>
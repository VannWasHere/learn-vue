<template>
    <div class="card-container">
        <div class="card-image">
            <img src="../assets/sample-images.png" alt="Product Names">
        </div>
        <div class="card-info">
            <div class="card-desc">
                <p id="product-name">{{ ProductName }}</p>
                <p id="product-price">Rp. {{ ProductPrice }}</p>
            </div>
            <button id="see-details">See Details</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiniCard',
    props: {
        ProductName: String,
        ProductPrice: String
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
}
.card-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    padding: 5px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}
#product-name {
    font-weight: bold;
}
</style>
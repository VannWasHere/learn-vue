<template>
    <section class="home-main">
        <div class="home-header">
            <section class="home-desc">
                <p id="product-name">Iphone 15 Pro</p>
                <p id="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae labore aliquam odio, enim maiores ducimus, quidem minima quae dolorum libero repellendus. Libero aspernatur, fugit illum iste itaque, magnam magni quasi totam voluptate nostrum dolorem? Sint deserunt quod ad veniam laboriosam sunt exercitationem dicta, corporis dignissimos ducimus aut. Beatae, magni.</p>
                <div class="home-product-checkout">
                    <p id="product-price">Rp. 12.000.000</p>
                    <button id="main-product-checkout">See Details</button>
                </div>
            </section>
            <section class="home-product-pict">
                <img src="../assets/sample-images.png" alt="Product Name">
            </section>
            <section class="home-product-similiar">
                <h2>More Like This</h2>
                <div class="mini-card-container">
                    <MiniCard ProductName="Iphone 14" ProductPrice="9.399.000"/>
                    <MiniCard ProductName="Samsung Galaxy Note 15" ProductPrice="14.200.000"/>
                    <MiniCard ProductName="Iphone X" ProductPrice="4.000.000"/>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import MiniCard from '../components/MiniCard.vue';
export default {
    name: "HomePages",
    components: {
        MiniCard
    }
}
</script>

<style scoped>
.home-header {
    display: flex;
    gap: 20px;
    align-items: center;
}
.home-desc{
    display: flex;
    flex-direction: column;
    font-weight: 600;
    flex: 1;
}
#product-name {
    font-size: 45px;
}
.home-product-checkout {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}
#product-price {
    color: rgb(5, 84, 5);
    font-size: 25px;
    font-weight: 500;
}
#main-product-checkout {
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 10px;
    width: 90px;
}
.home-product-pict {
    flex: 1;
    width: max-content;
}
.home-product-pict img {
    width: 400px;
    height: 400px;
}
.home-product-similiar h2 {
    font-size: 18px;
}
.mini-card-container {
    margin-top: 12px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 12px;
}
</style>
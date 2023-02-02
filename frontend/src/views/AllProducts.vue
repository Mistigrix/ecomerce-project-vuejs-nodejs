<template>
    <div id="all-products">
        <h3 class="color-default title">All Our Products</h3>
        <ProductCard v-for="(product, i) in getAllProducts[0]" :key="i" :product="product" :other_class="{product:{img:'img-large', price:'lg'}}" />
    </div>
</template>

<script>
    import ProductCard from "@/components/ProductCard.vue";
import { ref } from "vue";
    export default {
    name: "AllProducts",
    computed: {
        getAllProducts: function () {
            //console.log(this.getProductsData)
            let products_list = ref([]);
            const XHRequest = new XMLHttpRequest();
            XHRequest.open("GET", "http://localhost:3000/api/products/");
            XHRequest.send();
            XHRequest.responseType = "json";
            XHRequest.onload = () => {
                if (XHRequest.readyState == 4 && XHRequest.status == 200) {
                    products_list.value.push((XHRequest.response));
                }
                else {
                    console.log(`Error: ${XHRequest.status}`);
                }
            };
            console.log(products_list.value);
            return products_list.value;
        }
    },
    components: { ProductCard }
}
</script>

<style lang="scss" scoped>

.title {
    font-weight: bold;
    color: #ff6a00;
    font-size: x-large;
}

</style>
<template>
    <div class="category-card">
        <router-link class="title">
            <img height="16" width="16" class="lazyload" src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" />
            <span>{{ category_name }}</span>
        </router-link>
        <div class="products-list">
            <ProductCard v-for="(product, i) in products_list" :key="i" :product_image="product.image" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue'
// import { beforeMount } from 'vue' 
    export default {
        name: 'CategoryCard',
        components: {
            ProductCard
        },
        props: {
            category_name: String,
        },
        data() {
            return {
                products_list: ref([])
            }
        },
        beforeMount() {
            
            const XHRequest = new XMLHttpRequest();
            XHRequest.open("GET", "http://localhost:3000/api/products/category/" + this.category_name);
            XHRequest.send();
            XHRequest.responseType = "json";
            XHRequest.onload = () => {
            if (XHRequest.readyState == 4 && XHRequest.status == 200) {
                this.products_list = XHRequest.response;
                console.log(this.products_list);
            } else {
                console.log(`Error: ${XHRequest.status}`);
            }
            };
        }
    }
</script>

<style lang="scss" scoped>
    .category-card {
        padding: 0.5em;
        margin-left: 20px;
        background-color: white;
        width: 30%;
        height: auto;
        border-radius: 5px;

        .title {
            span {
                margin-left: 5px;
            }
            display: flex;
            align-items: center;
            margin: 0.2em 1.5em;
            font-size: 1em;
            color: #3a3a3a;
            text-decoration: none;
            font-weight: bold;
        } 

        .products-list {
            display: flex;
            justify-content: space-around;
        }
}
</style>
<template>
    <div class="category-card">  
        <router-link class="title" to="/">
            <img height="16" width="16" class="lazyload" src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" />
            <span>{{ category_name }}</span>
        </router-link>
        <div class="products-list">
            <section v-for="(product, i) in products_data_list" :key="i">
                <ProductCard v-for="(p, j) in product" :key="j" ref="products_list" :product="p" />
            </section>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue'
//import { onMounted } from 'vue' 
    export default {
        name: 'CategoryCard',
        components: {
            ProductCard
        },
        props: {
            category_name: String,
        },
        computed: {
        },
        setup() {
            let products_list = ref([])
            const XHRequest = new XMLHttpRequest();
            XHRequest.open("GET", "http://localhost:3000/api/products/category/New arrivals");
            XHRequest.send();
            XHRequest.responseType = "json";
            XHRequest.onload = () => {
            if (XHRequest.readyState == 4 && XHRequest.status == 200) {
                products_list.value.push((XHRequest.response.product_response_list));
            } else {
                console.log(`Error: ${XHRequest.status}`);
            }
        }
        
        return {
            products_data_list: products_list.value
        }
        }
    }
</script>v 

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
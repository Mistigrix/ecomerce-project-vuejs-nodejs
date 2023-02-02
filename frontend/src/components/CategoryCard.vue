<template>
    <div class="category-card">  
        <router-link class="title" to="/">
            <img height="16" width="16" class="lazyload" :src="icon_url" />
            <span>{{ category_name }}</span>
        </router-link>
        <div v-if="getProductsData[0]" class="products-list">
                <ProductCard v-for="(product, j) in getProductsData[0]" :key="j" ref="products_list" :product="product" :is_product="false" />
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
            category_name: {
                type: String,
                required: true,
            },
            icon_url: String,
        },
        data() {
            return {
                category: this.category_name
            }
        },
        computed: {
            getProductsData: function () {
                //console.log(this.getProductsData)
                let products_list = ref([])
                const XHRequest = new XMLHttpRequest();
                XHRequest.open("GET", "http://localhost:3000/api/products/category/" + this.category);
                XHRequest.send();
                XHRequest.responseType = "json";
                XHRequest.onload = () => {
                if (XHRequest.readyState == 4 && XHRequest.status == 200) {
                    products_list.value.push((XHRequest.response));
                } else {
                    console.log(`Error: ${XHRequest.status}`);
                }
            }
            console.log(products_list.value)
            
            return products_list.value;
            },
        },
        setup() {
            console.log(this)
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
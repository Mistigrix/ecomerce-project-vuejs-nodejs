<template>
    <div>
        <h2>{{ $route.params.category }}</h2>
        <div>
            <ProductCard v-for="(product, i) in this.products" :key="i" :product="product" :other_class="{product:{img:'img-large', price:'lg'}}"/>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';
    export default {
    name: "CategoryProducts",
    data() {
        return {
            products: null
        };
    },
    beforeMount() {
        axios
            .get(`http://localhost:3000/api/products/category/${this.$route.params.category}`)
            .then((response) => {
            console.log(this.$route.params.category);
            this.products = response.data;
        });
    },
    watch: {
        "$route"(old_route) {
            axios
                .get(`http://localhost:3000/api/products/category/${old_route.params.category}`)
                .then((response) => {
                this.products = response.data;
            });
        }
    },
    components: { ProductCard }
}
</script>

<style lang="scss" scoped>

</style>
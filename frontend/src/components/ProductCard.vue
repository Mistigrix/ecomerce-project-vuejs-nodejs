<template>
    <div class="product-card">
        <div class="product-image">
            <img :src="product.image" />
        </div>
        <div class="product-info">
            <h4 class="price">${{ product.price }}</h4>
            <h4 class="other">Trending now</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        props: {
            product: Object,
        },
        setup() {
        },
    }
</script>

<style lang="scss" scoped>
    .product-card {
        display: inline-block;

        img {
            width: 100px;
            // border: solid black 1px;
            border-radius: 4px;
        }

        .product-info {
            text-align: center;
            font-size: 12px;

            h4 {
                margin: 0;
            }
            .other {
                color: #666666;
            }
        }
    }

</style>
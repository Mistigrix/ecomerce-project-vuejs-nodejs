<template>
    <router-link :to="{name: 'productDetail', params: {product_name: product.product_name}}">
        <div :class="'product-card'">
            <div class="product-image">
                <img :src="product.image_url" :class="other_class.product.img" />
            </div>
            <div class="product-info">
                <h4 class="price">${{ product.price }}</h4>
                <h4 class="other" v-if="!is_product">Trending now</h4>
                <h4 class="other product-name" v-else>{{ getShortName }}</h4>
            </div>
            <div v-if="is_product" style="margin-bottom: 20px"></div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'ProductCard',
        props: {
            product: Object,
            is_product: {
                type: Boolean,
                default: true,
            },
            other_class: {
                type: Object,
                default: Object
            }
        },
        computed: {
            getShortName: function() {
                let short_name = this.product.product_name;
                if (short_name.length > 20) {
                    short_name = short_name.slice(0, 17) + '...';
                }
                return short_name;
            }
        },
        setup() {
        },
    }
</script>

<style lang="scss" scoped>
    .product-card {
        display: inline-block;
        margin-right: 10px;
        margin-left: 10px;

        img {
            width: 100px;
            // border: solid black 1px;
            border-radius: 4px;
        }

        img.img-large {
                width: auto;
                height: 200px;

                &:before {
                    background-color: black;
                }
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
            .product-name {
                font-size: 17px;
                color:black
            }
            .price {
                color: #ff6a00
            }
            .lg {
                background-color: red;
            }
        }
    }

</style>
<template>
    <div id="product-detail">
        <div class="product-detail">
            <div class="top">
                <div class="product-img">
                    <img :src="product.value[0].image_url">
                </div>
                <div class="product-info">
                    <h3 class="title">{{ product.value[0].product_name }}</h3>
                    <div class="sc-hd-line" style="background: #E6E7EB;height: 1px;width: 100%;"></div>
                    <h4 class="price">{{ product.value[0].price }} Fr Cfa</h4>
                    <span class="available" v-if="product.value[0].isAvailable">Available</span>
                    <span class="available" v-else>Not Available</span>
                    <div class="quantity-box">
                        <label for="quantity" class="quantity-label">Quantité</label>
                        <input id="quantity" type="number" class="quantity" value="1">
                    </div>
                    <div class="btn-buy-box">
                        <button class="btn-buy"><router-link class="c-white text-decoration-none" :to="{ name: 'updateProduct', params: {product_name: product.value[0].product_name} }">Modifier le produit</router-link></button>
                    </div>
                </div> 
            </div>
            <div class="bottom">
                <h4>Description</h4>
                <div class="description">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, minus
                sapiente. Qui dolorem consectetur quod incidunt
                dignissimos animi inventore obcaecati fugit nulla
                sint. Ratione, quisquam enim sint culpa modi dolorem?
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        name: 'ProductDetail',
        computed: {
            product: function() {

                let product = ref();
                const XHRequest = new XMLHttpRequest();
                XHRequest.open("GET", `http://localhost:3000/api/products/${this.$route.params.product_name}`);
                XHRequest.send();
                XHRequest.responseType = "json";
                XHRequest.onload = () => {
                    if (XHRequest.readyState == 4 && XHRequest.status == 200) {
                        product.value = ((XHRequest.response));
                    }
                    else {
                        console.log(`Error: ${XHRequest.status}`);
                    }
                };
                console.log(product);
                return product;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .product-detail {
        margin-top: 20px;
        background-color: white;
        padding-left: 20px;

        .top {
            display: flex;    
            .product-img {
                width: 30%;
                img {
                    width: 100%;
                    height: auto;
                }
            }

            .product-info {
                margin-left: 30px;

                .title {
                    font-size: x-large;
                    font-weight: none;
                    
                }
                .price {
                    color: #ff6a00;
                    font-size: large;
                    margin-bottom: 5px;
                }
               .available {
                font-size: small;
               }

               .quantity-box{
                margin-top: 10px;
                
                .quantity-label{
                    margin-right: 10px;
                    font-weight: italic;
                }
                .quantity {
                    border: solid 0.2px #ff6a00;
                    
                }

               }
                .btn-buy-box {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    height: 20%;
                    align-items: center;

                    .btn-buy {
                    border: solid 0.5px #FF6A00;
                    height: 50%;
                    width: 70%;
                    background-color: #FF6A00;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;

                    &:hover {
                        background-color: #DF6106
                    }
                    &:active {
                        border: solid 2px black;
                    }

                    .c-white {
                        color: white;
                    }
                    .text-decoration-none {
                        text-decoration: none;
                    }
                }

                }

                
            }
        }

        .bottom {
            margin-left: 50px;
            padding-left: 50px;

            h4 {
                font-size: large;
            } 
            .description {
                width: 75%;
            }
        }
        
    }
</style>
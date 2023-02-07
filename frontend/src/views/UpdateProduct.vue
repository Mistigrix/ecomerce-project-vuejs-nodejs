<template>
    <div class="padding-left-xlarge padding-right-xlarge">
        <div class="add-product-box">
            <div>
                <label for="product-name">Product Name</label>
                <input v-model="new_product_name" type="text" class="input-nam" placeholder="Enter product name" required>
            </div>
            <div class="selected-categories">
                <label class="label-categories">Selection a category of your product</label>
                <select v-model="category" class="categories-list input" name="categories_list" id="categories_list" required>
                    <option v-for="(category, i) in categories" :key="i" class="category">{{ category }}</option>
                </select>
            </div>
            <div class="price-box">
                <label for="price">Price (Franc Cfa)</label>
                <input v-model="price" type="number" name="price" id="price" required>
            </div>
            <div>
                <label for="image">URL de l'image</label>
                <input v-model="image_url" type="text" name="image" id="image" placeholder="Veillez coller le lien vers l'image" required>
            </div>
            <div class="btn-add-box">
                <router-link :to="{name: 'home'}" type="button" class="btn-add" >Ajouter le nouveau produit</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'AddProduct',
        data() {
            return {
                new_product_name: "",
                category: "",
                price: 1000,
                image_url: ""
            }
        },
        props: {
            categories: Object,
            product_name: String,
        },
        computed: {
            addProduct: function() {
                axios({
                    method: "POST",
                    url:"http://localhost:3000/api/products/",
                    data: {
                        product_name: this.product_name,
                        price: this.price,
                        category: this.category,
                        image_url: this.image_url,
                    }
                })
                return ''
            }
        },

        mounted() {
            axios.get(`http://localhost:3000/api/products/${this.product_name}`)
            .then(response => {
                this.new_product_name = response.data.product_name;
                this.price = response.data.price;
                this.category = response.data.category;
                this.image_url = response.data.image_url;
                console.log(this.price)
            })
        }
    }
</script>

<style lang="scss" scoped>
    .add-product-box {
        padding-top: 20px;
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            label {
                white-space: nowrap;
            }
        }
        input, .input {
            width: 50%;
            height: 30px;
            margin: 5px 2px;
            border: solid 0.2px black ;

            &:active {
                
            }
        }

       .btn-add-box {
            justify-content: center;
            margin-top: 5%;

            .btn-add {
                display: flex;
                justify-content: center;
                align-items: center;
                border: solid 0.5px #FF6A00;
                height: 40px;
                width: 50%;
                background-color: #FF6A00;
                color: white;
                border-radius: 5px;
                cursor: pointer;
                text-decoration: none;

                &:hover {
                    background-color: #DF6106
                }
                &:active {
                    border: solid 2px black;
                }
            }
        }
    }
</style>

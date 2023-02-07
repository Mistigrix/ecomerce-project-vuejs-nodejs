<template>
    <div id="navbar">
        <nav class="navbar">
            <ul class="principal-nav">
                <li v-for="(category, i) in minimum_categories" :key="i"><router-link class="nav-item" :to="{name: 'categoryProducts', params: {category: category}}">{{ category }}</router-link></li>
                <li><router-link class="nav-item" :to="{name:'allProducts'}">All Products</router-link></li>
                <li><router-link class="nav-item" to="#">Help</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            minimum_categories: Array,
            product_name: Object
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 2%;
        .principal-nav {
            list-style: none;
            display: flex;
            margin: 0;

            .nav-item {
                margin: 2px 10px;
                color: #333;
                text-decoration: none;

                &:hover {
                    color: #ff6a00;
                }
            }
        }

        .account {
            display: grid;
            
            .account-link {
                color: black;
                text-decoration: none;

                &:hover {
                    color: #ff6a00;
                }
            }
        }
    }
</style>
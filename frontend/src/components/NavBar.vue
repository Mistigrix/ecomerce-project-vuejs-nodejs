<template>
    <div id="navbar">
        <nav class="navbar">
            <ul class="principal-nav">
                <li><router-link class="nav-item" to="#">Ready to Ship</router-link></li>
                <li><router-link class="nav-item" to="#">PersonalProtective</router-link></li>
                <li><router-link class="nav-item" to="#">Trade Shows</router-link></li>
                <li><router-link class="nav-item" to="#">Buyer Central</router-link></li>
                <li><router-link class="nav-item" :to="{name:'allProducts'}">All Products</router-link></li>
                <li><router-link class="nav-item" to="#">Help</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style lang="scss" scoped>
    .navbar {

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
    }
</style>
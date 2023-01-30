<template>
    <div class="header">
        <router-link class="logo" to="/"></router-link>
        <div class="search-box">
            <input id="search-bar" type="text" class="search-bar" />
            <input type="submit" class="search-submit" value="Search">
        </div>
        <div class="account">
            <div class="account-icon"></div>
            <router-link to="#" class="signin">Sing in</router-link>
            <router-link to="#" class="join-for-free">Join for free</router-link>
        </div>
    </div>
    <div id="home">
        <h2>Bienvenue sur <strong>E-CommerceSite</strong></h2>
        <div class="categories-list">
            <CategoryCard v-for="(category_name, i) in category_name" :key="i"
            :category_name="category_name" />
        </div>
    </div>
</template>

<script>
    import CategoryCard from '@/components/CategoryCard.vue';
    export default {
        name: 'HomePage',
        components: {
            CategoryCard
        },
        setup() {
            const category_name = [
                "New arrivals",
                "Top-Ranking",
                "Personal Protective Equipment"
            ]

            return {
                category_name
            }
        }
    }
</script>

<style lang="scss">
    .categories-list {
        display: flex
    }
    .header {
        display: flex;
        width: 100%;
        min-width: 720px;
        vertical-align: bottom;
        .logo {
            width: 180px;
            height: auto;
            background-image: url("https://s.alicdn.com/@img/tfs/TB1hVGkvVP7gK0jSZFjXXc5aXXa-365-49.svg");
            margin-right: 50px;
            background-repeat: no-repeat
        }
        .search-box {
            display: flex;
            align-items: end;

            .search-bar {
                height: 40px;
                width: 500px;
                border-right: none;
                border: solid 0.5px #b3b3b3;

                &:focus {
                    border-color: white !important;
                }
                
            }
            .search-submit {
                background-color: #ff6a00;
                color: #fff;
                font-size: 16px;
                font-family: inherit;
                height: 43px;
                width: 120px;
                border-left: none;
                border-color: transparent;
                cursor: pointer;
                text-align: right;
                padding-right: 20px;
            }
        }
        
        .account {
            .account-icon {
                background-image: url("https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png")
            }
            .signin {

            }
        }
    }
</style>
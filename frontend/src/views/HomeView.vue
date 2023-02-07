<template>
    <div id="home">
        <h2>Welcome to <strong>{{ app_name }}</strong></h2>
        <div class="categories-list">
            <CategoryCard v-for="(category, i) in getAllCategories[0]" :key="i"
            :category_name="category.category_name" :icon_url="category.icon_url" />
        </div>
    </div>
</template>

<script>
    import CategoryCard from '@/components/CategoryCard.vue';
    import { ref } from 'vue';

    export default {
        name: 'HomePage',
        components: {
            CategoryCard,
        },
        props: {
            app_name: String,
        },
        computed: {
            getAllCategories: function() {
                let categories_list = ref([]);
                const XHRequest = new XMLHttpRequest();
                XHRequest.open("GET", "http://localhost:3000/api/products/categories/getAll");
                XHRequest.send();
                XHRequest.responseType = "json";
                XHRequest.onload = () => {
                if (XHRequest.readyState == 4 && XHRequest.status == 200) {
                    categories_list.value.push((XHRequest.response));
                } else {
                    console.log(`Error: ${XHRequest.status}`);
                }
            }
            console.log(categories_list.value)
            return categories_list.value;
            }
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
    .header-middle {
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
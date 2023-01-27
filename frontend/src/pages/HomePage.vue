<template>
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

<style lang="scss" scoped>
    .categories-list {
        display: flex
    }
</style>
<template>
    <div class="menu-items" @click="isOpen = !isOpen">
        <div class="dropdown-bar">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <div class="sub-menu" v-if="isOpen">
            <div class="menu-item" v-for="(item, i) in items" :key="i">
                <router-link class="item" :to="item.link">{{ item.title }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DropdownMenu",
        props: {
            items: Array
        },
        data() {
            return {
                isOpen: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dropdown-bar {
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;

    .bar {
      height: 2px;
      width: 20px;
      background-color: black;
      margin-bottom: 3px;
    }
  }
  
  .menu-items {
    .sub-menu {
        position: absolute;
        background-color: white;
        top: calc(20% + 5px);
        left: 6%;
        transform: translateX(-50%);
        width: 10%;
        border-radius: 16px 16px 16px 16px;
        box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.5);
        text-align: center;

        .item {
            color: black;
            text-decoration: none;
            font-size: large;
        }
    }
}
</style>
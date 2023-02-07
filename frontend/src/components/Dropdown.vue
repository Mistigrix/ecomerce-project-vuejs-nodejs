<template>
    <div class="menu-items">
        <div class="dropdown-bar"  @click="isOpen = !isOpen" @blur="isOpen = false" >
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <div class="sub-menu" v-if="isOpen">
            <div class="menu-item" v-for="(item, i) in items" :key="i">
                <router-link class="item" :to="{name:'categoryProducts', params:{category:item}}">{{ item }}</router-link>
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
        },
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
    display: block;
    justify-content: center;

    .sub-menu {
        position: absolute;
        background-color: white;
        transform: translateX(-50%);
        //width: 20%;
        border-radius: 16px 16px 16px 16px;
        box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.5);
        left: 7%;

        .menu-item {
                                                                                                                               
        }
        .item {
            color: black;
            text-decoration: none;
            font-size: large;
            white-space: nowrap;
            //margin: 10px 2%;
            &:hover {
                background-color: rgb(222, 217, 217)
            }
        }
    }
}
</style>
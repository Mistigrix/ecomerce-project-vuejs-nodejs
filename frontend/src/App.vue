<template>
  <div class="header">
        <div class="header-middle">
          <div class="dropdown-and-app-name">
            <Dropdown :items="categories_list" />
            <h2><router-link class="app-name fl" to="/">{{ app_name }}</router-link></h2>
          </div>
          <div class="search-box">
              <input id="search-bar" type="text" class="search-bar" />
              <input type="submit" class="search-submit" value="Search">
          </div>
            <!-- <div class="right-content">
              <div>
                <router-link to="#" class="ms-login">Sing in</router-link>
                <router-link to="#" class="ms-login">Join for free</router-link>
              </div>
              <div>
                <h6>Messages</h6>
              </div>     
            </div> -->
        </div>
        <div class="sc-hd-line" style="background: #E6E7EB;height: 1px;width: 100%;"></div>
        <div class="header-bottom">
            <NavBar :minimum_categories="getMinimumCategories" />
        </div>
    </div>
  <div id="app">
    <RouterView :app_name="app_name" :categories="categories_list"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from "vue-router";
// import { ref } from 'vue';
import Dropdown from './components/Dropdown.vue';
import axios from 'axios';

  // import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

  export default {
    name: 'App',
    components: {
    NavBar,
    RouterView,
    Dropdown
},
mounted () {
    axios
      .get('http://localhost:3000/api/products/categories/getAllName')
      .then((response) => {
        console.log(response.data)
        this.categories_list = response.data
      });

      // console.log(this.categories_list.value);

    // categories_list.forEach(category  => {
    //   // console.log(category);
    //   this.categories_list.push(
    //     {
    //       title: category,
    //       link: '#'
    //     }
    //   )
    // });
    // console.log(this.categories_list)
  },
data() {
  return {
    app_name: 'DigitalDrom',
    categories_list: null
  }
}
  }
</script>

<style lang="scss">
  .box-center {
    display: flex;
    justify-content: center;
  }

  .padding-left-large {
    padding-left: 100px;
  }
  .padding-right-large {
    padding-right: 100px;
  }
  .padding-left-xlarge {
    padding-left: 150px;
  }
  .padding-right-xlarge {
    padding-right: 150px;
  }
.header {
  .dropdown-and-app-name {
    display: flex;
    align-items: center;
  }
    width: 100%;
    // background-color: white;
    display: column;
    align-items: bottom;

    .header-top {
      background-color: blue;
    }
    .header-middle {
      background: white;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;

      .app-name {
        text-decoration: none;
        color: #ff6a00;
        font-size: xx-large;
      }

      .right-content {
        display: flex;
        justify-content: space-between;

        div {
          display: grid;

          .ms-login {
          color: #333;
          text-decoration: none;
          font-size: small;
      }
        }     
    }

    }
    .header-bottom {
      //border-top: solid 0.5px rgb(129, 125, 125);
      background: white;
      padding-top: 10px;
      padding-bottom: 10px;
    }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-left: 2%;
  margin-right: 2%;

  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

</style>

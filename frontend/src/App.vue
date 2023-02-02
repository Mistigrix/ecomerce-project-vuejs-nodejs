<template>
  <div class="header">
        <div class="header-middle">
          <div class="dropdown-and-app-name">
            <Dropdown :items="getAllCategories" />
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
            <NavBar />
        </div>
    </div>
  <div id="app">
    <RouterView :app_name="app_name"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from "vue-router";
import { ref } from 'vue';
import Dropdown from './components/Dropdown.vue';

  // import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

  export default {
    name: 'App',
    components: {
    NavBar,
    RouterView,
    Dropdown
},
computed: {
  getAllCategories: function () {

    let products_list = ref([])
    const XHRequest = new XMLHttpRequest();
    XHRequest.open("GET", "http://localhost:3000/api/products/categories/getAllName");
    XHRequest.send();
    XHRequest.responseType = "json";
    XHRequest.onreadystatechange = () => {
    if (XHRequest.readyState == 4 && XHRequest.status == 200) {
        products_list.value = XHRequest.responseText;
    } else {
        console.log(`ErrorCode: ${XHRequest.status}`);
    }
    }
    console.log(products_list);
            
    return [{title: 'item 1', link: '#'}, {title: 'item 2', link: '#'},{title: 'item 3', link: '#'}];
  }
},
data() {
  return {
    app_name: 'DigitalDrom',
  }
}
  }
</script>

<style lang="scss">
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

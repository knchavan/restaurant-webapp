<template>
    <div class="nav">
        <router-link class="router-link" to="/">Home</router-link>
        <router-link class="router-link" to="/restaurants">Restaurants</router-link>
        <div class="user">
            <span class="user-name">Hello {{ name }}!</span>
            <span href="" @click="Logout">Logout</span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
      return {
          name: '',
      }
  },
  methods: {
      Logout() {
        localStorage.removeItem('restaurantUser');
        localStorage.clear();
        this.$router.push({name: 'login'});
      }
  },
  mounted() {
      let user = localStorage.getItem('restaurantUser');
      this.name = JSON.parse(user).name;
      console.log(user);
      console.log(this.name)
  }
}
</script>

<style scoped>
.nav {
    background: #333;
    overflow: hidden;
}
.nav a {
    float: left;
    color: #fff;
    padding: 15px;
}
.nav a:hover {
    background: #fff;
    color: #333;
}
.user {
    float: right;
    color: white;
    margin: auto 5px;
    justify-content: center;
    padding: 15px;
}
.user-name {
    border: 1px solid;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
}
.user-name:hover {
    background: #fff;
    color: #333;
}
span {
    cursor: pointer;
}
.router-link {
    text-decoration: none;
}
</style>

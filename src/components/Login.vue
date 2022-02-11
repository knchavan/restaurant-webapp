<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="login">
      <div>
        <label for="name">Email: </label>
        <input type="email" v-model="user.email">
      </div>
      <div>
        <label for="name">Password: </label>
        <input type="password" v-model="user.password">
      </div>
      <div>
        <button v-on:click="Login">Login</button>
      </div>
      <div class="signup-link">
        <router-link to="/signup">Don't have account? SignUp Here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Login',

  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      msg: 'Login here'
    }
  },
  
  methods: {
    async Login() {
      await axios.get(`http://localhost:3000/users?email=${this.user.email}&password=${this.user.password}`)
        .then(response => {
            localStorage.setItem('restaurantUser', JSON.stringify(response.data[0]));
            this.$router.push({name: 'home'});
        }).catch(error => {
          console.log(error);
          alert("Login Failed");
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
.login {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login input {
  display: block;
  width: 300px;
  height: 40px;
  margin: 10px auto;
  border: 1px solid #ccc;
}

.login button {
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  background: #2c3e50;
  color: #fff;
}
.signup-link {
  margin-top: 20px;
}
</style>

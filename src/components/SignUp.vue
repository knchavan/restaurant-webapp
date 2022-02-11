<template>
  <div  class="signup">
    <h1>{{ msg }}</h1>
    <div class="input-controls">
      <div>
        <label for="name">Name: </label>
        <input type="text" v-model="user.name">
      </div>
      <div>
        <label for="name">Email: </label>
        <input type="email" v-model="user.email">
      </div>
      <div>
        <label for="name">Password: </label>
        <input type="password" v-model="user.password">
      </div>
      <div>
        <label for="name">Confirm Passowrd: </label>
        <input type="password" v-model="password">
      </div>
      <div>
        <button v-on:click="SignUp">SignUp</button>
      </div>
      <div class="login-link">
        <router-link to="/login">Already have a account? Login Here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'SignUp',

  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
      password: '',
      msg: 'SignUp'
    }
  },
  
  methods: {
    async SignUp() {
      if (this.password !== this.user.password || this.user.password === '') {
        alert("Passwords do not match");
        return;
      }
      await axios.post('http://localhost:3000/users', this.user)
        .then(response => {
          console.log(response);
          localStorage.setItem('restaurantUser', JSON.stringify(response.data));
          this.$router.push({name: 'home'});
        }).catch(error => {
          console.log(error);
          alert("SignUp Failed");
        });
    }
  },
  mounted() {
    const user = localStorage.getItem('restaurantUser');
    if (user) {
      this.$router.push({name: 'home'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
.signup {
  margin: 0 auto;
  width: 300px;
}
.signup input {
  display: block;
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 10px auto;
}

.signup button {
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  background: #2c3e50;
  color: #fff;
}
.input-controls {
  margin: 0 auto;
}
.login-link {
  margin-top: 20px;
}
</style>

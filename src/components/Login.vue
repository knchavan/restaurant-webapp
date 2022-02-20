<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="login">
      <div class="error-span">
        <ul v-for="error in errors" :key="error">
          <li> {{ error }} </li>
        </ul>
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
      msg: 'Login here',
      errors: [],
    }
  },
  
  methods: {
    async Login() {
      this.errors = []
      let flag = false;
      if (this.user.email == '') {
        let msg = "Email field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      else if (!this.emailValidate()) {
        let msg = "Email Id is Invalid!";
        this.errors.push(msg);
        flag = true
      }
      if (this.user.password == '') {
        let msg = "Password field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      if (flag) return;

      await axios.post(`https://localhost:5001/api/user/login`, {
        email: this.user.email,
        password: this.user.password
      })
        .then(response => {
            console.log(JSON.stringify(response.data));
            localStorage.setItem('restaurantUser', JSON.stringify(response.data));
            this.$router.push({name: 'home'});
        }).catch(error => {
          let msg = "Email or Password is Invalid!";
          this.errors.push(msg);
          console.log(error);
          // console.log(error.response.status)
          // alert("Login Failed");
        });
    },
    emailValidate() {
      let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(this.user.email);
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

.error-span {
  color: red;
  float: left;
}
</style>

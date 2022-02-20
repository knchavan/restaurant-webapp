<template>
  <div  class="signup">
    <h1>{{ msg }}</h1>
    <div class="input-controls">
      <div class="error-span">
        <ul v-for="error in errors" :key="error">
          <li> {{ error }} </li>
        </ul>
      </div>
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
        <input type="password" v-model="passwordConfirm">
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
      passwordConfirm: '',
      msg: 'SignUp',
      errors: [],
    }
  },
  
  methods: {
    async SignUp() {
      // ================ Client Side Validations ===============
      this.errors = []
      let flag = false;
      if (this.user.name == '') {
        let msg = "Name field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
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
      if (this.password !== this.user.password || this.user.password === '') {
        let msg = "Password and Confirm Password did not match!";
        this.errors.push(msg);
        flag = true
      }
      if (flag) return;
      // ================ Client Side Validations ===============

      await axios.post('https://localhost:5001/api/user/signup', this.user)
        .then(response => {
          console.log(response);
          localStorage.setItem('restaurantUser', JSON.stringify(response.data));
          this.$router.push({name: 'home'});
        }).catch(error => {
          console.log(error);
          let msg = "Something gone wrong!";
          this.errors.push(msg);
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
.signup {
  margin: 0 auto;
  width: 300px;
}
.signup input {
  display: block;
  width: 300px;
  height: 40px;
  /* border: 1px solid #ccc; */
  margin: 10px auto;
}

.signup button {
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  background: #2c3e50;
  color: #fff;
  cursor: pointer;
}
.input-controls {
  margin: 0 auto;
}
.login-link {
  margin-top: 20px;
}
.error-span {
  color: red;
  float: left;
}

</style>

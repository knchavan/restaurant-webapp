<template>
      <div>
            <Header />
            <div class="add">
              <h1>Add New Restaurant</h1>
              <div class="error-box">
                <div class="error-span">
                <ul v-for="error in errors" :key="error">
                  <li> {{ error }} </li>
                </ul>
                </div>
              </div>
              <div class="add-controls">
                <input type="text" v-model="rest.name" placeholder="Enter Name" />
                <input type="text" v-model="rest.location" placeholder="Enter Location" />
                <input type="text" v-model="rest.image" placeholder="Enter Image" />
                <input type="text" v-model="rest.timings" placeholder="Enter Timings" />
                <input type="text" v-model="rest.rating" placeholder="Enter Rating" />
                <button @click="addRestaurant">Add Restaurant</button>
              </div>
            </div>
      </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'Add',
  data() {
    return {
      rest: {
        name: '',
        location: '',
        image: '',
        timings: '',
        rating: '',
      },
      errors: [],
    }
  },
  components: {
    Header
  },
  mounted() {

  },
  methods: {
    addRestaurant() {
      
      this.errors = []
      let flag = false;
      if (this.rest.name == '') {
        let msg = "Name field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      if (this.rest.location == '') {
        let msg = "Location field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      if (this.rest.image == '') {
        let msg = "Image field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      if (this.rest.timings == '') {
        let msg = "Timings field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      if (this.rest.rating == '') {
        let msg = "Rating field should not be empty!";
        this.errors.push(msg);
        flag = true
      }

      if (flag) return;
      this.rest.rating = parseFloat(this.rest.rating);

        this.$http.post('https://localhost:5001/api/restaurant', this.rest)
            .then((response) => {
                console.log(response.data);
                this.$router.push({name: 'home'});
            }).catch((error) => {
                console.log(error);
            })
    }
  }
}
</script>

<style scoped>
.add {
  width: 500px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px -2px;
}
h1 {
  text-align: center;
}
.add-controls {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  width: 70%;
  height: 30px;
  margin: 10px auto;
  border-radius: 3px;
  padding: 5px;
  border: 1px solid #333;
}
button {
  width: 200px;
  height:40px;
  margin: 20px auto;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  background: #333;
  color: #fff;
  cursor: pointer;
}



.error-span {
  text-align: center;
  color: red;
  float: left;
  margin-left: 20%;
}
</style>

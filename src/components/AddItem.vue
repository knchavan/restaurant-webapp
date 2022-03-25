<template>
      <div>
            <Header />
            <div class="add">
              <h1>Add New Item</h1>
              <div class="error-box">
                <div class="error-span">
                <ul v-for="error in errors" :key="error">
                  <li> {{ error }} </li>
                </ul>
                </div>
              </div>
              <div class="add-controls">
                <input type="text" v-model="item.name" placeholder="Enter Item Name" />
                <input type="text" v-model="item.price" placeholder="Enter Item Price" />
                <input type="text" v-model="item.image" placeholder="Enter Item Image" />
                <input type="text" v-model="item.description" placeholder="Enter Item Description" />
                <select name="" id="" v-model="item.restaurantId">
                    <option value="" selected>-- Choose Restaurant --</option>
                    <option v-for="(rest,key) in restaurants" :key="key" :value="rest.id"> {{ rest.name }} </option>
                </select>
                <button @click="addRestaurant">Create Item</button>
              </div>
            </div>
      </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

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
      restaurants: [],
      item: {
          name: '',
          price: '',
          image: '',
          description: '',
          restaurantId: '',
      }
    }
  },
  components: {
    Header
  },
  mounted() {
      // Get list of all Restaurants
    axios.get('https://localhost:5001/api/restaurant')
        .then((response) => {
            console.log(response.data);
            this.restaurants = response.data;
        })
        console.log( "This is rest" + this.restaurants);
  },
  methods: {
    addRestaurant() {

      this.errors = []
      let flag = false;
      if (this.item.name == '') {
        let msg = "Name field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      if (this.item.price == '') {
        let msg = "Price field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      if (this.item.image == '') {
        let msg = "Image field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      if (this.item.description == '') {
        let msg = "Description field should not be empty!";
        this.errors.push(msg);
        flag = true
      }
      if (this.item.restaurantId == '') {
        let msg = "Please, Choose the restaurant Id!";
        this.errors.push(msg);
        flag = true
      }

      if (flag) return;
      this.item.price = parseFloat(this.item.price);

        this.$http.post('https://localhost:5001/api/item', this.item)
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
input, select {
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

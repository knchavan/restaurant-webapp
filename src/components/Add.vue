<template>
      <div>
            <Header />
            <div class="add">
              <h1>Add New Restaurant</h1>
              <div class="add-controls">
                <input type="text" v-model="rest.name" placeholder="Enter Name" />
                <input type="text" v-model="rest.location" placeholder="Enter Location" />
                <input type="text" v-model="rest.image" placeholder="Enter Image" />
                <input type="text" v-model="rest.timings" placeholder="Enter Timings" />
                <input type="number" v-model="rest.rating" placeholder="Enter Rating" />
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
        rating: 0,
      },
    }
  },
  components: {
    Header
  },
  mounted() {

  },
  methods: {
    addRestaurant() {
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
  background: #f0f0f0;
  box-shadow: 2px 2px 5px 0px #000;
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
}
</style>

<template>
      <div>
            <Header />
            <div class="add">
              <h1>Update Restaurant</h1>
              <div class="add-controls">
                <input type="text" v-model="rest.name" placeholder="Enter Name" />
                <input type="text" v-model="rest.location" placeholder="Enter Location" />
                <input type="text" v-model="rest.image" placeholder="Enter Image" />
                <input type="text" v-model="rest.timings" placeholder="Enter Timings" />
                <input type="text" v-model="rest.rating" placeholder="Enter Rating" />
                <button @click="updateRestaurant">Update Restaurant</button>
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
      }
    }
  },
  components: {
    Header
  },
  methods: {
    updateRestaurant() {
        const restId = this.$route.params.id;
        this.$http.put(`http://localhost:3000/restaurants/${restId}`, this.rest)
            .then((response) => {
                console.log(response.data);
                this.$router.push({name: 'edit'});
            }).catch((error) => {
                console.log(error);
            })
        console.log(this.rest);
        console.log("done");
    }
  },
  async mounted() {
    const restId = this.$route.params.id;
    await this.$http.get(`http://localhost:3000/restaurants/${restId}`)
      .then(response => {
        console.log("This is result "+response.data);
        this.rest = response.data;
      })
      .catch(error => {
        console.log(error)
      })
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

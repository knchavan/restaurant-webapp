<template>
  <div>
      <Header />
      <div class="restaurant__header">
          <h1>List of Restaurants</h1>
          <router-link class="router-link" to="/add">
              <button>Add New Restaurant</button>
          </router-link>
      </div>
      <div class="restaurants">
          <div class="card-div" v-for="rest in restaurants" :key="rest.id">
                <Card 
                    :rest="rest"
                    :edit=true
                    ></Card>
            </div>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Card from './Card.vue'
import axios from 'axios';
export default {
  name: 'Restaurants',
  data() {
      return {
          restaurants: [],
      }
  },
  components: {
    Header, Card
  },
  mounted() {

    // Get list of all Restaurants
    axios.get('https://localhost:5001/api/restaurant')
        .then((response) => {
            console.log(response.data);
            this.restaurants = response.data;
        })
  },

}
</script>

<style scoped>
.restaurants {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.card-div {
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr; */
}
h1 {
    padding-left: 20px;
}

.restaurant__header {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin: 40px;
    box-shadow: 0px 0px 4px 0px;
    align-items: center;
}

.restaurant__header button {
    margin-right: 20px;
    width: 170px;
    height: 40px;
    background: transparent;
    border-radius: 20px;
    font-weight: bold;
    border: none;
    box-shadow: 1px 0px 3px;
    cursor: pointer;
}
</style>>
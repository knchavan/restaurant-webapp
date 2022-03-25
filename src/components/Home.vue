<template>
  <div>
      <Header />
      <div class="item__header">
          <h1>List of Items</h1>
          <router-link class="router-link" to="/add-item">
              <button>Add New Item</button>
          </router-link>
      </div>
      <div class="item__filter">
          <div class="item__filter__right">
              <p>Filter by Restaurant: </p>
              <select @change="filterItems" name="" id="" v-model="restaurantId">
                  <option value="" selected>All Restaurants</option>
                  <option v-for="rest in restaurants" :key="rest.id" :value="rest.id"> {{ rest.name }} </option>
              </select>
          </div>
      </div>
      <div class="home">
          <div class="card-div" v-for="item in items" :key="item.id">
                <item-card :item="item"></item-card>
            </div>
            <div class="empty-div">
                <p v-if="items.length == 0">No items found</p>
            </div>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue';
// import Card from './Card.vue'
import axios from 'axios';
import ItemCard from './Item-Card.vue';
export default {
  name: 'Home',
  data() {
      return {
          items: [],
          restaurants: [],
          restaurantId: '',
      }
  },
  components: {
    Header,
    "item-card": ItemCard
  },
  mounted() {

    // Get list of all items
    axios.get('https://localhost:5001/api/item')
        .then((response) => {
            console.log(response.data);
            this.items = response.data;
        })

    // Get list of all Restaurants
    axios.get('https://localhost:5001/api/restaurant')
        .then((response) => {
            console.log(response.data);
            this.restaurants = response.data;
        })

    
  },
  methods: {
      filterItems() {
          console.log(this.restaurantId);
          axios.get(`https://localhost:5001/api/item`)
          .then((response) => {
              console.log(response.data);
              let items = [];
              this.items = response.data.map(item => {
                  if (item.restaurantId == this.restaurantId) {
                      items.push(item);
                  }
              });
              this.items = items;
              if (this.restaurantId == "") {
                  this.items = response.data;
              }
          })
      }
  }
}
</script>

<style scoped>
.home {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
.card-div {
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr; */
}
h1 {
    text-align: center;
}

.item__header {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin: 40px;
    box-shadow: 0px 0px 4px 0px;
    align-items: center;
}

.item__header button {
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

.item__filter {
    display: flex;
    justify-content: flex-end;
}

.item__filter__right {
    display: flex;
    margin-right: 40px;
    align-items: center;
}

.item__filter__right > p {
    font-size: 17px;
    font-weight: 600;
}

.item__filter__right > select {
    height: 25px;
    margin-left: 20px;
}

.empty-div {
    align-items: center;
    justify-content: center;
    text-align: center;
}

.empty-div > p {
    font-size: 20px;
    font-weight: 600;
}
</style>>
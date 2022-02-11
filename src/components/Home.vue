<template>
  <div>
      <Header />
      <h1>List of Restaurants</h1>
      <div class="home">
          <div class="card-div" v-for="rest in restaurants" :key="rest.id">
                <Card 
                    :rest="rest"
                    ></Card>
            </div>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Card from './Card.vue'
export default {
  name: 'Home',
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
    this.$http.get('http://localhost:3000/restaurants')
        .then((response) => {
            console.log(response.data);
            this.restaurants = response.data;
        })
  },

}
</script>

<style scoped>
.home {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.card-div {
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr; */
}
h1 {
    text-align: center;
}
</style>>
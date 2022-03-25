<template>
  <div class="item__card">
      <div class="item__card__header">
          <p> {{ item.name }} </p>
          <!-- Veg Pizza -->
          <img :src="item.image" alt="">
      </div>
      <div class="item__card__info">
            <div class="item__card__info__image">
                <img class="rest__image" :src="rest.image" alt="">
                <div class="item__card__info__restaurant">
                    <p> {{ rest.name }} </p>
                    <p class="rating"> {{ rest.rating }}* </p>
                </div>
            </div>
            <div class="item__card__info__restaurant">
                <p class="address" :title="rest.location"> {{ restaurantLocation }} </p>
                <p> ₹{{ item.price }} </p>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            rest: {},
        }
    },
    async mounted() {
    const restId = this.item.restaurantId;
    console.log(restId);
    await this.$http.get(`https://localhost:5001/api/restaurant/${restId}`)
      .then(response => {
        console.log("This is result "+ JSON.stringify(response.data));
        this.rest = response.data;
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
      restaurantLocation() {
          return this.rest.location.substring(0, 20) + '...';
      }
  }
}
</script>

<style>
.item__card {
    width: 300px;
    background: #f0f0f0;
    box-shadow: 2px 2px 5px 0px #000;
    margin: 50px auto;
    /* padding: 20px; */
    border-radius: 1.5em;
}

.item__card:hover {
    transition: 0.3s ;
    transform: scale(1.01);
}

.item__card__header > p {
    text-align: center;
    font-weight: 800;
    font-size: 20px;
}

.item__card__header > img {
    width: 300px;
    height: 200px;
    border-top-left-radius: 1.5em;
    border-top-right-radius: 1.5em;
}

.item__card__header > img:hover {
    
}

.item__card__info {
    padding: 10px;
}

.item__card__info__restaurant {
    display : flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 5px;
}

.item__card__info__restaurant > p {
    font-weight: 700;
    font-size: 20px;
    margin: 0;
}

.rating {
    background-color: green;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
}

.address {
    font-size: 15px;
    font-weight: 200;
    color: gray;
}

.item__card__info__image {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
}

.rest__image {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
    align-items: center;
}

</style>
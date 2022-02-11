<template>
    <div class="card">
        <div class="card-header">
            <h1>{{ name }} {{ rest.name }} </h1>
        </div>
        <div class="card-image">
            <img :src="rest.image" />
        </div>
        <div class="card-body">
            <!-- <slot></slot> -->
            <p> 
                {{ rest.location }} 
                <span>
                    {{ rest.rating}}
                </span>
            </p>
            <p> {{ rest.timings }} </p>
        </div>
        <hr v-if="edit">
        <div v-if="edit" class="card-edit">
            <router-link class="edit-button" :to="`/update/${rest.id}`">
                Edit
            </router-link>
            <button class="delete-button" @click="deleteRestaurant(rest.id)">Delete</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    rest: {
        type: Object,
        required: true
    },
    edit: {
        type: Boolean,
        required: false,
        default: false
    }
  },
  methods: {
      deleteRestaurant(restId) {
          this.$http.delete(`http://localhost:3000/restaurants/${restId}`)
            .then(() => {
                alert("Restaurant deleted Successfully")
                this.$router.push({name: 'home'})
            })
            .catch(err => {
                console.error(err)
            })
      }
  }
}
</script>

<style scoped>
.card {
    width: 200px;
    background: #f0f0f0;
    box-shadow: 2px 2px 5px 0px #000;
    margin: 20px auto;
    padding: 20px;
    border-radius: 5px;
}
.card:hover {
    transform: scale(1.03);
    transition: all 0.5s ease-in-out;
}
h1 {
    text-align: center;
}
img {
    width: 200px;
    height: 200px;
}
p {
    font-weight: bold;
}
span {
    float: right;
    background-color: #eee000;
    padding: 5px;
    border-radius: 5px;
}
.card-edit {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.edit-button {
    text-align: center;
    background: limegreen;
    color: #fff;
    padding: 5px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
}
.delete-button {
    text-align: center;
    background: indianred;
    color: #fff;
    padding: 5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: none;
    border-left: 1px solid;
}
</style>

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
    }
  },
}
</script>

<style scoped>
.card {
    width: 200px;
    height: 300px;
    background: #999;
    margin: 20px auto;
    padding: 20px;
    border-radius: 5px;
}
h1 {
    text-align: center;
}
img {
    width: 200px;
    height: 200px;
}
</style>

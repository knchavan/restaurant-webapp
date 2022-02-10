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
</style>

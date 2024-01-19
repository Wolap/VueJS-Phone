<script>
import Telephone from '../components/Telephone.vue'

export default {
    name: 'ClavierView',

    components: {
        Telephone,
    },

}
</script>

<template>
    <section class="main">
        <h1>Clavier</h1>
        <Telephone />
    </section>
</template>

<style scoped>
h1 {
    color: white;
    margin-bottom: 3%;
    font-size: 30px;
}

.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>



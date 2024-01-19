<script>
export default {
    name: 'ContactCard',

    props: ['contact'],

}
</script>

<template>
    <div class="card-contact">
        <p>{{ contact.name }}</p>
        <p> <i>{{ contact.num }}</i> </p>
    </div>
</template>

<style scoped>
.card-contact{
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 2%;
    margin-top: 2%;
    border-bottom: 3px solid orange;
    font-size: 18px;
}

p {
    color: white;
}


</style>
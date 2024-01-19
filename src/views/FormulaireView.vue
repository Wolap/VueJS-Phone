<script>
import FormContacts from '../components/FormContacts.vue'
export default {
    name: 'FormulaireView',

    components: {
        FormContacts,
    },
}
</script>

<template>
    <section>
        <section class="main">
            <h1>Formulaire</h1>
            <div class="form">
                <FormContacts />
            </div>
        </section>
    </section>
</template>

<style scoped>

h1 {
    color: white;
    margin-bottom: 5%;
    font-size: 25px;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 3%;
    border: 2px solid orange;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px orange;
}
</style>

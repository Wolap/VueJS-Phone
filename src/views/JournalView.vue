<script>
import { useJournalStore } from '../stores/journal'

export default {
    name: 'JournalView',

    setup() {
        const journalStore = useJournalStore()

        return {
            journalStore,
        }
    },

    computed: {
        journal() {
            console.log("this.journalStore", this.journalStore.journal)
            return this.journalStore.journal
        }
    },

}
</script>

<template>
    <section>
        <h1>Journal</h1>
        <section class="main">
            <div class="liste" v-for="numero in journal" >
                <p>{{ numero }}</p>
            </div>
        </section>
    </section>


</template>

<style scoped>
h1 {
    color: white;
    font-size: 30px;
    margin-bottom: 5%;
}

p {
    color: white;
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
    justify-content: center;
    align-items: center;
    padding: 3%;
    border: 2px solid orange;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px orange;
}
.liste {
    display: flex;
    justify-content: space-between;
    background-color: #2e2e2e;
    padding: 5%;
    margin-top: 2%;
    border-radius: 5px;
    font-size: 18px;
}
</style>
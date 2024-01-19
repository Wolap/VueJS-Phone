<script>
import { useContactsStore } from '../stores/contacts'
import { useJournalStore } from '../stores/journal'

export default {
    name: 'Telephone',

    setup() {
        const contactsStore = useContactsStore()
        const journalStore = useJournalStore()

        return {
            contactsStore,
            journalStore,
        }
    },

    computed: {
        contacts() {
            console.log("this.contactsStore", this.contactsStore.contacts)
            return this.contactsStore.contacts
        },
        journal() {
            console.log("this.journalStore", this.journalStore.journal)
            return this.journalStore.journal
        }
    },

    data() {
        return {
            numero: '',
        }
    },

    methods: {
        ajouterNumero(numero) {
            this.numero += numero
            console.log("this.numero", this.numero)
        },
        deleteNumero() {
            this.numero = this.numero.slice(0, -1)
            console.log("this.numero", this.numero)
        }, 
        ajoutJournal() {
            this.journalStore.ajoutJournal(this.numero)
            this.numero = ''
        }
    },
}
</script>

<template>

    <section class="clavier">
        <section class="num">
            <h1>{{ numero }}</h1>
            <div v-for="contact in contacts">
                <div v-if="numero == contact.num" class="name">
                    <p>{{ contact.name }}</p>
                </div>
            </div>
        </section>
    
        <section>
            <div>
                <button @click="ajouterNumero('1')">1</button>
                <button @click="ajouterNumero('2')">2</button>
                <button @click="ajouterNumero('3')">3</button>
            </div>
            <div>
                <button @click="ajouterNumero('4')">4</button>
                <button @click="ajouterNumero('5')">5</button>
                <button @click="ajouterNumero('6')">6</button>
            </div>
            <div>
                <button @click="ajouterNumero('7')">7</button>
                <button @click="ajouterNumero('8')">8</button>
                <button @click="ajouterNumero('9')">9</button>
            </div>
            <div>
                <button>*</button>
                <button @click="ajouterNumero('0')">0</button>
                <button>#</button>
            </div>
            <div>
                <button @click="ajoutJournal">Appeler</button>
                <button @click="deleteNumero"> Retour </button>
            </div>
        </section>
    </section>
</template>

<style scoped>



h1 {
    color: white;
}

p {
    color: orange;
}

.name {
    background-color: #2e2e2e;
    padding: 3% 10% 3% 10%;
    border-radius: 5px;
    margin-top: 20%;
}
.clavier {
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

div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.num {
    margin-bottom: 5%;    
}

div button {
    width: 80px;
    height: 50px;
    margin: 3%;
    padding: 2%;
    font-size: 20px;
    background-color: rgb(203, 202, 199);
    border: none;
    border-radius: 5px;
}


</style>
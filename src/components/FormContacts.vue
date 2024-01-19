<script>
import { useContactsStore } from '../stores/contacts'
import ContactCard from './ContactCard.vue'

export default {
    name: 'FormContacts',
    
    setup() {
        const contactsStore = useContactsStore()

        return {
            contactsStore,
        }
    },

    computed: {
        contacts() {
            return this.contactsStore.contacts
        }
    },
    
    components: {
        ContactCard,
    },

    data() {
        return {
            formContact: {
                name: '',
                num: '',
            }
        }
    },

    methods: {
        ajouterContacts() {
            console.log("this.contact", this.formContact)
            this.contactsStore.ajoutContacts(this.formContact)
            this.formContact = {
            name: '',
            num: ''
            }
        }
    },

}
</script>

<template>
    <ContactCard :contact="formContact" />

    <form @submit.prevent="ajouterContacts()">
      <input type="text" placeholder="Nom Prenom" v-model="formContact.name">
      <input type="text" placeholder="Numéro" v-model="formContact.num">
      <button type="submit">Ajouter</button>
    </form>

</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-top: 10%;
}

input {
    padding: 5px;
    border-radius: 3px;
    border: none;
    outline: none;
    background-color: #dedede;
}

button {
    padding: 5px;
    border-radius: 3px;
    border: none;
    outline: none;
    background-color: rgba(255, 166, 0, 0.778);
    box-shadow: 0px 0px 8px 0px orange;
    color: white;
    cursor: pointer;
}
</style>


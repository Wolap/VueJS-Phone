<script>
import { useContactsStore } from '../stores/contacts'
import ContactCard from '../components/ContactCard.vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'ContactView',
    
    setup() {
        const contactsStore = useContactsStore()

        console.log("contactsStore", contactsStore)

        return {
            contactsStore,
        }
    },

    computed: {
        contacts() {
            console.log("this.contactsStore", this.contactsStore.contacts)
            return this.contactsStore.contacts
        }
    },

    components: {
        ContactCard,
    },

}
</script>

<template>
    <section>
        <section class="main">
            <div class="txt">
                <h1>Contacts</h1>
                <RouterLink class="link" to="/formulaireview"> <i>Ajouter</i> </RouterLink>
                <RouterView />
            </div>

            <div class="card">
                <div v-for="contact in contacts" >
                    <ContactCard :contact="contact" />
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
h1, p {
    color: white;
}
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
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

.txt {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.link {
    color: white;
    text-decoration: none;
    font-size: 15px;
    padding: 1%;
    margin-left: 10%;
}

.card {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
}
</style>
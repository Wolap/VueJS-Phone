import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contact', {
    state: () => ({
        contacts: [
            {
                name: 'Jean',
                num: '0602060606',
            },
            {
                name: 'Paul',
                num: '0606060606',
            },
            {
                name: 'Moi',
                num: '0663179312',
            },
            {
                name: 'GG',
                num: '0622778086',
            }
        ]
    }),

    actions: {
        ajoutContacts(contact) {
            this.contacts.push(contact)
        },
        
    }
})
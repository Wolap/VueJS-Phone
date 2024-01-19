import { defineStore } from 'pinia'

export const useJournalStore = defineStore('journal', {
    state: () => ({
        journal: []
    }),

    actions: {
        ajoutJournal(num) {
            this.journal.push(num)
        },
        
    }
})
const { createApp } = Vue;

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            messageChat : [],
            selectedClass : "selectedContact",
            hidden: "box-message",
            imgSelected: "",
            nameSelected : "",
            textUser : "",
            searchContacts: "",
            hour: [],
            lastAccess: ""
        }
    },
    methods:{

        // Contatto selezionato
        contactSelected(i){
            // Impostiamo a tutti una flag per verificare se è selezionato
            this.contacts.forEach(element => {
                element.selected = false;
            });
            
            // Impostiamo su true la chat selezionata e mostriamo i messaggi
            this.contacts[i].selected = true;

            // Impostiamo l'immagine al cambio contatto
            this.imgSelected =  "img/avatar" + this.contacts[i].avatar + ".jpg";

            // Impostiamo il nome al cambio contatto
            this.nameSelected = this.contacts[i].name;

            this.lastAccess = this.hour[i];
            
        },

        // Messaggio inviato
        textSended(){
            
            // Settiamo la data e l'ora
            let genDate = new Date()
            let dataInvio = `${genDate.getDay()}/${genDate.getMonth()}/${genDate.getFullYear()} ${genDate.getHours()}:${genDate.getMinutes()}:${genDate.getSeconds()}`

            this.contacts.forEach(element => {
                if (element.selected){
                    element.messages.push({date:dataInvio, message: this.textUser, status: "sent"});

                    setTimeout(()=> element.messages.push({date:dataInvio, message: "ok", status: "received"}), 1000);

                    this.lastAccess = `${genDate.getHours()}:${genDate.getMinutes()}`
                }
            });
            
            this.textUser = "";
        },

        // Cerca contatto
        searchingContacts(){
            this.contacts.forEach(element => {
                if (element.name.toLowerCase().includes(this.searchContacts.toLowerCase())){
                    element.visible = true;

                } else {
                    element.visible = false;

                }
            });
        }

    },
    mounted(){
        
        // Ciclo per mandare nell'html un array con solo i dati che servono
        for (let i = 0; i < this.contacts.length; i++) {
            this.messageChat.push(this.contacts[i].messages)  
        }

        // Impostiamo la prima chat come attiva
        this.contacts[0].selected = true;

        this.imgSelected =  "img/avatar" + this.contacts[0].avatar + ".jpg";


        this.nameSelected = this.contacts[0].name;
        let lunghezza
        this.contacts.forEach(element => {
           lunghezza = element.messages.length
            this.hour.push(element.messages[lunghezza - 1].date)
        });

        this.lastAccess = this.hour[0];

    }

}).mount("#app");

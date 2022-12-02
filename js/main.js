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
            hourMessageSent: "",
            cloneMessaggi: "",
            activeCounter: 0
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

            // Aggiornaimo ultimo accesso
            this.hourMessageSent = this.hour[i];

            // Chiudiamo tutti i menù aperti
            this.cloneMessaggi.forEach(messages => {
                messages.menuOpened = false;
            });
            
        },

        // Messaggio inviato
        textSended(){
            this.cloneMessaggi.push({date: this.hourMessageSent, message: this.textUser, status: "sent"})
            this.cloneMessaggi.push({date: this.hourMessageSent, message: "ok", status: "received"})
            // Settiamo la data e l'ora
            let genDate = new Date()

            // Salviamo orario invio messaggio
            this.hourMessageSent  = `${genDate.getHours()}:${genDate.getMinutes()}`
            
            this.contacts.forEach((element, index) => {
                if (element.selected){
                    element.messages.push({date: this.hourMessageSent, message: this.textUser, status: "sent"});
                    setTimeout(()=> element.messages.push({date: this.hourMessageSent, message: "ok", status: "received"}), 1000);

                    this.hour.splice([index], 1, this.hourMessageSent);

                }
                document.querySelector(".messages").scrollBy(0, 200);

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
        },

        // Aprire menù chat
        openMenu(index){
            // Condizione che verifica che non ci siano più di 1 menù aperto --DEBUG--
            if (this.activeCounter > 0){
                this.cloneMessaggi.forEach(messages => {
                    messages.menuOpened = false
                    this.activeCounter = 0;
                });

            } else{
                this.activeCounter++
                // Condizione cha fa attivare o disattivare i menù
                if (this.cloneMessaggi[index].menuOpened){
                    this.cloneMessaggi[index].menuOpened = false;
    
                } else{
                    this.cloneMessaggi[index].menuOpened = true;
                }
            }  
            
        },
        
        deleteMessage(index){
           this.cloneMessaggi[index].messageDeleted = true; // Potrebbe non servire           
            this.contacts.forEach((element, i) => {
                if (element.visible){
                    this.contacts[i].messages.splice([index], 1)

                }

            });
            console.log(this.contacts[0].messages);
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

        this.contacts.forEach(element => {
            this.hour.push(element.messages[element.messages.length - 1].date)
        });

        this.invioMessaggio = this.hour[0];

        //  Clonazione array "messages" dentro "contacts"
        this.contacts.forEach(element => {
                this.cloneMessaggi = [...element.messages]
                
        });

        // Aggiunto valore per aprire menù
        this.cloneMessaggi.forEach(messages => {
            messages.menuOpened = false;
        });

        this.cloneMessaggi.forEach(messages => {
            messages.messageDeleted = false;
        });

        console.log(this.contacts[0].messages);
    }


}).mount("#app");

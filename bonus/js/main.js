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

            randomMessages: ["Hey", "Come Stai?", "Hai fatto la spesa?", "Domani esci in piazza?", "Quando compi gli anni?"],

            messageChat : [],
            hidden: "hidden",
            textUser : "",
            searchContacts: "",
            hour: [],
            hourMessageSent: "",
            cloneMessaggi: "",
            activeCounter: 0,
            IndexUserACtive: 0,
            lastMessage: [],
            btnPlaneShow: false,
            writing: false,
            welcomeShow: true,
            loadingPage: true,
            darkMode: false,
            chatOpen: false,
            onlineMode: false,
            scrollAutomatico:() => 
            {
                let containerMessages = this.$el.querySelector(".messages")
                containerMessages.scrollTop = containerMessages.scrollHeight
            },
            choiceRandomMessage: (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
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
            this.IndexUserACtive = i

            // Impostiamo il nome al cambio contatto
            this.nameSelected = this.contacts[i].name;

            // Aggiornaimo ultimo accesso
            this.hourMessageSent = this.hour[i];

            // Chiudiamo tutti i menù aperti
            this.cloneMessaggi.forEach(messages => {
                messages.menuOpened = false;
            });
            this.activeCounter = 0;


            // Reimpostiamo la ricerca
            this.searchContacts = ""
            this.contacts.forEach(element => {
                element.visible = true;
                
            });

            this.welcomeShow = false;

            this.chatOpen = true;
            
        },

        // Messaggio inviato
        textSended(){
            if(this.textUser === "" || this.textUser === " ") return;

            let numRandom = this.choiceRandomMessage(0, this.randomMessages.length - 1);
            // Aggiungiamo messaggi nell'oggetto clone
            this.cloneMessaggi.push({date: this.hourMessageSent, message: this.textUser, status: "sent"})
            this.cloneMessaggi.push({date: this.hourMessageSent, message: this.randomMessages[numRandom], status: "received"})

            // Settiamo la data e l'ora
            let genDate = new Date()

            // Salviamo orario invio messaggio
            this.hourMessageSent  = `${genDate.getHours()}:${genDate.getMinutes()}`
            
            // Aggiungiamo messaggi nell'oggetto originale
            this.contacts.forEach((element, index) => {
                if (element.selected){
                    // Impostare stato contatto su online
                    this.writing = true;

                    // Push messaggio utente
                    element.messages.push({date: this.hourMessageSent, message: this.textUser, status: "sent"});
                    this.lastMessage.push(this.contacts[this.IndexUserACtive].messages)

                    
                    setTimeout(()=> {
                        // Push messaggio
                        element.messages.push({date: this.hourMessageSent, message: this.randomMessages[numRandom], status: "received"});

                        this.scrollAutomatico();

                        // Print ultimo messaggio
                        this.lastMessage.splice([this.IndexUserACtive], 1, element.messages[element.messages.length - 1].message);
                        
                        this.writing = false;
                        this.onlineMode = true;

                    } ,1000);

                    setTimeout(()=>{
                        this.onlineMode = false;

                    },4000)

                    // Aggiornamento orario lista contatti
                    this.hour.splice([index], 1, this.hourMessageSent);

                }


            });

            // Aggiornamento ultimo messaggio lista conttatti
            this.lastMessage.splice([this.IndexUserACtive], 1, this.textUser);

            this.scrollAutomatico();
            
            this.textUser = "";

            this.btnPlaneShow = false;

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
        
        // Eliminazione messaggio
        deleteMessage(index){        
            this.contacts[this.IndexUserACtive].messages.splice([index], 1)


            // Chiudiamo tutti i menù aperti
            this.cloneMessaggi.forEach(messages => {
                messages.menuOpened = false;
            });

            this.activeCounter = 0;

        },

        // Mostrare/Nascondere tasto "plane" per mandare messaggi
        inputCheck(){
            if(this.textUser != "" && this.textUser != " "){
                this.btnPlaneShow = true;
            } else{
                this.btnPlaneShow = false;
            }
        },

        // Switchare fra dark e light mode
        toggleDarkMode(){
            if(this.darkMode){
                this.darkMode = false;
            } else{
                this.darkMode = true;
            }
        },

        // Controllare se chat è stata aperta (SOLO MOBILE)
        closeChat(){
            this.chatOpen = false;
        }
    },

    mounted(){ 
        
        // Ciclo per mandare nell'html solo l'array "messages"
        for (let i = 0; i < this.contacts.length; i++) {
            this.messageChat.push(this.contacts[i].messages)  
        }


        // Aggiungiamo tutte le date su un array
        this.contacts.forEach(element => {
            this.hour.push(element.messages[element.messages.length - 1].date)
        });

        //  Clonazione array "messages"
        this.contacts.forEach(element => {
                this.cloneMessaggi = [...element.messages]
                
        });

        // Aggiunto valore per aprire menù
        this.cloneMessaggi.forEach(messages => {
            messages.menuOpened = false;
        });

        // Aggiunto ultimo messaggio chat
        this.contacts.forEach(element => {
            this.lastMessage.push(element.messages[element.messages.length - 1].message)
        });

        // Disattivazione splash page
        setInterval(() => this.loadingPage = false, 1000)
    }


}).mount("#app");

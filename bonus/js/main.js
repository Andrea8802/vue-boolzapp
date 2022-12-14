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
                            message: 'Ciao Claudia, hai novit???',
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
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
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
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
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
            checkMenuArr: "",
            activeMenuCounter: 0,
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
            // Impostiamo a tutti una flag per verificare se ?? selezionato
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

            // Chiudiamo tutti i men?? aperti
            this.checkMenuArr.forEach(messages => {
                messages.menuOpened = false;
            });
            this.activeMenuCounter = 0;


            // Reimpostiamo la ricerca
            this.searchContacts = ""
            this.contacts.forEach(element => {
                element.visible = true;
                
            });

            // Mostrare schermata welcome
            this.welcomeShow = false;

            // Controllare se la chat ?? stata aperta (SOLO MOBILE)
            this.chatOpen = true;
            
        },

        // Messaggio inviato
        textSended(){
            if(this.textUser === "" || this.textUser === " ") return;

            // Settiamo la data e l'ora
            let genDate = new Date()

            // Salviamo orario invio messaggio
            this.hourMessageSent  = `${genDate.getHours()}:${genDate.getMinutes()}`

            // Funzione per richiedere una parola casuale dall'array e aggiunta alla variabile
            let numRandom = this.choiceRandomMessage(0, this.randomMessages.length - 1);
            
            // Aggiungiamo messaggi nell'oggetto clone
            this.checkMenuArr.push({date: this.hourMessageSent, message: this.textUser, status: "sent"}, {date: this.hourMessageSent, message: this.randomMessages[numRandom], status: "received"});
            
            // Aggiungiamo messaggi nell'oggetto originale
            this.contacts.forEach((element, index) => {
                if (element.selected){
                    

                    // Push messaggio utente
                    element.messages.push({date: this.hourMessageSent, message: this.textUser, status: "sent"});

                    // Aggiunto come ultimo messaggio per anteprima contatto
                    this.lastMessage.push(this.contacts[this.IndexUserACtive].messages)

                    // Impostare stato contatto su online
                    setTimeout(() =>{
                        this.onlineMode = true;
                    }, 2000)

                    // Impostare stato contatto su "Sta Scrivendo.."
                    setTimeout(()=>{
                        this.writing = true;

                    }, 4000)

                    setTimeout(()=> {
                        // Push messaggio contatto
                        element.messages.push({date: this.hourMessageSent, message: this.randomMessages[numRandom], status: "received"});

                        this.scrollAutomatico();

                        // Print ultimo messaggio
                        this.lastMessage.splice([this.IndexUserACtive], 1, element.messages[element.messages.length - 1].message);
                        
                        // Aggiornamento orario lista contatti e info utente chat ativa
                        this.hour.splice([index], 1, this.hourMessageSent);

                        this.writing = false;

                    } ,6000);

                    // Rimuovere stato online
                    setTimeout(()=>{
                        this.onlineMode = false;
                    },8000)
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

        // Aprire men?? chat
        openMenu(index){
            // Condizione che verifica che non ci siano pi?? di 1 men?? aperto --DEBUG--
            if (this.activeMenuCounter > 0){
                this.checkMenuArr.forEach(messages => {
                    messages.menuOpened = false
                    this.activeMenuCounter = 0;
                });

            } else{
                this.activeMenuCounter++

                // Condizione cha fa attivare o disattivare i men??
                this.checkMenuArr[index].menuOpened ? this.checkMenuArr[index].menuOpened = false :  this.checkMenuArr[index].menuOpened = true
            }  
    
            
        },
        
        // Eliminazione messaggio
        deleteMessage(index){      
            
            // Eliminazione messaggio
            this.contacts[this.IndexUserACtive].messages.splice([index], 1)

            // Chiusura men?? aperti
            this.checkMenuArr.forEach(messages => {
                messages.menuOpened = false
                
            });

            this.activeMenuCounter = 0;

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

        // Controllare se chat ?? stata aperta (SOLO MOBILE)
        closeChat(){
            this.chatOpen = false;
        }
    },

    mounted(){ 
        
        this.contacts.forEach(element =>{
            
             // Ciclo per mandare nell'html solo l'array "messages"
            this.messageChat.push(element.messages)

            // Aggiunte tutte le date su un array
            this.hour.push(element.messages[element.messages.length - 1].date)

            //  Clonazione array "messages" per gestire menu aperti
            this.checkMenuArr = [...element.messages]

            // Settaggio su false tutti i menu
            element.messages.menuOpened = false

            // Aggiunto ultimo messaggio chat
            this.lastMessage.push(element.messages[element.messages.length - 1].message)
        })

        // Disattivazione splash page
        setInterval(() => this.loadingPage = false, 1000)

    }


}).mount("#app");

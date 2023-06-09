const { createApp } = Vue;
createApp({
    data() {
      return {
        /* variables Vue 3 */

        /* default current active image */
        currActive: 0,
        
        slides: [
            {
                image: './assets/img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morales',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                alternative: 'Spiderman'
            },
            {
                image: './assets/img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                alternative: 'Ratchet & Clank'
            },
            {
                image: './assets/img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                alternative: 'Fortnite'
            },
            {
                image: './assets/img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                alternative: 'Stray'
            },
            {
                image: './assets/img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                alternative: 'Avengers'
            }
        ]

      }
    },
    methods: {
        /* functions Vue 3 */

        prevClick(){

            if( this.currActive == 0 ){
                this.currActive = this.slides.length - 1
            } else {
                
                this.currActive = this.currActive - 1;
            }

        },

        nextClick(){

            if ( this.currActive == this.slides.length - 1 ){
                this.currActive = 0;
            } else {
                this.currActive = this.currActive + 1;
            }

        },

        clickImg(index){
            this.currActive = index;
        }

    }
}).mount('#app')

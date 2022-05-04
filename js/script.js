/*
Descrizione:
Partendo dal markup consegnate rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente
Bonus:
1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
*/


/***************************
            VUE
****************************/
const app = new Vue({

    el: "#app",

    data: {

        slides:[
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }  
        ],

        activeIndex: 0,
        autoScroll: null,
    },

    methods: {
        prev(){
            this.activeIndex--;
            if(this.activeIndex<0){
                this.activeIndex = (this.slides.length - 1);
            }
            // console.log(this.activeIndex);   
        },
        next(){
            this.activeIndex++;
            if(this.activeIndex>(this.slides.length - 1)){
                this.activeIndex = 0;
            }
            // console.log(this.activeIndex);
        },
        selectThumb(index){
            this.activeIndex = index;
        },
        startAutoScroll(){
            this.autoScroll = setInterval( () => {
                this.next();
            }, 3000)
        },
        mouseOver(){
            console.log("sono sopra");
            clearInterval(this.autoScroll);
            this.autoScroll = null;
        },
        mouseOut(){
            console.log("sono fuori");
            this.startAutoScroll();
        }
    },

    mounted(){
        this.startAutoScroll();
    },
    
})
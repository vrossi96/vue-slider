/* 
|Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
|Deve essere possibile scorrere le immagini cliccando sulle freccette.
|I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
|Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.
|Note:  scegliamo una delle due seguenti soluzioni per le freccette:
|Se stiamo visualizzando la prima immagine, la freccetta di sinistra può:
|scomparire passare all'ultima immagine
|Se stiamo visualizzando l'ultima immagine, la freccetta  a destra può: scomparire passare alla prima immagine
Siate coerenti: o scompaiono o continuano a navigare, no a soluzioni miste!!
Bonus:
1- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sulle freccette o sui pallini l'autoplay si interrompe
3 - l'autoplay riparte quando il mouse lascia le freccette o i pallini
*/

const app = new Vue({
   el: "#root",
   data: {
      actualImg: 0,
      images: [
         {
            desc: "Lavender fields",
            url: "img/image1.jpg",
         },
         {
            desc: "Small north Italian lake",
            url: "img/image2.jpg",
         },
         {
            desc: "Dolomiti's highlands",
            url: "img/image3.jpg",
         },
         {
            desc: "Scottish waterfall",
            url: "img/image4.jpg",
         },
      ],
   },
   methods: {
      changeImg(index) {
         this.actualImg = index;
      },
      isActive(index) {
         if (this.actualImg === index) {
            return true;
         }
         return false;
      },
      nextImg() {
         if (this.actualImg === this.images.length - 1) {
            this.actualImg = 0;
         } else {
            this.actualImg++;
         }
      },
      prevImg() {
         if (this.actualImg === 0) {
            this.actualImg = this.images.length - 1;
         } else {
            this.actualImg--;
         }
      },
   },
});

console.log(app.images.length);

let app = new Vue({
el:'#root',
data:{
   dischi:[],
   genereDischi:['All'],
   cerca:'',
   logo:'img/logo2.jpg',

   

},

mounted(){
     axios
     .get('https://flynn.boolean.careers/exercises/api/array/music')
     .then((disco)=>{
           this.dischi = disco.data.response
           console.log(this.dischi);

           this.dischi.forEach(element => {
                 
                  console.log(element);

                  if(!this.genereDischi.includes(element.genre)){
                    this.genereDischi.push(element.genre)
                  }
           });

           console.log(this.genereDischi);
     })

     console.log(this.genereDischi);
},

methods:{
   selectGen(song){
       if(song.genre==this.cerca || this.cerca=='All'){
         return true
       } else {
         return false
       }
   }
}

})
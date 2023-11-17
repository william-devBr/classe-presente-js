/** estudo de uso de classes com Js */

class Presente {

    constructor(containerElement){
        //construtor da classe
        
        this.containerElement = containerElement;
      
        this.presentes = [
            {title : 'meia',   url : 'src/presente1.jpg'},
            {title : 'camisa', url : 'src/presente2.jpg'},
            {title : 'tênis',  url : 'src/presente3.jpg'},
            {title : 'troll',  url : 'src/presente4.jpg'}
        ];
       
        this.presentes.forEach(img => {

            this.image = document.createElement('img');
            this.image.src = img.url;
            this.image.addEventListener('click', ()=> this.openPresent(img).bind(this));
            
            this.containerElement.appendChild(this.image);
        });
      
    }
    //métodos da classe
     openPresent(present){
       this.containerElement.innerHTML = `<p>parabéns você ganhou, <strong>${present.title}</strong> 🧑🏻‍🎄 !!</p><br/>`;
       this.containerElement.innerHTML += "<a href='javascript:location.reload()'>voltar</a>";
   }

}
const elem = new Presente(document.getElementById("presentes"));

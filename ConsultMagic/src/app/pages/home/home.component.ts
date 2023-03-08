import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardAPIService } from 'src/app/service/CardAPIService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private cardAPIService:CardAPIService){}
  
  ngOnInit(): void {
    
  }

  isClick:boolean = false;

  formCardInput= new FormControl();

  selection(event:any){
    const idbutton = (event.target as HTMLButtonElement).id
    this.isClick = !this.isClick
    console.log(this.isClick);
  }

  onSubmit(){
     const cardmodif=this.formatListCards(this.formCardInput.value)
    console.log(cardmodif)
    this.cardAPIService.postCardList(cardmodif).subscribe(resposta =>{
        console.log(resposta);
    });
    
  }

  formatListCards(stringNotFormated:String):String[]{
  
    const listOfCards:String[] = stringNotFormated.split(";")
    const stringFormated:String[]= [];

    listOfCards.forEach(function(card){
      if(card=== ''){
      }else{
        stringFormated.push(card.trim())
      }
    });
    

    return stringFormated;
  }



}

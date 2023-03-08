import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { VerifiedObjectsDTO } from "../dto/VerifiedObjectsDTO";

@Injectable({
    providedIn:'root'
})
export class CardAPIService{

    private url = "http://localhost:8081/consultmarket/flowstoreconsult"

    constructor(private httpClient:HttpClient){

    }


    postCardList(cardList:String[]):Observable<VerifiedObjectsDTO>{
        return this.httpClient.post<VerifiedObjectsDTO>(this.url,cardList);
    }
}
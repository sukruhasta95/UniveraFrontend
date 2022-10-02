import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Deposit } from '../models/deposit';


@Injectable({
  providedIn:'root',
})

export class accountDataService{
  url = 'https://localhost:44350/api/Account/Deposit';
  constructor(private http:HttpClient){ }

  depositAccount(data:Deposit){

    return this.http.post(this.url,data)
  }

}

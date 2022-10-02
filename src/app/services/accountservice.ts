import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Deposit } from '../models/deposit';
import { Withdraw } from '../models/withdraw';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn:'root',
})

export class accountDataService{
  depositUrl = 'https://localhost:44350/api/Account/Deposit';
  withdrawUrl = 'https://localhost:44350/api/Account/WithdrawMoney';
  constructor(private http:HttpClient, private toastr: ToastrService){ }

  depositAccount(data:Deposit){
    this.http.post(this.depositUrl,data).subscribe(
      (response:any)=>this.toastr.info(response.message))

    return this.http.post(this.depositUrl,data)
  }

  withdrawAccount(data:Withdraw){
    this.http.post(this.withdrawUrl,data).subscribe(
    (response:any)=>this.toastr.info(response.message))

    return this.http.post(this.withdrawUrl,data)
  }

}

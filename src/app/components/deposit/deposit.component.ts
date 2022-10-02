import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Deposit } from 'src/app/models/deposit';
import {accountDataService} from 'src/app/services/accountservice'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountComponent } from 'src/app/components/account/account.component'

@Component({
  selector: 'app-deposit',

  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})

export class DepositComponent implements OnInit {

  deposit={
    "Id":0,
    "Quantity":0
  }

  // apiUrl = "https://localhost:44350/api/Account/Deposit"
  constructor(private httpClient: HttpClient,private accountData : accountDataService,@Inject(MAT_DIALOG_DATA) public data: any) {

[]
   }
  ngOnInit(): void {
  }
  depositAccount(quantity: string ) {
      this.deposit.Quantity= Number(quantity)
      this.deposit.Id=this.data.Id
      this.accountData.depositAccount(this.deposit).subscribe(data =>{

        })



  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { accountDataService } from 'src/app/services/accountservice'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  withdraw = {
    "Id": 0,
    "Quantity": 0,
  }
  withdrawUrl = 'https://localhost:44350/api/Account/WithdrawMoney';

  constructor(private accountData: accountDataService, @Inject(MAT_DIALOG_DATA) public data: any) {
    []
  }

  ngOnInit(): void {
  }

  withdrawAccount(quantity: string) {
    this.withdraw.Quantity = Number(quantity)
    this.withdraw.Id = this.data.Id
    this.accountData.withdrawAccount(this.withdraw).subscribe(data => {
    })
  }
}

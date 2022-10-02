import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AccountResponseModel } from 'src/app/models/accountResponseModel';
import { Account } from 'src/app/models/account';
import { MatDialog } from '@angular/material/dialog';
import { DepositComponent } from 'src/app/components/deposit/deposit.component'
import { WithdrawComponent } from 'src/app/components/withdraw/withdraw.component'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accounts: Account[] = [
  ];
  apiUrl = "https://localhost:44350/api/Account/GetAllAccount"
  constructor(private httpClient: HttpClient, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getAccounts();
  }
  getAccounts() {
    this.httpClient
      .get<AccountResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.accounts = response.data
        console.log(this.accounts)
      });
  }

  openDepositDialog(Id:any) {

     this.dialog.open(DepositComponent,{
      data: { Id }
     }


     )
    .afterClosed().subscribe(result => {
      if(result)
           this.getAccounts()

    });

  }
  openWithdrawDialog() {
    this.dialog.open(WithdrawComponent)

  }

}

import { Component, OnInit } from '@angular/core';
import { AccountLoginService } from './shared-service/account-login-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [AccountLoginService]
})
export class AccountComponent implements OnInit {

  private submitting:boolean = false;

  constructor(private accountLoginService: AccountLoginService) {
    accountLoginService.progressBar$.subscribe(
      progress=>{
        this.submitting = !this.submitting;
      }
    );
   }

  ngOnInit() {
  }

}

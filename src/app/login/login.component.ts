import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private myRoute: Router) { }

  ngOnInit(): void {
  }

  loginDt(data)
  {
    if(data.email == 'admin@gmail.com' && data.password == 'Admin@123')
    {
      setTimeout((router: Router) => {
              this.myRoute.navigate(['admin']);
            }, 1000);
    }

    // console.log("data",data)
  }

}

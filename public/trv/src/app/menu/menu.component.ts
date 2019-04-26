import { Component } from '@angular/core';
import { AuthGuard } from '../auth-quard.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  constructor( private authGuard :AuthGuard,
               private router :Router){}

  logout()
  {
    this.authGuard.clearAuth();
    this.router.navigate(['/']);
    alert('Sign Out');
  }
}

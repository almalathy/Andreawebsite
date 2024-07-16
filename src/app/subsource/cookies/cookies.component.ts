import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    
  }
}

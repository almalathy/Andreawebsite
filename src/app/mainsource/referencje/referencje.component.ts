import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referencje',
  templateUrl: './referencje.component.html',
  styleUrls: ['./referencje.component.scss']
})
export class ReferencjeComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {
    
  }
}

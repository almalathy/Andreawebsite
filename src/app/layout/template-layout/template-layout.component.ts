import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-template-layout',
  templateUrl: './template-layout.component.html',
  styleUrls: ['./template-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TemplateLayoutComponent implements OnInit{
  constructor() {}
  ngOnInit() {
    
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecremComponent } from './secrem.component';

describe('SecremComponent', () => {
  let component: SecremComponent;
  let fixture: ComponentFixture<SecremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

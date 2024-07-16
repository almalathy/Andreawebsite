import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OchronaComponent } from './ochrona.component';

describe('OchronaComponent', () => {
  let component: OchronaComponent;
  let fixture: ComponentFixture<OchronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OchronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OchronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

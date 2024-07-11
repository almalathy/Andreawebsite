import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnieComponent } from './omnie.component';

describe('OmnieComponent', () => {
  let component: OmnieComponent;
  let fixture: ComponentFixture<OmnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmnieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinikursComponent } from './minikurs.component';

describe('MinikursComponent', () => {
  let component: MinikursComponent;
  let fixture: ComponentFixture<MinikursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinikursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinikursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

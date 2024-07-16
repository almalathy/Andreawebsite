import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZasadyComponent } from './zasady.component';

describe('ZasadyComponent', () => {
  let component: ZasadyComponent;
  let fixture: ComponentFixture<ZasadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZasadyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZasadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

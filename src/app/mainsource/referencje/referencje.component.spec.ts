import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencjeComponent } from './referencje.component';

describe('ReferencjeComponent', () => {
  let component: ReferencjeComponent;
  let fixture: ComponentFixture<ReferencjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

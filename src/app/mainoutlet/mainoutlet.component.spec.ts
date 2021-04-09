import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainoutletComponent } from './mainoutlet.component';

describe('MainoutletComponent', () => {
  let component: MainoutletComponent;
  let fixture: ComponentFixture<MainoutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainoutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainoutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

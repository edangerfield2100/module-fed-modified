import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateLibComponent } from './state-lib.component';

describe('StateLibComponent', () => {
  let component: StateLibComponent;
  let fixture: ComponentFixture<StateLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

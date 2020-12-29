import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGameComponent } from './register-game.component';

describe('RegisterGameComponent', () => {
  let component: RegisterGameComponent;
  let fixture: ComponentFixture<RegisterGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

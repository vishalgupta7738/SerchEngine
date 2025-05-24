import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsManagmentComponent } from './user-details-managment.component';

describe('UserDetailsManagmentComponent', () => {
  let component: UserDetailsManagmentComponent;
  let fixture: ComponentFixture<UserDetailsManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

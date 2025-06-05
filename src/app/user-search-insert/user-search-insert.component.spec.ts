import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchInsertComponent } from './user-search-insert.component';

describe('UserSearchInsertComponent', () => {
  let component: UserSearchInsertComponent;
  let fixture: ComponentFixture<UserSearchInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSearchInsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSearchInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

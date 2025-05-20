import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBikeComponent } from './update-bike.component';

describe('UpdateBikeComponent', () => {
  let component: UpdateBikeComponent;
  let fixture: ComponentFixture<UpdateBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBikeComponent } from './delete-bike.component';

describe('DeleteBikeComponent', () => {
  let component: DeleteBikeComponent;
  let fixture: ComponentFixture<DeleteBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

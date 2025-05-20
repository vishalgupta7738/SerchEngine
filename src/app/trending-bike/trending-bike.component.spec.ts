import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBikeComponent } from './trending-bike.component';

describe('TrendingBikeComponent', () => {
  let component: TrendingBikeComponent;
  let fixture: ComponentFixture<TrendingBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

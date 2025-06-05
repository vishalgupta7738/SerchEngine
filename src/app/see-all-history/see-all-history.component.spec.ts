import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllHistoryComponent } from './see-all-history.component';

describe('SeeAllHistoryComponent', () => {
  let component: SeeAllHistoryComponent;
  let fixture: ComponentFixture<SeeAllHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeAllHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAllHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

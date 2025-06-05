import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingdetailscomComponent } from './pendingdetailscom.component';

describe('PendingdetailscomComponent', () => {
  let component: PendingdetailscomComponent;
  let fixture: ComponentFixture<PendingdetailscomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingdetailscomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingdetailscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

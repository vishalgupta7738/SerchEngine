import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeCrudComponent } from './bike-crud.component';

describe('BikeCrudComponent', () => {
  let component: BikeCrudComponent;
  let fixture: ComponentFixture<BikeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

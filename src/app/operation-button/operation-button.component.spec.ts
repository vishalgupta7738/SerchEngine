import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationButtonComponent } from './operation-button.component';

describe('OperationButtonComponent', () => {
  let component: OperationButtonComponent;
  let fixture: ComponentFixture<OperationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

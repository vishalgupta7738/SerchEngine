import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGenerateComponentComponent } from './report-generate-component.component';

describe('ReportGenerateComponentComponent', () => {
  let component: ReportGenerateComponentComponent;
  let fixture: ComponentFixture<ReportGenerateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportGenerateComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGenerateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

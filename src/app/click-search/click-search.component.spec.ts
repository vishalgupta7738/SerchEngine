import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickSearchComponent } from './click-search.component';

describe('ClickSearchComponent', () => {
  let component: ClickSearchComponent;
  let fixture: ComponentFixture<ClickSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

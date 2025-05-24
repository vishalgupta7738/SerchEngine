import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApporvalLoginComponent } from './apporval-login.component';

describe('ApporvalLoginComponent', () => {
  let component: ApporvalLoginComponent;
  let fixture: ComponentFixture<ApporvalLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApporvalLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApporvalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

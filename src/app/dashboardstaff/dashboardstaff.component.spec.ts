import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardstaffComponent } from './dashboardstaff.component';

describe('DashboardstaffComponent', () => {
  let component: DashboardstaffComponent;
  let fixture: ComponentFixture<DashboardstaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardstaffComponent]
    });
    fixture = TestBed.createComponent(DashboardstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

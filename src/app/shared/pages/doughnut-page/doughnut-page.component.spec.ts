import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutPageComponent } from './doughnut-page.component';

describe('DoughnutPageComponent', () => {
  let component: DoughnutPageComponent;
  let fixture: ComponentFixture<DoughnutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoughnutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoughnutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

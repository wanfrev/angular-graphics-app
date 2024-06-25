import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePageComponent } from './pie-page.component';

describe('PiePageComponent', () => {
  let component: PiePageComponent;
  let fixture: ComponentFixture<PiePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PiePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

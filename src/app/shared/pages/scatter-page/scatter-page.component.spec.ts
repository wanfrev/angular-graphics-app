import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterPageComponent } from './scatter-page.component';

describe('ScatterPageComponent', () => {
  let component: ScatterPageComponent;
  let fixture: ComponentFixture<ScatterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScatterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScatterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

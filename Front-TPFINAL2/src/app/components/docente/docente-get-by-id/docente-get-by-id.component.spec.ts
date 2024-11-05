import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteGetByIdComponent } from './docente-get-by-id.component';

describe('DocenteGetByIdComponent', () => {
  let component: DocenteGetByIdComponent;
  let fixture: ComponentFixture<DocenteGetByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteGetByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

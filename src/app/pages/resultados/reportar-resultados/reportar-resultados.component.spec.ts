import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarResultadosComponent } from './reportar-resultados.component';

describe('ReportarResultadosComponent', () => {
  let component: ReportarResultadosComponent;
  let fixture: ComponentFixture<ReportarResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportarResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

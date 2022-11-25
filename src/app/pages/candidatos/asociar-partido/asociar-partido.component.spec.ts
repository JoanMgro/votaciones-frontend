import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarPartidoComponent } from './asociar-partido.component';

describe('AsociarPartidoComponent', () => {
  let component: AsociarPartidoComponent;
  let fixture: ComponentFixture<AsociarPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociarPartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

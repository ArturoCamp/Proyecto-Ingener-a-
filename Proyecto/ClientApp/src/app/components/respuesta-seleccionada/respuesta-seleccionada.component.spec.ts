import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaSeleccionadaComponent } from './respuesta-seleccionada.component';

describe('RespuestaSeleccionadaComponent', () => {
  let component: RespuestaSeleccionadaComponent;
  let fixture: ComponentFixture<RespuestaSeleccionadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaSeleccionadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaSeleccionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

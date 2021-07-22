import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPorResponderComponent } from './solicitudes-por-responder.component';

describe('SolicitudesPorResponderComponent', () => {
  let component: SolicitudesPorResponderComponent;
  let fixture: ComponentFixture<SolicitudesPorResponderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesPorResponderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPorResponderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

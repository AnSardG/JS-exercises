import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaProductoComponent } from './alerta-producto.component';

describe('AlertaProductoComponent', () => {
  let component: AlertaProductoComponent;
  let fixture: ComponentFixture<AlertaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

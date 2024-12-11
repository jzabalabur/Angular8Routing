import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarnumeroComponent } from './adivinarnumero.component';

describe('AdivinarnumeroComponent', () => {
  let component: AdivinarnumeroComponent;
  let fixture: ComponentFixture<AdivinarnumeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdivinarnumeroComponent]
    });
    fixture = TestBed.createComponent(AdivinarnumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

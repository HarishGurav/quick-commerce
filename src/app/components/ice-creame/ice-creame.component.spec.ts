import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreameComponent } from './ice-creame.component';

describe('IceCreameComponent', () => {
  let component: IceCreameComponent;
  let fixture: ComponentFixture<IceCreameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IceCreameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IceCreameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

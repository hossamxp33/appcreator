import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicsimulatorComponent } from './ionicsimulator.component';

describe('IonicsimulatorComponent', () => {
  let component: IonicsimulatorComponent;
  let fixture: ComponentFixture<IonicsimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicsimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicsimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

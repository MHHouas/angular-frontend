import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistreDetailsComponent } from './sinistre-details.component';

describe('SinistreDetailsComponent', () => {
  let component: SinistreDetailsComponent;
  let fixture: ComponentFixture<SinistreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinistreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinistreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

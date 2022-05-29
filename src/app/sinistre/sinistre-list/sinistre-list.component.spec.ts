import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistreListComponent } from './sinistre-list.component';

describe('SinistreListComponent', () => {
  let component: SinistreListComponent;
  let fixture: ComponentFixture<SinistreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinistreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinistreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

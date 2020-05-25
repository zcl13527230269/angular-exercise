import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Learn01Component } from './learn01.component';

describe('Learn01Component', () => {
  let component: Learn01Component;
  let fixture: ComponentFixture<Learn01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Learn01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Learn01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

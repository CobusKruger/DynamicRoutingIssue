import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagedLibComponent } from './packaged-lib.component';

describe('PackagedLibComponent', () => {
  let component: PackagedLibComponent;
  let fixture: ComponentFixture<PackagedLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagedLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

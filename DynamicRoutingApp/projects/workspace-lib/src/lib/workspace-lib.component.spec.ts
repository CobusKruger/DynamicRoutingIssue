import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceLibComponent } from './workspace-lib.component';

describe('WorkspaceLibComponent', () => {
  let component: WorkspaceLibComponent;
  let fixture: ComponentFixture<WorkspaceLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

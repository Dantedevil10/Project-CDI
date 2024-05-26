import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotestListComponent } from './compotest-list.component';

describe('CompotestListComponent', () => {
  let component: CompotestListComponent;
  let fixture: ComponentFixture<CompotestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompotestListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompotestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

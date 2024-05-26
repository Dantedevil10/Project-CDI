import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotestComponent } from './compotest.component';

describe('CompotestComponent', () => {
  let component: CompotestComponent;
  let fixture: ComponentFixture<CompotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompotestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

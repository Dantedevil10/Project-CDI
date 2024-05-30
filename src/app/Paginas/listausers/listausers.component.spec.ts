import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListausersComponent } from './listausers.component';

describe('ListausersComponent', () => {
  let component: ListausersComponent;
  let fixture: ComponentFixture<ListausersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListausersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListausersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

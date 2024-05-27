import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoDetalheComponent } from './conteudo-detalhe.component';

describe('ConteudoDetalheComponent', () => {
  let component: ConteudoDetalheComponent;
  let fixture: ComponentFixture<ConteudoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConteudoDetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConteudoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

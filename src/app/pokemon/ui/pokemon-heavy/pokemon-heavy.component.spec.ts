import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHeavyComponent } from './pokemon-heavy.component';

describe('PokemonHeavyComponent', () => {
  let component: PokemonHeavyComponent;
  let fixture: ComponentFixture<PokemonHeavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonHeavyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonHeavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotileComponent } from './videotile.component';

describe('VideotileComponent', () => {
  let component: VideotileComponent;
  let fixture: ComponentFixture<VideotileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideotileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideotileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

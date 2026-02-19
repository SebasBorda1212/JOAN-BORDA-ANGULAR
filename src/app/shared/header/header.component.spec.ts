import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component'; 

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Cambié whenStable por detectChanges que es más común
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
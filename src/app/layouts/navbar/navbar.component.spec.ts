import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
  });

  it('test init component', () => {
    expect(component.isLoggedIn).toBe(false);
  });

  it('test logout function', () => {
    spyOn(component, 'navigateTo');
    component.logout();
    expect(component.navigateTo).toHaveBeenCalled();
  });

  it('test navigateTo function', () => {
    const url = "/";
    const navigateSpy = spyOn(component, 'navigateTo');
    component.navigateTo(url);
    expect(navigateSpy).toHaveBeenCalledWith(url);
  });


});

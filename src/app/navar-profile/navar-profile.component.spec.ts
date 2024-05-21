import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavarProfileComponent } from './navar-profile.component';

describe('NavarProfileComponent', () => {
  let component: NavarProfileComponent;
  let fixture: ComponentFixture<NavarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavarProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

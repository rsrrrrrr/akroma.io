import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CollapseModule } from 'ngx-bootstrap';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          CollapseModule,
        ],
        declarations: [
          NavigationComponent,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreFeatueProductsViewComponent } from '../store-feature-products-view.component';

describe('StoreFeatueProductsViewComponent', () => {
  let component: StoreFeatueProductsViewComponent;
  let fixture: ComponentFixture<StoreFeatueProductsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreFeatueProductsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreFeatueProductsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

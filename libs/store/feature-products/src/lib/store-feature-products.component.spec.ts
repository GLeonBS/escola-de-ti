import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreFeatureProductsComponent } from './store-feature-products.component';

describe('StoreFeatureProductsComponent', () => {
  let component: StoreFeatureProductsComponent;
  let fixture: ComponentFixture<StoreFeatureProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreFeatureProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreFeatureProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

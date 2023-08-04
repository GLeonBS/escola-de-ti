import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreFeatureProductsChangeComponent } from './store-feature-products-change.component';

describe('StoreFeatureProductsChangeComponent', () => {
  let component: StoreFeatureProductsChangeComponent;
  let fixture: ComponentFixture<StoreFeatureProductsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreFeatureProductsChangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreFeatureProductsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

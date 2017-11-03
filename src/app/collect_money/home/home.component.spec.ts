import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectMoneyHomeComponent } from 'home.component";

describe('ConnectionComponent', () => {
  let component: CollectMoneyHomeComponent;
  let fixture: ComponentFixture<CollectMoneyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectMoneyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectMoneyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

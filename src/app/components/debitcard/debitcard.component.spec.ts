import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitcardComponent } from './debitcard.component';

describe('DebitcardComponent', () => {
  let component: DebitcardComponent;
  let fixture: ComponentFixture<DebitcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

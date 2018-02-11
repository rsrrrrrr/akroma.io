import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UnixTimestampToDatePipe } from '../../pipes/unix-timestamp-to-date.pipe';

import { TransactionOverviewComponent } from './transaction-overview.component';

describe('TransactionOverviewComponent', () => {
  let component: TransactionOverviewComponent;
  let fixture: ComponentFixture<TransactionOverviewComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          TransactionOverviewComponent,
          UnixTimestampToDatePipe,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

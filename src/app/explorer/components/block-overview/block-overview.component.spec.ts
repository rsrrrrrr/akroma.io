import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HexToAsciiPipe } from '../../pipes/hex-to-ascii.pipe';
import { UnixTimestampToDatePipe } from '../../pipes/unix-timestamp-to-date.pipe';

import { BlockOverviewComponent } from './block-overview.component';

describe('BlockOverviewComponent', () => {
  let component: BlockOverviewComponent;
  let fixture: ComponentFixture<BlockOverviewComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
        ],
        declarations: [
          BlockOverviewComponent,
          UnixTimestampToDatePipe,
          HexToAsciiPipe,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

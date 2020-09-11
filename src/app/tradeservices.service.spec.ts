import { TestBed } from '@angular/core/testing';

import { TradeservicesService } from './tradeservices.service';

describe('TradeservicesService', () => {
  let service: TradeservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

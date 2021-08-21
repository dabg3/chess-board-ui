import { TestBed } from '@angular/core/testing';

import { DefaultImageProvider } from './default-image-provider.service';

describe('PieceImageService', () => {
  let service: DefaultImageProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultImageProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

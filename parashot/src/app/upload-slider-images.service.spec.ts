import { TestBed } from '@angular/core/testing';

import { UploadSliderImagesService } from './upload-slider-images.service';

describe('UploadSliderImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadSliderImagesService = TestBed.get(UploadSliderImagesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('authentification OK', () => {
    expect(service.login("afaye@samanecorporation.com", "passer")).toBeTrue();
  });

  it('authentification KO', () => {
    expect(service.login("afayerrrr@samanecorporation.com", "passer1234")).toBeFalse();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

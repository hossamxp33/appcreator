import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class ensureModuleLoadedOnceGuard implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    return true;
  }

}

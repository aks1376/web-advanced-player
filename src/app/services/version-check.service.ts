import { Injectable } from '@angular/core';
import { VERSION } from './../../environments/version';

@Injectable({
  providedIn: 'root'
})
export class VersionCheckService {

  constructor() { }

  check() {
    setInterval(() => {
      const localHashVersion = localStorage.getItem('HashVersion');
      if (localHashVersion) {
        // hard refresh
        if (String(localHashVersion) !== String(VERSION.hash)) {
          alert('click ok for update to new version');
          localStorage.clear();
          location.reload();
        }
      } else {
        if (VERSION?.hash) {
          localStorage.setItem('HashVersion', VERSION.hash);
        }
      }
    }, 3000);

  }
}
import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PWAService {

  constructor(private swUpdate: SwUpdate) {
    // Check if a new version exists!
    const updatesAvailable = swUpdate.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      map(evt => ({
        type: 'UPDATE_AVAILABLE',
        current: evt.currentVersion,
        available: evt.latestVersion,
      }))
    )
    .subscribe({
      next: (v) => {
        if (confirm('A new version of this page exists, Reload the page ?')) {
          this.swUpdate.activateUpdate().then(() => {
            window.location.reload()
          })
        }
      }
    })
  }
}

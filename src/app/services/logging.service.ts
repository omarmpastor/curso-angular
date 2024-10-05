import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logInfo(message: string) {
    console.log(`INFO: ${message}`);
  }

  logWarn(message: string) {
    console.warn(`WARN: ${message}`);
  }

  logError(message: string) {
    console.error(`ERROR: ${message}`);
  }
}

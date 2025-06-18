import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
 import { provideAnimations } from '@angular/platform-browser/animations';
 import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),provideHttpClient(),
     provideAnimations(),

     provideToastr({
        positionClass: 'toast-top-center', // Other options: toast-bottom-right, toast-top-center, etc.
      timeOut: 2000,
    
      closeButton: true,
      progressBar: true
     })
  ]
};

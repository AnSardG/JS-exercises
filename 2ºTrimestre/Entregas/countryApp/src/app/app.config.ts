import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routes.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

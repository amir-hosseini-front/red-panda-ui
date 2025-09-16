import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routes from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
const dbConfig: DBConfig = {
  name: 'blueBar',
  version: 1,
  objectStoresMeta: [
    {
      store: 'tableFilter',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'key', keypath: 'key', options: { unique: false } },
        {
          name: 'columnsSchema',
          keypath: 'columnsSchema',
          options: { unique: false },
        },
      ],
    },
  ],
};
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgxIndexedDBModule.forRoot(dbConfig)),
  ],
}).catch((err) => console.error(err));

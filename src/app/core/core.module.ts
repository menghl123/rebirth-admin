import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RebirthHttpModule } from 'rebirth-http';
import { RebirthStorageModule, StorageService, StorageType } from 'rebirth-storage';
import { HttpModule } from '@angular/http';
import { RebirthEventSourceModule } from 'rebirth-event-source';
import { RebirthNGModule } from 'rebirth-ng';
import { AuthorizationService, RebirthPermissionModule } from 'rebirth-permission';
import { LoadingService } from './loading';
import { GuidService } from './guid';
import { ReStorageService } from "./storage/storage.service";

@NgModule({
  imports: [
    HttpModule,
    RebirthHttpModule,
    RebirthStorageModule,
    RebirthEventSourceModule,
    RebirthNGModule.forRoot(),
    RebirthPermissionModule.forRoot({ loginPage: '/public/login' }),
  ],
  providers: [
    LoadingService,
    GuidService,
    ReStorageService
  ],
  exports: [
    RebirthHttpModule,
    RebirthStorageModule,
    RebirthEventSourceModule,
  ]
})
export class CoreModule {

  constructor(authorizationService: AuthorizationService) {
    // authorization storage way(sessionStorage, localStorage, memory)
    authorizationService.setStorageType(StorageType.sessionStorage);
  }
}

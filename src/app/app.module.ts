import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthProvider } from '../providers/auth/auth';
import { DataProvider } from '../providers/data/data';
import { FunctionsProvider } from '../providers/functions/functions';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

const firebaseConfig = {
  apiKey: 'AIzaSyDiefO8-tolzxMVp-WQE32w5ePFQ4CSmho',
  authDomain: 'tyreexpress-d3dde.firebaseapp.com',
  databaseURL: 'https://tyreexpress-d3dde.firebaseio.com',
  projectId: 'tyreexpress-d3dde',
  storageBucket: '',
  messagingSenderId: '660971527421'
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    DataProvider,
    AngularFireAuth,
    AngularFireDatabase,
    FunctionsProvider,
    FunctionsProvider
  ]
})
export class AppModule {}

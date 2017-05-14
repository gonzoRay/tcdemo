import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule, ErrorHandler} from '@angular/core';

import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import {InAppBrowser} from '@ionic-native/in-app-browser';
import {SplashScreen} from '@ionic-native/splash-screen';

import {IonicStorageModule} from '@ionic/storage';

import {ConferenceApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {PopoverPage} from '../pages/about-popover/about-popover';
import {AccountPage} from '../pages/account/account';
import {LoginPage} from '../pages/login/login';
import {MapPage} from '../pages/map/map';
import {SchedulePage} from '../pages/schedule/schedule';
import {ScheduleFilterPage} from '../pages/schedule-filter/schedule-filter';
import {SessionDetailPage} from '../pages/session-detail/session-detail';
import {SignupPage} from '../pages/signup/signup';
import {SpeakerDetailPage} from '../pages/speaker-detail/speaker-detail';
import {SpeakerListPage} from '../pages/speaker-list/speaker-list';
import {TabsPage} from '../pages/tabs/tabs';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {SupportPage} from '../pages/support/support';

import {ConferenceData} from '../providers/conference-data';
import {UserData} from '../providers/user-data';
import {AsksPage} from "../pages/asks/asks";
import {AsksDataService} from "../providers/asks-data";
import {ChecklistPage} from '../pages/checklists/checklist';
import {ManageChecklistsPage} from "../pages/checklists/manage-checklists/manage-checklists";


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    ManageCheckListsPage,
    ChecklistPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    AsksPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        {component: TabsPage, name: 'TabsPage', segment: 'tabs'},
        {component: SchedulePage, name: 'Schedule', segment: 'schedule'},
        {component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:name'},
        {component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter'},
        {component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList'},
        {component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:name'},
        {component: ManageChecklistsPage, name: 'ManageChecklists', segment: 'manageChecklists'},
        {component: ChecklistPage, name: 'SpeakerDetail', segment: 'manageChecklists/:name'},
        {component: AsksPage, name: 'Checklists', segment: 'checklists'},
        {component: MapPage, name: 'Map', segment: 'map'},
        {component: AboutPage, name: 'About', segment: 'about'},
        {component: TutorialPage, name: 'Tutorial', segment: 'tutorial'},
        {component: SupportPage, name: 'SupportPage', segment: 'support'},
        {component: LoginPage, name: 'LoginPage', segment: 'login'},
        {component: AccountPage, name: 'AccountPage', segment: 'account'},
        {component: SignupPage, name: 'SignupPage', segment: 'signup'}
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    AsksPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    AsksDataService
  ]
})
export class AppModule {
}

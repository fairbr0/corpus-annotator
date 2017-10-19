import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CorpusComponent } from './corpus/corpus.component';
import { ImageThumbComponent } from './image-thumb/image-thumb.component';
import { ImageTaggerComponent } from './image-tagger/image-tagger.component';

import { CorpusService } from './services/corpus.service';
import { WebStorageModule, LocalStorageService } from 'angular2-localstorage';

@NgModule({
  declarations: [
    AppComponent,
    CorpusComponent,
    ImageThumbComponent,
    ImageTaggerComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    WebStorageModule
  ],
  providers: [
    CorpusService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

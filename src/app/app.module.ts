import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomAngularMaterialModule } from './custom-angular-material/custom-angular-material.module';
import { ProgressComponent } from './components/progress/progress.component';
import { ImageUploaderComponent } from './shared_components/image-uploader/image-uploader.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ProgressComponent,
    ImageUploaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CustomAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

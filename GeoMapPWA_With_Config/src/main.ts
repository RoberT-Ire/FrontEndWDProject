import { bootstrapApplication } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { appConfig } from './app/app.config';
import { HomePage } from './app/home/home.page';
import { IonicStorageModule } from '@ionic/storage-angular';

bootstrapApplication(HomePage, {
  providers: [...appConfig],
  imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()]
});

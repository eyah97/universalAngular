import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { }

  addSEO() {
    //base pagina
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this.meta.updateTag({ name: 'description', content: "cronómetro proviene de la mitología griega, el nombre se le dio por el Dios griego Cronos que era el Dios del tiempo. Es un reloj o una función de reloj que sirve para medir fracciones de tiempo, normalmente cortos y con exactitud." });
    this.meta.updateTag({ name: 'robots', content: 'INDEX, FOLLOW' });
    this.meta.updateTag({ name: 'author', content: 'Emmanuel' });
    this.meta.updateTag({ name: 'keywords', content: 'tiempo, rapidez, mejores procesos, innovación , mayor rendimiento, escalabilidad' });
    this.meta.updateTag({ name: 'date', content: '2020-11-27', scheme: 'YYYY-MM-DD' });
    this.meta.updateTag({ name: 'image', content: 'src/assets/cronómetro-332x205.jpg'});
    this.meta.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' });
    

  }
}

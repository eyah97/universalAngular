import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lorem',
  templateUrl: './lorem.component.html',
  styleUrls: ['./lorem.component.scss']
})
export class LoremComponent implements OnInit {

  constructor(private seo: SeoService, private title: Title) { 
    this.seo.addSEO();
    this.title.setTitle(`Prueba Lorem | Integriapp S.A. de C.V.`);
   }

  ngOnInit(): void {
  }

}

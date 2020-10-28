import { Component } from '@angular/core';
import { AtletasService } from './services/atletas.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public atletas: Array<any> = []

  constructor(
    private atletasService: AtletasService
  ) {
    this.atletasService.getAtletas().subscribe((resp: any) =>{
      console.log(resp)
      this.atletas = resp
    })
  }
}

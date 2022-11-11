import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
//imports

//imports

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    //objeto storage criado dentro do construtor
    private storage: Storage
  ) {}

  async ngOnInit(){
    //cria o storage ao carregar a página
    await this.storage.create()
  }
}

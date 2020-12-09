import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  url = "https://idontknowwhatisthis.000webhostapp.com/GetEtiologies.php";
  immunes;

  constructor(
    
  ) {this.getJson("");}

  async getJson(extra : string) {
    const respuesta = await fetch(`${this.proxyUrl + this.url }`);
    this.immunes = await respuesta.json();
    console.log(this.immunes);
    console.log(respuesta.json);
  }

}

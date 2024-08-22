import { Component } from '@angular/core';
import {Product} from "../entitie/Product";
import {ProductionService} from "../production.service";
// import { Produ } from "../entitie/Product";
@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css']
})
export class InventaireComponent {
  td: Array<Product> | undefined;
  findtext: string = "";
  constructor(private service: ProductionService) {
  }
  ngOnInit() {
    this.td = this.service.affihceproduct();
  }




}


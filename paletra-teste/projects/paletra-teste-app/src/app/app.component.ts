import { Component, OnInit } from '@angular/core';
import { ContaService } from './conta-service';
import { Conta } from './conta.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'paletra-teste-app';
  contas:Conta[] = [];

  constructor(private _serviceConta : ContaService) {}

  ngOnInit(): void {
    this.getContas();
  }

  getContas(){
    return this._serviceConta.obterContas().subscribe(_contas => this.contas = _contas);
  }
}

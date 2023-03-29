import { Component } from '@angular/core';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent {

  atualizar =
  [
    {
      "codigo" : 111,
      "descricao" : "Disco de freio",
      "disponivel" : 5,
      "maximo" : 15,
      "minimo" : 3
    },
    {
      "codigo" : 222,
      "descricao" : "Mocinete",
      "disponivel" : 8,
      "maximo" : 10,
      "minimo" : 5
    },
    {
      "codigo" : 333,
      "descricao" : "Lanterna",
      "disponivel" : 20,
      "maximo" : 30,
      "minimo" : 10
    },
    {
      "codigo" : 444,
      "descricao" : "Pistão",
      "disponivel" : 2,
      "maximo" : 5,
      "minimo" : 2
    },
    {
      "codigo" : 555,
      "descricao" : "Cambio",
      "disponivel" : 1,
      "maximo" : 10,
      "minimo" : 5
    },
    {
      "codigo" : 666,
      "descricao" : "Volante",
      "disponivel" : 30,
      "maximo" : 50,
      "minimo" : 10
    },
    {
      "codigo" : 777,
      "descricao" : "Fusivel",
      "disponivel" : 150,
      "maximo" : 300,
      "minimo" : 50
    },
  ]

  entrar()
  {
    alert('Estoque atualizado')
  }

}

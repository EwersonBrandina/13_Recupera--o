import { Injectable } from '@angular/core';

//imports
import { Produto } from '../models/produto.model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';
//imports

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private storage: Storage
  ) { }

  inserir(argumento: Produto){
    argumento.id = Guid.create() //cria o ID
    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  async FiltraContatosId(id : string){
    return JSON.parse(await this.storage.get(id))}

  async listarTodos(){
    let arrayProduto: Produto [] = []
    await this.storage.forEach((value: string) =>
      {const produto: Produto = JSON.parse(value); arrayProduto.push(produto)})
    return arrayProduto;
  }
}

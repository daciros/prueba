import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
/*importar variables globales*/
import {Globals}   from 'src/app/class/global/globals';
/*importar funciones javascript
{encriptarValor,enmascararValor,encriptarCampo}*/
var crypto = require('../encriptar/forge.all.min.js') ;

@Injectable({
  providedIn: 'root'
})



export class GlobalsService {
 

  cifrar = crypto.encriptarValor;
  enmascara = crypto.enmascararValor;
  encriptar = crypto.encriptarCampo;

  constructor(private KeyApi: Globals) {

   
   }
   Keylock(){
    return this.cifrar = this.KeyApi.KeyPublicLock;
  }
  KeiUnlock(){
    return this.KeyApi.KeyPrivateLock;
  }
  Enmascara(){
    return this.enmascara;

  }
  Encripta(){
    return this.encriptar;
  }
}

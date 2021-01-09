import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { from } from 'rxjs';
//import {GlobalsService} from'../../services/global/globals.service';
//import * as forge from 'node-forge';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {
  [x: string]: any;

  ngOnInit(): void {
  }
  /*
  publicKey = this.global.Keylock();

  constructor(public global: GlobalsService,
     public form: FormGroup) {
    
    this.buildForm();
    
   }

  

  public buildForm (){
    this.form = new FormGroup({
        name: new FormControl('',[Validators.required]),
        document: new FormControl(this.global.Enmascara,[Validators.required]),
        key: new FormControl(this.global.Keylock,[Validators.required])
    });

   /* this.textField.valueChanges
.pipe(
  debounceTime(500)
)
.subscribe(value => {
  console.log(value);
});
  }
  
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  doSomething() {
    console.log('click');
  }
/*encriptarValor(publicKey = this.global.Keylock, valorCampo=this.form.value('documento')) {
  var publicKey = forge.pki.publicKeyFromPem(publicKey);
  var buffer = forge.util.createBuffer(valorCampo, 'utf8');
  var binaryString = buffer.getBytes();
  var encrypted = publicKey.encrypt(binaryString, 'RSA-OAEP', {
      md: forge.md.sha512.create(),
      mgf1: {
          md: forge.md.sha512.create()
      }
  });

  return forge.util.encode64(encrypted);

}

//Enmascara un valor con asteriscos y deja visibles los n últimos caracteres
enmascararValor(valorCampo=this.form.value('documento'), visibles = 2) {
  if (valorCampo != null && visibles != null && valorCampo.length > visibles) {
      var enmascarado = "";
      var size = valorCampo.length;
      if (valorCampo != null && size != 0) {
          for (var i = 0; i < (size - visibles); i++) {
              enmascarado = enmascarado + "*";
          }
      }

      if (visibles > 0) {
          enmascarado = enmascarado + valorCampo.substring(valorCampo.length - visibles);
      }
      return enmascarado;
  } else {
      return valorCampo;
  }
}

//Cifra y enmascara elemento pasado como parámetro
encriptarCampo(nomVar, nomVarCrypto, visibles) {
  if (document.getElementById(nomVar)) {
      var val = document.getElementById(nomVar).value;
      if (val.trim().length != 0) {
          document.getElementById(nomVar).value = enmascararValor(val, visibles);
          document.getElementById(nomVarCrypto).value = encriptarValor(publicKey, val);
      }
  }
}
*/

}

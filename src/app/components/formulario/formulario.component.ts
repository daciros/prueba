import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import {GlobalsService} from'../../services/global/globals.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


 // form: FormGroup;
 // global: GlobalsService ;

  constructor() {
    //this.buildForm();
    
   }

  ngOnInit(): void {
  }
/*
  public buildForm (){
    this.form = new FormGroup({
        name: new FormControl(''),
        document: new FormControl(this.global.Enmascara),
        key: new FormControl(this.global.Keylock)
    });
  }
*/

}

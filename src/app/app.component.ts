import { Component, OnInit } from '@angular/core';
//import para corregir error en consola
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//no olvidar declarar el formulario
export class AppComponent implements OnInit{
  title = 'formulario-reactivo';
  //mismo nombre que el que esta definido en el html
  reactiveForm : FormGroup;

  /**
   *Constructor de la clase, por el momento vacio
   */
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(){this.crearForm();}

  crearForm(){
    this.reactiveForm = this.fb.group({
      //se declaran los name que tienen los input en el formulario
      txtNombre : [''],
      txtEmail : [''],
      txtPassword : ['']
    });
  }

  onSubmit(){
    console.log("Has accionado un evento", this.reactiveForm.value);
  }
}

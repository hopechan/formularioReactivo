import { Component, OnInit } from '@angular/core';
//import para corregir error en consola
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      txtNombre : ['', Validators.required],
      //Para usar multiples validaciones se utiliza la funcion compose 
      txtEmail : ['', Validators.compose([Validators.required, Validators.email])],
      //se verifica que la contraseña tenga al menos 8 caracteres
      txtPassword : ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  onSubmit(){
    console.log("Has accionado un evento", this.reactiveForm.value);
  }

  get nombre(){return this.reactiveForm.get('txtNombre');}
  get email(){return this.reactiveForm.get('txtEmail');}
  get password(){return this.reactiveForm.get('txtPassword');}

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/Interfaces/AlumnoInterface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  
  displayedColumns: string[] = ['nombre', 'apellido', 'dni','email','nota'];

  formEstudiante:FormGroup;
  listaAlumnos:Alumno[] = [];
  

  constructor(private fb:FormBuilder, private http:HttpClient) { }



  ngOnInit(): void {
    this.crearFormulario();
    
    this.http.get<Alumno[]>('assets/JsonDatos.json').subscribe (data =>{
      console.log(data);
      this.listaAlumnos=data;
    })
  }
  
  //Metodo de Crea,Inicializa y AgregaValida los inputs
  crearFormulario(){
   
    this.formEstudiante = this.fb.group({
      nombre  : ['', [ Validators.required, Validators.minLength(5) ]  ],
      apellido: ['', [Validators.required,Validators.minLength(5)] ],
      dni  : ['', [ Validators.required,Validators.max(8)]],
      email  : ['', [ Validators.required,Validators.email]],
      nota  : ['', [ Validators.required,Validators.max(2)]],
    });
  }


  //Chequea que se cumpla las validaciones

  get nombreNoValido(){
    return this.formEstudiante.get('nombre').invalid && this.formEstudiante.get('nombre').touched;
  }

  get apellidoNoValido(){
    return this.formEstudiante.get('apellido').invalid && this.formEstudiante.get('apellido').touched;
  }

  get dniNoValido(){
    return this.formEstudiante.get('dni').invalid && this.formEstudiante.get('dni').touched;
  }

  get emailNoValido(){
    return this.formEstudiante.get('email').invalid && this.formEstudiante.get('email').touched;
  }

  get notaNoValido(){
    return this.formEstudiante.get('nota').invalid && this.formEstudiante.get('nota').touched;
  }

    //Metodo de Crea,Inicializa y AgregaValida los inputs
    crearFormulario2(){
   
      this.formEstudiante = this.fb.group({
        nombre  : ['', [ Validators.required, Validators.minLength(5) ]  ],
        apellido: ['', [Validators.required,Validators.minLength(5)] ],
        dni  : ['', [ Validators.required,Validators.max(8)]],
        email  : ['', [ Validators.required,Validators.email]],
        nota  : ['', [ Validators.required,Validators.max(2)]],
      });
    }
  


  //Probando como obtener los valores de los forumarios
  
agregarAlumno(){
  debugger;
  let alumno:Alumno;

  alumno.nombre=this.formEstudiante.get('nombre').value;
  alumno.apellido=this.formEstudiante.get('apellido').value;
  alumno.dni=this.formEstudiante.get('dni').value;
  alumno.email=this.formEstudiante.get('email').value;
  alumno.nota=this.formEstudiante.get('nota').value;
  console.log(alumno);
  this.listaAlumnos.push(alumno);


}



}


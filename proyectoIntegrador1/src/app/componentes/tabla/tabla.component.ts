import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/AlumnoInterface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/JsonDatos.json').subscribe (data =>{
      console.log(data);
      this.dataSource=data;
    })
  }

  



  displayedColumns: string[] = ['nombre', 'apellido', 'dni','email','nota'];
  dataSource = null;

}

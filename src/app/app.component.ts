import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from './services/persona/persona.service';
import { RequestRespose } from './models/cadena';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  cadenaForm!: FormGroup;
  cadena: any;

  public cadenas!: any[];

  constructor(
    public fb: FormBuilder,
    public personaService: PersonaService
  ) {

  }
  ngOnInit(): void {

    this.cadenaForm = this.fb.group({
      id: [''],
      input: ['', Validators.required],
      output: [''],
      repeats: ['', Validators.required],
    });;

    this.personaService.getAllPersonas().subscribe(resp => {
      this.cadenas=resp.content;
    },
      error => { console.error(error) }
    ); 
   
  }


  guardar(): void {
    this.personaService.savePersona(this.cadenaForm.value).subscribe(resp => {
      this.cadenaForm.reset();
      
      this.cadenas.push(resp);
    },
      error => { console.error(error) }
    )
  }

  eliminar(persona: { id: any; }){
    this.personaService.deletePersona(persona.id).subscribe(resp=>{
      if(resp===true){
        this.cadena.pop(persona)
        
      }
      this.cadenaForm.reset();
    })
  }

  editar(persona: { id: any; nombre: any; apellido: any; edad: any; pais: any; estado: any; }){
    this.cadenaForm.setValue({
      id:persona.id,
      nombre: persona.nombre ,
      apellido: persona.apellido ,
      edad: persona.edad,
      pais: persona.pais,
      estado: persona.estado,
    })
  }



}

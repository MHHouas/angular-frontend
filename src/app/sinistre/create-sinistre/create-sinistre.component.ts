import { Component, OnInit } from '@angular/core';
import { Sinistre } from '../../../models/Sinistre';
import { SinistreService } from '../../../services/sinistre.service';
import { ContratService } from 'src/services/contrat.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sinistre',
  templateUrl: './create-sinistre.component.html',
  styleUrls: ['./create-sinistre.component.css']
})
export class CreateSinistreComponent implements OnInit {

  sinistre: Sinistre = new Sinistre();

  numeros: number[] = [];

  sinistreForm!: FormGroup;

  statuts = ["Ouvert","Expertise","Terminé"];

  constructor(
    private formBuilder: FormBuilder,
    private sinistreService: SinistreService,
    private contratService: ContratService,
    private router: Router) { }

  ngOnInit(): void {
    this.getNumerosContrats();
    this.initializeForm();
  }

  initializeForm(): void {
    this.sinistreForm = this.formBuilder.group({
      numeroContrat: new FormControl('',[Validators.required,validateNumeroContrat(this.numeros)]),
      dateAccident: new FormControl('',[Validators.required]),
      dateCreation: new FormControl('',[Validators.required]),
      statut: new FormControl(this.statuts[0],[Validators.required])
    })
  }

  saveSinistre(){
    this.sinistreService.createSinistre(this.sinistre).subscribe( data =>{
      console.log(data);
      this.goToSinistreList();
    },
    error => console.log(error));
  }

  goToSinistreList(){
    this.router.navigate(['/sinistres']);
  }
  
  onSubmit(){
    if (this.sinistreForm.valid) {
      console.log(this.sinistre);
      this.mapForm();
      this.saveSinistre();
    }
    else {
      console.log("invalid")
    }
    //this.mapForm();
    //this.saveSinistre();
  }

  private getNumerosContrats(){
    this.contratService.getContratsList().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.numeros.push(data[i].numero);
      }
    });
  }

  mapForm() {
    this.sinistre.numeroContrat = this.sinistreForm.value.numeroContrat;
    this.sinistre.dateAccident = this.sinistreForm.value.dateAccident;
    this.sinistre.dateCreation = this.sinistreForm.value.dateCreation;
    this.sinistre.statut = this.sinistreForm.value.statut;
  }

}

/*function numeroContrat (control: AbstractControl): {[key: string]: any} | null {
  const numero: number = control.value;
  if (numero in this.numeros)
    return null;
  else
    return {'numeroContrat': true}
}*/

function validateNumeroContrat(numeros: number[]) {
  return (control: AbstractControl): {[key: string]: any} | null => { 
    if ( control.value in numeros ) {
      return null;
    }      
    return {'numeroContrat': true};  
  }
}
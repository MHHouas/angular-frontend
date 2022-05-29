import { Component, OnInit } from '@angular/core';
import { Contrat } from '../../../models/contrat';
import { ContratService } from '../../../services/contrat.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-contrat',
  templateUrl: './create-contrat.component.html',
  styleUrls: ['./create-contrat.component.css']
})
export class CreateContratComponent implements OnInit {

  contrat: Contrat = new Contrat();
  
  contratForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contratService: ContratService,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contratForm = this.formBuilder.group({
      numero: new FormControl('',[Validators.required]),
      dateDebut: new FormControl('',[Validators.required]),
      dateFin: new FormControl('',[Validators.required]),
      nomAssure: new FormControl('',[Validators.required]),
      matriculeVehicule: new FormControl('',[Validators.required])
    })
  }

  saveContrat(){
    this.contratService.createContrat(this.contrat).subscribe( data =>{
      console.log(data);
      this.goToContratList();
    },
    error => console.log(error));
  }

  goToContratList(){
    this.router.navigate(['/contrats']);
  }
  
  onSubmit(){
    if (this.contratForm.valid) {
      console.log(this.contrat);
      this.mapForm()
      this.saveContrat();
    }
  }

  mapForm() {
    this.contrat.numero = this.contratForm.value.numero;
    this.contrat.dateDebut = this.contratForm.value.dateDebut;
    this.contrat.dateFin = this.contratForm.value.dateFin;
    this.contrat.nomAssure = this.contratForm.value.nomAssure;
    this.contrat.matriculeVehicule = this.contratForm.value.matriculeVehicule;
  }
  
}

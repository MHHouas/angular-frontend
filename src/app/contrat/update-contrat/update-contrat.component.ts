import { Component, OnInit } from '@angular/core';
import { ContratService } from '../../../services/contrat.service';
import { Contrat } from '../../../models/contrat';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {

  id!: number;
  contrat: Contrat = new Contrat();
  contratForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contratService: ContratService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contratService.getContratById(this.id).subscribe(data => {
      this.contrat = data;
      this.initializeForm();
    }, error => console.log(error));
  }

  initializeForm(): void {
    this.contratForm = this.formBuilder.group({
      numero: new FormControl(this.contrat.numero,[Validators.required]),
      dateDebut: new FormControl(this.contrat.dateDebut,[Validators.required]),
      dateFin: new FormControl(this.contrat.dateFin,[Validators.required]),
      nomAssure: new FormControl(this.contrat.nomAssure,[Validators.required]),
      matriculeVehicule: new FormControl(this.contrat.matriculeVehicule,[Validators.required]),
    })
  }

  onSubmit(){
    this.mapForm();
    this.contratService.updateContrat(this.id, this.contrat).subscribe( data => {
      this.goToContratList();
    }, error => console.log(error));
  }

  mapForm() {
    this.contrat.numero = this.contratForm.value.numero;
    this.contrat.dateDebut = this.contratForm.value.dateDebut;
    this.contrat.dateFin = this.contratForm.value.dateFin;
    this.contrat.nomAssure = this.contratForm.value.nomAssure;
    this.contrat.matriculeVehicule = this.contratForm.value.matriculeVehicule;
  }

  goToContratList(){
    this.router.navigate(['/contrats']);
  }
}

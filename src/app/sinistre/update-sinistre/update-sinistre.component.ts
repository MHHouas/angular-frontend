import { Component, OnInit } from '@angular/core';
import { SinistreService } from '../../../services/sinistre.service';
import { Sinistre } from '../../../models/Sinistre';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-sinistre',
  templateUrl: './update-sinistre.component.html',
  styleUrls: ['./update-sinistre.component.css']
})
export class UpdateSinistreComponent implements OnInit {

  id!: number;
  sinistre: Sinistre = new Sinistre();
  sinistreForm! : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sinistreService: SinistreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sinistreService.getSinistreById(this.id).subscribe(data => {
      this.sinistre = data;
      this.initializeForm();
    }, error => console.log(error));
  }

  initializeForm(): void {
    this.sinistreForm = this.formBuilder.group({
      numeroContrat: new FormControl(this.sinistre.numeroContrat,[Validators.required]),
      dateAccident: new FormControl(this.sinistre.dateAccident,[Validators.required]),
      dateCreation: new FormControl(this.sinistre.dateCreation,[Validators.required]),
      statut: new FormControl(this.sinistre.statut,[Validators.required])
    })
  }

  onSubmit(){
    this.mapForm();
    this.sinistreService.updateSinistre(this.id, this.sinistre).subscribe( data => {
      this.goToSinistreList();
    }, error => console.log(error));
  }

  mapForm() {
    this.sinistre.numeroContrat = this.sinistreForm.value.numeroContrat;
    this.sinistre.dateAccident = this.sinistreForm.value.dateAccident;
    this.sinistre.dateCreation = this.sinistreForm.value.dateCreation;
    this.sinistre.statut = this.sinistreForm.value.statut;
  }

  goToSinistreList(){
    this.router.navigate(['/sinistres']);
  }
  
}

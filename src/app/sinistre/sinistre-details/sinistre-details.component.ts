import { Component, OnInit } from '@angular/core';
import { Sinistre } from '../../../models/Sinistre';
import { ActivatedRoute } from '@angular/router';
import { SinistreService } from '../../../services/sinistre.service';
import { ContratService } from 'src/services/contrat.service';
import { Contrat } from 'src/models/contrat';

@Component({
  selector: 'app-sinistre-details',
  templateUrl: './sinistre-details.component.html',
  styleUrls: ['./sinistre-details.component.css']
})
export class SinistreDetailsComponent implements OnInit {

  id!: number;
  sinistre!: Sinistre;
  contrat!: Contrat;
  active = 1;
  constructor(private route: ActivatedRoute, private sinistreService: SinistreService, private contratService: ContratService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sinistre = new Sinistre();
    this.contrat = new Contrat();
    this.sinistreService.getSinistreById(this.id).subscribe( data => {
      this.sinistre = data;
      console.log(this.sinistre)
      this.contratService.getContratById(this.sinistre.numeroContrat).subscribe(data => {
        this.contrat = data;
      });
    });
  }

}

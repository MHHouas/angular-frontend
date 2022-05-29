import { Component, OnInit } from '@angular/core';
import { Contrat } from '../../../models/contrat';
import { ActivatedRoute } from '@angular/router';
import { ContratService } from '../../../services/contrat.service';

@Component({
  selector: 'app-contrat-details',
  templateUrl: './contrat-details.component.html',
  styleUrls: ['./contrat-details.component.css']
})
export class ContratDetailsComponent implements OnInit {

  id!: number;
  contrat!: Contrat;
  constructor(private route: ActivatedRoute, private contratService: ContratService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.contrat = new Contrat();
    this.contratService.getContratById(this.id).subscribe( data => {
      this.contrat = data;
    });
  }

}

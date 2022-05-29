import { Component, OnInit } from '@angular/core';
import { Contrat } from '../../../models/contrat'
import { ContratService } from '../../../services/contrat.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-contrat-list',
  templateUrl: './contrat-list.component.html',
  styleUrls: ['./contrat-list.component.css']
})
export class ContratListComponent implements OnInit {

  contrats!: Contrat[];

  constructor(private contratService: ContratService,
    private router: Router) { }

  ngOnInit(): void {
    this.getContrats();
  }

  private getContrats(){
    this.contratService.getContratsList().subscribe(data => {
      this.contrats = data;
    });
  }

  contratDetails(id: number){
    this.router.navigate(['contrat-details', id]);
  }

  updateContrat(id: number){
    this.router.navigate(['update-contrat', id]);
  }

  deleteContrat(id: number){
    this.contratService.deleteContrat(id).subscribe( data => {
      console.log(data);
      this.getContrats();
    })
  }
}

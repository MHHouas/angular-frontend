import { Component, OnInit } from '@angular/core';
import { Sinistre } from '../../../models/Sinistre'
import { SinistreService } from '../../../services/sinistre.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sinistre-list',
  templateUrl: './sinistre-list.component.html',
  styleUrls: ['./sinistre-list.component.css']
})
export class SinistreListComponent implements OnInit {

  sinistres!: Sinistre[];

  constructor(private sinistreService: SinistreService,
    private router: Router) { }

  ngOnInit(): void {
    console.log ("ngoninit before");
    this.getSinistres();
    console.log ("ngoninit after");

  }

  private getSinistres(){
    this.sinistreService.getSinistresList().subscribe(data => {
      this.sinistres = data;
    });
  }

  sinistreDetails(id: number){
    this.router.navigate(['sinistre-details', id]);
  }

  updateSinistre(id: number){
    this.router.navigate(['update-sinistre', id]);
  }

  deleteSinistre(id: number){
    this.sinistreService.deleteSinistre(id).subscribe( data => {
      console.log(data);
      this.getSinistres();
    })
  }
}

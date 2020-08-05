import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(){
this.router.navigate(['pay/load/com'])
  }

}

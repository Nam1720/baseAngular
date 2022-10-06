import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-plan-year-action',
  templateUrl: './plan-month-action.component.html',
  styleUrls: ['./plan-month-action.component.scss']
})
export class PlanMonthActionComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onCreatePlanMonth(){
    this.router.navigate(['add'], {relativeTo: this.activatedRoute})
  }

}

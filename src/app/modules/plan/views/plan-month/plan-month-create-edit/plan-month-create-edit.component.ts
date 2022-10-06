import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PlanMonthService } from '../../../services/plan-month.service';

@Component({
  selector: 'app-plan-month-create-edit',
  templateUrl: './plan-month-create-edit.component.html',
  styleUrls: ['./plan-month-create-edit.component.scss'],
})
export class PlanMonthCreateEditComponent implements OnInit {
  activeIndex: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private fb: FormBuilder,
    private planMonthService: PlanMonthService
  ) {}

  ngOnInit(): void {}
}

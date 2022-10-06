import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import { forkJoin } from 'rxjs';
import { distinctUntilChanged, filter, map } from "rxjs/operators";
import { CommonService } from 'src/app/services/common.service';



// import "rxjs/add/operator/filter";
interface IBreadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-bread-crumb', 
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  dataSubcribe: any = null;
  public breadcrumbs: IBreadcrumb[];
  listBread: IBreadcrumb[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public commonService: CommonService
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.handleCurrentRoute()

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      // distinctUntilChanged()
    ).subscribe(
      (route: ActivatedRoute) => this.handleCurrentRoute()
    );
    
  }
  private handleCurrentRoute() {
    let root: ActivatedRoute = this.activatedRoute.root;
    this.breadcrumbs = this.getBreadcrumbs(root);
    
  }
  
  private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumbs";

    //get the child routes
    let children: ActivatedRoute[] = route.children;

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //each children
    for (let child of children) {   

      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      this.listBread = child.snapshot.data[ROUTE_DATA_BREADCRUMB];

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  };

  onChangePage (url: string): void {
    this.router.navigate([`/erp/${url}`]);
  }

}

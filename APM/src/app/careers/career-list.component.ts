import { Component, OnInit } from "@angular/core";
import { ICareer } from "./career-library";
import { CareerService } from "./career.service";

@Component({
    selector: 'pm-careers',
    templateUrl: './career-list.component.html',
    styleUrls: ['./career-list.component.css']
})

export class CareerListComponent implements OnInit {
  errorMessage: any;
  
  constructor(private careerService: CareerService){
  }

  performFilter(filterBy: string): ICareer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.careers.filter((career: ICareer) => 
      career.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

    pageTitle: string = 'Career List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;

    _listFilter: string;
    
    public get listFilter() : string {
      return this._listFilter;
    }
    
    public set listFilter(value : string) {
      this._listFilter = value;
      this.filteredCareers=this.listFilter? this.performFilter(this.listFilter) : this.careers;
    }

    onRatingClicked(message:string): void {
      this.pageTitle = 'Product List: ' + message;
    }

    careers: ICareer[] = [];

    filteredCareers: ICareer[];
    toggleImage(): void{
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.careerService.getCareers().subscribe(
        careers => {
          this.careers = careers;
          this.filteredCareers = this.careers;
      },
        error => this.errorMessage = <any>error
      );
    }
}
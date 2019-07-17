import { OnInit, Component } from "@angular/core";
import { ICareer } from "./career-library";

@Component({
    selector: 'pm-career-detail',
    templateUrl: './career-detail.component.html',
    styleUrls: ['./career-detail.component.css']
})

export class CareerDetailComponent implements OnInit{
    pageTitle: string = 'Career Detail';
    career: ICareer;
    
    constructor(){

    }
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
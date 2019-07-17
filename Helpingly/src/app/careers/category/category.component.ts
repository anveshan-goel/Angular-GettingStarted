import { Component } from "@angular/core";


@Component({
    selector: 'career-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})

export class CategoryComponent{
    categories = [
        {
            id: 1,
            name: 'Engineering',
            about: "Dummy data - section space is reserved to replace actual data. It is used as a placeholder for both testing and operational purposes"
        },
        {
            id: 2,
            name: 'Aviation',
            about: "Dummy data - section space is reserved to replace actual data. It is used as a placeholder for both testing and operational purposes"
        },
        {
            id: 3,
            name: 'Architecture',
            about: "Dummy data - section space is reserved to replace actual data. It is used as a placeholder for both testing and operational purposes"
        },
        {
            id: 4,
            name: 'Medicine',
            about: "Dummy data - section space is reserved to replace actual data. It is used as a placeholder for both testing and operational purposes"
        },
        {
            id: 5,
            name: 'Design',
            about: "Dummy data - section space is reserved to replace actual data. It is used as a placeholder for both testing and operational purposes"
        },
        {
            id: 6,
            name: 'Civil Services',
            about: "Dummy data - section space is reserved to replace actual data. It is used as a placeholder for both testing and operational purposes"
        },
        {
            id: 7,
            name: 'Performing Arts',
            about: "Dummy data - section space is reserved to replace actual data. It is used as a placeholder for both testing and operational purposes"
        },
        {
            id: 8,
            name: 'Management',
            about: "Dummy data - section space is reserved to replace actual data. It is used as a placeholder for both testing and operational purposes"
        },
        {
            id: 9,
            name: 'Physical Science',
            about: "Dummy data - section space is reserved to replace actual data. It is used as a placeholder for both testing and operational purposes"
        },
    ]
    ngOnInit(){
            
    }
}
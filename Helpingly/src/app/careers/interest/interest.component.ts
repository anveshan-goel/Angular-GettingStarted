import { Component } from "@angular/core";

@Component({
    selector: 'career-interest',
    templateUrl: './interest.component.html',
    styleUrls: ['./interest.component.css']
})

export class InterestComponent{
    interests = [
        {
            id: 1,
            name: 'Realistic',
            about: "Building jobs involve the use of tools, machines, or physical skill. Builders like working with their hands and bodies, working with plants and animals, and working outdoors."
        },
        {
            id: 2,
            name: 'Investigative',
            about: "Thinking jobs involve theory, research, and intellectual inquiry. Thinkers like working with ideas and concepts, and enjoy science, technology, and academia."
        },
        {
            id: 3,
            name: 'Artistic',
            about: "Creating jobs involve art, design, language, and self-expression. Creators like working in unstructured environments and producing something unique."
        },
        {
            id: 4,
            name: 'Social',
            about: "Helping jobs involve assisting, teaching, coaching, and serving other people. Helpers like working in cooperative environments to improve the lives of others."
        },
        {
            id: 5,
            name: 'Enterprising',
            about: "Persuading jobs involve leading, motivating, and influencing others. Persuaders like working in positions of power to make decisions and carry out projects."
        },
        {
            id: 6,
            name: 'Conventional',
            about: "Organizing jobs involve managing data, information, and processes. Organizers like to work in structured environments to complete tasks with precision and accuracy."
        }
    ]
    ngOnInit(){
            
    }
}
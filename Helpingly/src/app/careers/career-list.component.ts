import { Component } from "@angular/core";


@Component({
    selector: 'career-list',
    templateUrl: './career-list.component.html'
})

export class CareerListComponent{
    career = {
        careerId: 1,
        course: "Journalism",
        about: "Journalists collect and disseminate information to the public. Popular careers in this field include newspaper reporter, copywriter, editor, news anchor, columnist or public relations agent. Most employers require a bachelor's degree in journalism. Some major newspapers and magazines prefer to hire journalists with several years of experience or a master's degree.",
        degreeOffered: "BA in Journalism"
    }
}
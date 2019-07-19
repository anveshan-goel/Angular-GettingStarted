import { Component } from "@angular/core";

@Component({
    selector: 'career-list',
    templateUrl: './career-list.component.html',
    styleUrls: ['./career-list.component.css']
})

export class CareerListComponent{
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    }

    career = {
        careerId: 1,
        course: "Journalism",
        about: "Journalists collect and disseminate information to the public. Popular careers in this field include newspaper reporter, copywriter, editor, news anchor, columnist or public relations agent. Most employers require a bachelor's degree in journalism. Some major newspapers and magazines prefer to hire journalists with several years of experience or a master's degree.",
        degreeOffered: "BA in Journalism"
    }
}
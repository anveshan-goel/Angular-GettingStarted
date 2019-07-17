import { Component } from "@angular/core";


@Component({
    selector: 'career-stream',
    templateUrl: './stream.component.html',
    styleUrls: ['./stream.component.css']
})

export class StreamComponent{
    streams = [
        {
            id: 1,
            name: 'Arts & Humanities',
            about: "Subjects that come under the umbrella term of Humanities are history, languages, literature, law, philosophy, religion, performing arts, anthropology, communication, sociology, psychology and many more"
        },
        {
            id: 2,
            name: 'Commerce',
            about: "Subjects which are the building blocks of this stream are Business Studies and Accountancy. Courses for which students can apply in Commerce stream are B.Com, BBA, BMS, BBM, CFA, CA, ICWA, CFP etc"
        },
        {
            id: 3,
            name: 'Non-Medical (PCM)',
            about: "Students who have studied mathematics can opt for engineering courses or B.Sc in any of the science subjects except biology"
        },
        {
            id: 4,
            name: 'Medical Stream (PCB)',
            about: "Students opting for Science stream with Biology are either eligible for Medical Professional Courses like M.B.B.S, B.A.M.S or B.H.M.S or can opt for B.Sc in Biology or Chemistry"
        },
    ]
    ngOnInit(){
            
    }
}
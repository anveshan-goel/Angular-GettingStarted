import { Injectable } from '@angular/core'

@Injectable()
export class InterestService {
    getEvents(){
        return INTERESTS
    }
    getEvent(id:number){
        return INTERESTS.find(interests => interests.id ===id)
    }
}

const INTERESTS = []
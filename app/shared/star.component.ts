import {Component, OnChanges, Input, Output, EventEmitter} from 'angular2/core';

@Component({    
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingclicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void{
        this.starWidth = this.rating * 86 /5
    }
    
    onClick(){
        this.ratingclicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
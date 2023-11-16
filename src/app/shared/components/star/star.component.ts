import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})

export class StarComponent {
  cropWidth: number = 75
  @Input() rating: number = 0
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    this.cropWidth = this.rating * 75/5
  }

  onClick(): void {
    this.ratingClicked.emit(`The product raiting is ${this.rating}`)
  }
}

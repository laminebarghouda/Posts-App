import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  
  @Input() title:string;
  @Input() body: string;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator', {static: true}) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText', {static: true}) bodyText: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewbleHeight = parseInt(style.getPropertyValue("height"), 10);

    if(this.bodyText.nativeElement.scrollHeight > viewbleHeight){
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }


  onXButtonClick() {
    this.deleteEvent.emit();
  }

}

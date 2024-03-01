import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent implements OnInit {
  @Input() id: string = '0';
  @Input() photoCover: string = '';
  @Input() cardDescription: string = '';

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent implements OnInit {
  @Input() id: string = '0';
  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';

  ngOnInit(): void {}
}

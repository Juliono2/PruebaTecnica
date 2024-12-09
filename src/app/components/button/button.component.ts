import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button
      [ngStyle]="{
        '--background-color': backgroundColor,
        '--color': textColor,
        '--hover-bg-color': hoverBgColor,
        '--hover-txt-color': hoverTxtColor
      }"
      (click)="onClick()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() backgroundColor: string = ''; // Color de fondo
  @Input() textColor: string = ''; 
  @Input() hoverBgColor: string = '#2980b9';
  @Input() hoverTxtColor: string = '#ecf0f1';

  @Input() icon?: string;
  @Output() buttonClick = new EventEmitter<void>();
  isHovering = false;

  onClick() {
    this.buttonClick.emit();
  }
}

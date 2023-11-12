import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CabinetButtonDisplayType } from './models/cabinet-button.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cabinet-button',
  templateUrl: './cabinet-button.component.html',
  styleUrls: ['./cabinet-button.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class CabinetButtonComponent {
  @Input() disabled: boolean = false;

  @Input() type: string = 'button';

  @Input() displayType: CabinetButtonDisplayType = 'primary';

  @Output() onClick = new EventEmitter<MouseEvent>();

  onButtonClick(event: MouseEvent) {
    this.onClick.emit(event);
  }

  get buttonClass(): string {
    return `cabinet-button--${this.displayType}`;
  }
}

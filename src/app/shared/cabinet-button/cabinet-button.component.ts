import { Component, Input } from '@angular/core';
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

  get buttonClass(): { [key: string]: boolean } {
    return {
      'cabinet-button--primary': this.displayType === 'primary',
      'cabinet-button--secondary': this.displayType === 'secondary',
    };
  }
}

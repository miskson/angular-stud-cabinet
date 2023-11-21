import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabinet-input',
  templateUrl: './cabinet-input.component.html',
  styleUrls: ['./cabinet-input.component.scss'],
  imports: [NgClass, ReactiveFormsModule],
  standalone: true,
})
export class CabinetInputComponent {
  @Input() labelText: string = '';

  @Input() disabled: boolean = false;

  @Input() type: string = 'text';

  @Input() placeholder: string = '';

  @Input() inputId: string = window.crypto.randomUUID();

  @Input() control: FormControl = new FormControl();

  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

  onChange!: (value: any) => void;

  onTouched!: () => void;

  inputValue: string = '';
}

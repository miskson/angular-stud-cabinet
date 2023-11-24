import { NgFor, NgClass, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabinet-input',
  templateUrl: './cabinet-input.component.html',
  styleUrls: ['./cabinet-input.component.scss'],
  imports: [
    NgClass,
    NgFor,
    CommonModule,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class CabinetInputComponent {
  @Input() labelText: string = '';

  @Input() disabled: boolean = false;

  @Input() type: 'text' | 'password' | 'email' = 'text';

  @Input() hidden: boolean = true;

  @Input() placeholder: string = '';

  @Input() inputId: string = window.crypto.randomUUID();

  @Input() control: FormControl = new FormControl();

  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

  onChange!: (value: any) => void;

  onTouched!: () => void;

  inputValue: string = '';

  initialType: string = '';

  errorMessages: Record<string, string> = {
    required: 'This field is required.',
    email: 'The email is invalid.',
  };

  togglePasswordReveal() {
    this.hidden = !this.hidden;
    this.hidden ? (this.type = 'password') : (this.type = 'text');
  }

  ngOnInit(): void {
    this.initialType = this.type;
  }
}

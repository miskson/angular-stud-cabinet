import { Component } from '@angular/core';
import { StudentPayment } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
})
export class PaymentPageComponent {
  constructor(private dataService: DataService) {}

  data: StudentPayment[] | [] = [];
  email: string | null = sessionStorage.getItem('email');

  getStudentPaymentsByEmail(email: string) {
    this.dataService.getStudentPaymentInfoByEmail(email as string).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getStudentPaymentsByEmail(this.email as string);
  }
}

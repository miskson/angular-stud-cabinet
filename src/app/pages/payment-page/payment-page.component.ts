import { Component } from '@angular/core';
import { SortTypes, StudentPayment } from 'src/app/interfaces/data';
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

  sortType: SortTypes = 'desc';

  toggleSortTypeAndSort(): void {
    this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
    this.getStudentPaymentsByEmail(this.email as string, this.sortType);
  }

  getStudentPaymentsByEmail(email: string, sort: SortTypes = 'desc') {
    this.dataService.getStudentPaymentInfoByEmail(email as string, sort).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getStudentPaymentsByEmail(this.email as string, this.sortType);
  }
}

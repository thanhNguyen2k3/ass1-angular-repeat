import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { IProduct } from 'src/interfaces/Product';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    products: IProduct[] = [];

    constructor(private http: ProductServiceService) {
        this.http.getData().subscribe((data) => {
            this.products = data;
        });
    }

    handleRemove(id: any) {
        this.http.remove(id).subscribe(() => {
            this.products.filter((item) => item.id !== id);
        });
    }
}

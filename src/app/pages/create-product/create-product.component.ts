import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { IProduct } from 'src/interfaces/Product';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
    constructor(private productService: ProductServiceService) {}

    product: IProduct = {
        title: '',
        description: '',
        price: 0,
    };

    onHandleSubmit() {
        this.productService.create(this.product).subscribe((product) => {
            console.log(product);
        });
    }
}

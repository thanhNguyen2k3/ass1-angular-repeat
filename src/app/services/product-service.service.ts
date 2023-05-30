import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProduct } from 'src/interfaces/Product';

@Injectable({
    providedIn: 'root',
})
export class ProductServiceService {
    constructor(private http: HttpClient) {}

    products: IProduct[] = [];

    getData(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('http://localhost:3000/products');
    }

    getbyID(product: IProduct): Observable<IProduct> {
        return this.http.get<IProduct>(`http://localhost:3000/products/${product.id}`);
    }

    create(products: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('http://localhost:3000/products', products);
    }

    remove(id: any): Observable<IProduct> {
        return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`);
    }
}

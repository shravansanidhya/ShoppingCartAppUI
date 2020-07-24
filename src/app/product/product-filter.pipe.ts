import { PipeTransform, Pipe } from '@angular/core';
import { Product } from '../product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(productList: Product[],searchTerm: string) :Product[] {
        if(!productList || !searchTerm) {
            return productList;
        }
        return productList.filter(product =>
            product.productName.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}

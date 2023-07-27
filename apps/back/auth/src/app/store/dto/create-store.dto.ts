import { IsNotEmpty } from "class-validator"
import { Product } from "../../product/entity/product.entity";

export class CreateStoreDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    products: Product[];

    @IsNotEmpty()
    adress: string;
}

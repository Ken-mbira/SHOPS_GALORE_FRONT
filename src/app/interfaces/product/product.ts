import { Brand } from "../brand/brand";
import { Shop } from "../shop/shop";
import { Type } from "../type/type";

export interface Product {
    id:number;
    name:string;
    added_on:Date;
    description:string;
    price:string;
    discount_price:string;
    volume:number;
    weight:string;
    sku:string;
    brand:Brand;
    category:number;
    type:Type;
    owner:Shop;
    parent?:number;
    children?:Product;
    product_images:string[];
}

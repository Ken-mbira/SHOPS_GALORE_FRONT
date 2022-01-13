import { Brand } from "../brand/brand";
import { Shop } from "../shop/shop";
import { Type } from "../type/type";
import { Category } from "../category/category";

export interface Product {
    id:number;
    name:string;
    added_on:Date;
    description:string;
    price:string;
    discount_price:string;
    volume:"";
    weight:string;
    sku:string;
    brand:Brand;
    category:Category;
    type:Type;
    owner:Shop;
    parent?:number;
    children?:Product;
    product_images:string[];
}

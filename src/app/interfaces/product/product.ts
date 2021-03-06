import { Brand } from "../brand/brand";
import { Shop } from "../shop/shop";
import { Type } from "../type/type";
import { Category } from "../category/category";
import { Image } from "../image/image";

export interface Product {
    id:number;
    sku:string;
    name:string;
    added_on:Date;
    description:string;
    price:string;
    discount_price:string;
    volume:string;
    weight:string;
    brand:Brand;
    category:Category;
    type:Type;
    owner:Shop;
    parent?:number;
    children?:Product[];
    product_images:Image[];
    featured_image?:Image;
}

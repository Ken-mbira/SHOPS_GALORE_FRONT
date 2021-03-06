import { Location } from "../location/location";
export interface Shop {
    id:number,
    name:string,
    bio:string,
    created_on:Date,
    logo?:string,
    phone_contact?:string,
    email_contact?:string,
    active:boolean;
    owner:number;
    product_count?:number;
    shop_pickup_location?:Location;
}

export interface Shop {
    id:number,
    name:string,
    bio:string,
    created_on:Date,
    logo:string,
    phone_contact:string,
    email_contact:string,
    subscription_end_date:Date,
    active:boolean;
    owner:number;
    products:number
}

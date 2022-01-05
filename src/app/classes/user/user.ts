import { Role } from "../role/role";

export class User {
    constructor(public email:string,public role:Role,public first_name:string,public last_name:string,public member_since:Date,public phone_number:string,public bio:string,public location:string,public avatar:string,public gender:string,public receive_notifications_via_email:boolean){}
}

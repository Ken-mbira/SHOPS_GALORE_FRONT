import {DeliveryMeans} from '../means/delivery-means';

export interface RegisteredMeans {
    id:number,
    owner:number,
    means:DeliveryMeans,
    image:string,
    max_weight:number,
    max_volume:number,
    active:boolean
}

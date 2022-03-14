import { Location } from '../location/location';
import { RegisteredMeans } from './../registered-means/registered-means';

export interface Destination {
    id:number,
    registered_means:RegisteredMeans,
    from_location:Location,
    to_location:Location,
    price:number
}

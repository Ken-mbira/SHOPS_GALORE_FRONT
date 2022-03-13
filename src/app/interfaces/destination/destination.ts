import { Location } from '../location/location';
import { RegisteredMeans } from './../registered-means/registered-means';

export interface Destination {
    id:number,
    means:RegisteredMeans,
    location_from:Location,
    location_to:Location,
    price:number
}

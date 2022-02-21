import {Injectable} from '@angular/core';
import {DisplayType} from "../enums/display-type";
import {catchError, filter, find, map, Observable, of, throwIfEmpty} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(type: DisplayType): Observable<Product[]> {
    return of(getData(type));
  }


  // todo error handling http
  getProductById(id: number): Observable<Product | undefined> {
    return of(getData(DisplayType.ALL)).pipe(map(data => {

      for (let val of data) {
        console.log(val.id + 'z ' + id + 'z')
        if (val.id === id) {
          console.log('jest');
        } else {
          console.log('nie ma')
        }
      }

      return data[0]
    }));
  }
}

// todo zrobic backend
export function getData(type: DisplayType): Product[] {
  if (type === DisplayType.PROMOTED) {
    return dataAll.filter(product => product.isPromoted);
  } else {
    return dataAll;
  }
}

const dataAll: Product[] = [
  {
    id: 1,
    header: 'auto',
    description: 'fajne',
    imageUrl: 'https://picsum.photos/200/300',
    isPromoted: false,
  },
  {
    id: 2,
    header: 'telefon',
    description: 'super',
    imageUrl: 'https://picsum.photos/200/300',
    isPromoted: false,
  },
  {
    id: 2,
    header: 'telefon',
    description: 'super',
    imageUrl: 'https://picsum.photos/200/300',
    isPromoted: false,
  },
  {
    id: 3,
    header: 'czajnik',
    description: 'super',
    imageUrl: 'https://picsum.photos/200/300',
    isPromoted: true,
  },
  {
    id: 4,
    header: 'kalwiatura',
    description: 'cool',
    imageUrl: 'https://picsum.photos/200/300',
    isPromoted: false,
  },
  {
    id: 5,
    header: 'kubek',
    description: 'super',
    imageUrl: 'https://picsum.photos/200/300',
    isPromoted: true,
  },
];

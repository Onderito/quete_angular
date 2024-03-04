import { Component } from '@angular/core';
import { Product } from '../models/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Favorite } from '../models/product';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  favorites: Favorite[] = [
    {
      id: 1,
      name: 'Produit 1',
    },
    {
      id: 2,
      name: 'Produit 2',
    },
  ];

  // array est un tableau de favoris et newFavorite est un nouvel objet de type Favorite
  addToFavorites(array: Favorite[], newFavorite: Favorite) {
    const foundFavorite = array.find((fav) => fav.id === newFavorite.id);

    if (foundFavorite) {
      console.log('This product is already in your favorites');
    } else {
      array.push(newFavorite);
      console.log('Product added to your favorites');
    }
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      promo: false,
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      promo: true,
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      promo: false,
    },
    {
      id: 4,
      name: 'Phone Special',
      price: undefined,
      promo: false,
    },
    {
      id: 5,
      name: 'Phone Plus',
      price: undefined,
      promo: false,
    },
    {
      id: 6,
      name: 'Phone Pro',
      price: 599,
      promo: true,
    },
  ];
}

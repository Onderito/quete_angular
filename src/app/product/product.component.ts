import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  article = [
    {
      picture: 'https://via.placeholder.com/150',
      title: 'Product 1',
      description: 'This is a product description.',
      button: 'Show details',
    },
    {
      picture: 'https://via.placeholder.com/150',
      title: 'Product 2',
      description: 'This is another product description.',
      button: 'Show details',
    },
    {
      picture: 'https://via.placeholder.com/150',
      title: 'Product 3',
      description: 'This is a product description.',
      button: 'Show details',
    },
    {
      picture: 'https://via.placeholder.com/150',
      title: 'Product 4',
      description: 'This is another product description.',
      button: 'Show details',
    },
    {
      picture: 'https://via.placeholder.com/150',
      title: 'Product 5',
      description: 'This is a product description.',
      button: 'Show details',
    },
    {
      picture: 'https://via.placeholder.com/150',
      title: 'Product 6',
      description: 'This is another product description.',
      button: 'Show details',
    },
  ];
}

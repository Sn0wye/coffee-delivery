import create from 'zustand';

import { Coffee } from '../data/coffee';

interface Product extends Coffee {
  quantity: number;
}

interface ContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: Product['id']) => void;
  changeQuantityById: (
    productId: Product['id'],
    action: 'increase' | 'decrease'
  ) => void;
  total: {
    items: number;
    value: number;
  };
}

export const useCart = create<ContextType>((set, get) => ({
  products: [],
  total: {
    items: 0,
    value: 0
  },
  addProduct: product => {
    const previousProduct = get().products.find(p => p.id === product.id);

    if (previousProduct) {
      const arrayWithoutProductToBeAdded: Product[] = get().products.filter(
        p => p.id !== product.id
      );

      set(() => ({
        products: [
          ...arrayWithoutProductToBeAdded,
          {
            ...previousProduct,
            quantity: previousProduct.quantity + product.quantity
          }
        ]
      }));

      set(state => ({
        total: state.products.reduce(
          (total, acc) => {
            return {
              items: acc.quantity + total.items,
              value: acc.price * acc.quantity + total.value
            };
          },
          {
            items: 0,
            value: 0
          }
        )
      }));
      return;
    }

    set(state => ({
      products: [...state.products, product]
    }));

    set(state => ({
      total: state.products.reduce(
        (total, acc) => {
          return {
            items: acc.quantity + total.items,
            value: acc.price * acc.quantity + total.value
          };
        },
        {
          items: 0,
          value: 0
        }
      )
    }));
  },
  removeProduct: productId => {
    const newProductsArray = get().products.filter(
      product => product.id !== productId
    );
    set(() => ({
      products: newProductsArray
    }));

    set(state => ({
      total: state.products.reduce(
        (total, acc) => {
          return {
            items: acc.quantity + total.items,
            value: acc.price * acc.quantity + total.value
          };
        },
        {
          items: 0,
          value: 0
        }
      )
    }));
  },

  changeQuantityById: (productId, action) => {
    let operation: number;

    if (action === 'increase') {
      operation = 1;
    }
    if (action === 'decrease') {
      operation = -1;
    }

    const product = get().products.find(p => p.id === productId);

    if (product && action === 'decrease' && product.quantity === 1) return;

    const arrayWithoutProductToBeUpdated: Product[] = get().products.filter(
      p => p.id !== productId
    );

    if (product) {
      set(state => ({
        products: [
          ...arrayWithoutProductToBeUpdated,
          {
            ...product,
            quantity: product.quantity + operation
          }
        ]
      }));

      set(state => ({
        total: state.products.reduce(
          (total, acc) => {
            return {
              items: acc.quantity + total.items,
              value: acc.price * acc.quantity + total.value
            };
          },
          {
            items: 0,
            value: 0
          }
        )
      }));
    }
  }
}));

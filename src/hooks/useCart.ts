import create from 'zustand';
import { Coffee } from '../data/coffee';

interface Product extends Coffee {
  quantity: number;
}

interface ContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: Product['id']) => void;
  total: {
    items: number;
    value: number;
  };
}

export const useCart = create<ContextType>((set, get) => ({
  products: [],
  total: {
    items: 0,
    value: 0,
  },
  addProduct: (product) => {
    const previousProduct = get().products.find((p) => p.id === product.id);

    if (previousProduct) {
      const arrayWithoutProductToBeAdded: Product[] = get().products.filter(
        (p) => p.id !== product.id
      );

      set((state) => ({
        products: [
          ...arrayWithoutProductToBeAdded,
          {
            ...previousProduct,
            quantity: previousProduct.quantity + product.quantity,
          },
        ],
        total: state.products.reduce(
          (total, acc) => {
            return {
              items: acc.quantity + total.items,
              value: acc.price * acc.quantity + total.value,
            };
          },
          {
            items: 0,
            value: 0,
          }
        ),
      }));
      return;
    }

    set((state) => ({
      products: [...state.products, product],
      total: state.products.reduce(
        (total, acc) => {
          return {
            items: acc.quantity + total.items,
            value: acc.price * acc.quantity + total.value,
          };
        },
        {
          items: 0,
          value: 0,
        }
      ),
    }));
  },
  removeProduct: (productId) => {
    const newProductsArray = get().products.filter(
      (product) => product.id !== productId
    );
    set((state) => ({
      products: newProductsArray,
      total: state.products.reduce(
        (total, acc) => {
          return {
            items: acc.quantity + total.items,
            value: acc.price * acc.quantity + total.value,
          };
        },
        {
          items: 0,
          value: 0,
        }
      ),
    }));
  },
}));

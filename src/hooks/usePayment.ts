/* eslint-disable no-unused-vars */
import create from 'zustand';

interface Address {
  zip: number;
  street: string;
  number: number;
  compliment?: string;
  neighbourhood: string;
  city: string;
  state: string;
}

export enum PaymentMethod {
  CREDIT = 'credit',
  DEBIT = 'debit',
  CASH = 'cash',
}

interface PaymentContextType {
  paymentMethod: PaymentMethod;
  address: Address | null;
  setAddress: (address: Address) => void;
  setPaymentMethod: (paymentMethod: PaymentMethod) => void;
}

export const usePayment = create<PaymentContextType>((set) => ({
  paymentMethod: PaymentMethod.CASH,
  address: null,
  setAddress: (address) => {
    set(() => ({
      address,
    }));
  },
  setPaymentMethod: (paymentMethod) => {
    set(() => ({ paymentMethod }));
  },
}));

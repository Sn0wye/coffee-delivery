import americanExpressoImg from '../assets/coffees/american-expresso.png';
import arabImg from '../assets/coffees/arab.png';
import capuccinoImg from '../assets/coffees/capuccino.png';
import coldExpressoImg from '../assets/coffees/cold-expresso.png';
import creamyExpressImg from '../assets/coffees/creamy-expresso.png';
import cubanImg from '../assets/coffees/cuban.png';
import expressoImg from '../assets/coffees/expresso.png';
import havaianImg from '../assets/coffees/havaian.png';
import hotChocolateImg from '../assets/coffees/hot-chocolate.png';
import irishImg from '../assets/coffees/irish.png';
import latteImg from '../assets/coffees/latte.png';
import machiattoImg from '../assets/coffees/machiatto.png';
import milkCoffeImg from '../assets/coffees/milk-coffee.png';
import mocaccinoImg from '../assets/coffees/mocaccino.png';

export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
}

export const coffeeOptions: Coffee[] = [
  {
    id: '1d170049-6d9c-49ea-b4ad-4b4b95a47a8e',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['Tradicional'],
    image: expressoImg
  },
  {
    id: '8e244e95-bc6b-40de-a429-c7fe09479997',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['Tradicional'],
    image: americanExpressoImg
  },
  {
    id: '444a341d-6b19-447c-a1b2-f2c708f5089c',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['Tradicional'],
    image: creamyExpressImg
  },
  {
    id: '98760771-86bf-4ad2-add0-f828d622456c',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['Tradicional', 'Gelado'],
    image: coldExpressoImg
  },
  {
    id: 'f57b1942-c4c9-46e6-86e6-f54a584341f2',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: milkCoffeImg
  },
  {
    id: '4e10da57-a2c1-424a-8494-c11409335c0d',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: latteImg
  },
  {
    id: '56e5561a-f06f-401e-bae6-e50863e72617',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: capuccinoImg
  },
  {
    id: 'b81e410d-394e-4662-a900-d767d45d091c',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: machiattoImg
  },
  {
    id: '52faa9b4-31d9-48fb-865d-6e2072552bca',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: mocaccinoImg
  },
  {
    id: '40cdd39a-51b0-4a7a-a6aa-d83c27b8ad44',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['Especial', 'Com leite'],
    image: hotChocolateImg
  },
  {
    id: '64aff228-c6d0-4f2e-b6c7-cd1bc25237c3',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    image: cubanImg
  },
  {
    id: 'aebbaed1-7886-4242-ae5f-74160499c5dc',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['Especial'],
    image: havaianImg
  },
  {
    id: 'def6a1e8-2a7a-4fc9-ae5e-94487da30b21',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['Especial'],
    image: arabImg
  },
  {
    id: '40b6701c-007a-4731-b2b4-4b0dbea7862d',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['Especial', 'Alcoólico'],
    image: irishImg
  }
];

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

interface Coffee {
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
}

export const coffeeOptions: Coffee[] = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['Tradicional'],
    image: expressoImg,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['Tradicional'],
    image: americanExpressoImg,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['Tradicional'],
    image: creamyExpressImg,
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['Tradicional', 'Gelado'],
    image: coldExpressoImg,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: milkCoffeImg,
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: latteImg,
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: capuccinoImg,
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: machiattoImg,
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: mocaccinoImg,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['Especial', 'Com leite'],
    image: hotChocolateImg,
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    image: cubanImg,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['Especial'],
    image: havaianImg,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['Especial'],
    image: arabImg,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['Especial', 'Alcoólico'],
    image: irishImg,
  },
];

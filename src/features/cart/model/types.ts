export interface CartItem {
  id: number | string;
  title: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  loadingItems: (number | string)[];
}

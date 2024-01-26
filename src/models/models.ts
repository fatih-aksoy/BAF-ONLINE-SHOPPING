export type EventFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

// ! 1
export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// ! 2
export type VoidFunc = (product: Product) => void;

// ! burayi niye actik? global olarak kullanilan type lari burada belirtebilirim.

// ! sonra Home kismina gideriz yoruma alicagimiz kisimlari yoruma aliriz. hemen 1 e gecme

// ! 1 - interface i yapistirir ve hemen productsSlice sayfasina gideriz.

// ! productsSlice dan geldikten sonra export interface Product {}  ti yapistiririz. kopyaladiklarmizi import etmeyi unutmayalim. bunu yapamizin amaci clean code yazmaktir. tek bir yerden yonetmek her zaman daha iyidir. 2. MADDE YE SIMDI GECME

// !

export type CarouselImageData = {
  image: string;
  description: string;
};

export type CarouselKey = {
  [key: string]: CarouselImageData;
};

export type Dish = {
  id: number;
  dishName: string[];
  description: string[];
  image: string[];
  type: string[];
  price: number[];
};

export type MenuId = {
  id: string;
  heading: string;
  ns: string;
};

export type MenuItem = {
  id: string;
  heading: string;
  ns: string;
  component: React.FC<{ id: string; heading: string; ns: string }>;
};

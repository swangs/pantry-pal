class Recipe {
  id: number;
  title: string;
  image: string;
  instructions: string;
}

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: 'fried rice',
    image: 'http://www.seriouseats.com/recipes/images/2016/01/20160206-fried-rice-food-lab-68-1500x1125.jpg',
    instructions: 'fry everything together',
    test: "random",
    test2: "asdf",
  },
  {
    id: 2,
    title: 'omelet',
    image: 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/basic-french-omelet-930x550.jpg',
    instructions: 'crack an egg, cook it'
  },
  {
    id: 3,
    title: 'french fries',
    image: 'https://smittenkitchendotcom.files.wordpress.com/2017/03/easier-french-fries.jpg?w=750',
    instructions: 'slice potato, throw it in oil'
  },
  {
    id: 4,
    title: 'onion rings',
    image: 'https://www.mylatinatable.com/wp-content/uploads/2016/01/foto-heroe-1024x693-1-1024x693.jpg',
    instructions: 'cover onion in batter, throw it in oil'
  },
  {
    id: 5,
    title: 'applsauce',
    image: 'https://www.simplyrecipes.com/wp-content/uploads/2014/10/applesauce-horiz-a2-2000.jpg',
    instructions: 'mash apples'
  },
];

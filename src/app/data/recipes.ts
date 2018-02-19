class Recipes {
  id: number,
  name: string,
  imageUrl: string,
  directions: string,

}

export const RECIPES: Recipes[] = [
  {
    id: 1,
    name: 'fried rice',
    imageUrl: 'http://www.seriouseats.com/recipes/images/2016/01/20160206-fried-rice-food-lab-68-1500x1125.jpg',
    directions: 'fry everything together'
  },
  {
    id: 2,
    name: 'omelet',
    imageUrl: 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/basic-french-omelet-930x550.jpg',
    directions: 'crack an egg, cook it'
  },
  {
    id: 3,
    name: 'french fries',
    imageUrl: 'https://smittenkitchendotcom.files.wordpress.com/2017/03/easier-french-fries.jpg?w=750',
    directions: 'slice potato, throw it in oil'
  },
  {
    id: 4,
    name: 'onion rings',
    imageUrl: 'https://www.mylatinatable.com/wp-content/uploads/2016/01/foto-heroe-1024x693-1-1024x693.jpg',
    directions: 'cover onion in batter, throw it in oil'
  },
  {
    id: 5,
    name: 'applsauce',
    imageUrl: 'https://www.simplyrecipes.com/wp-content/uploads/2014/10/applesauce-horiz-a2-2000.jpg',
    directions: 'mash apples'
  },
];

import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
  new Country("c1", "Italy", "#f94144"),
  new Country("c2", "France", "#f3722c"), 
  new Country("c3", "Spain", "#f8961e"), 
  new Country("c4", "Germany", "#f9844a"), 
  new Country("c5", "Switzerland", "#f9c74f"), 
  new Country("c6", "Sweden", "#90be6d"), 
  new Country("c7", "Finland", "#43aa8b"), 
  new Country("c8", "The Netherlands", "#4d908e"),
  new Country("c9", "Portugal", "#577590"), 
  new Country("c10", "Greece", "#277da1"),
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Uffizi Gallery",
    "$11",
    1769,
    4.5,
    "https://media.cntraveler.com/photos/603fc707b6e78d139fb895e1/16:9/w_1280,c_limit/Uffizi%20Museum-2C1GR6T-2.jpg"
  ),
  new Destination(
    "d2",
    "c2",
    "Eiffel Tower",
    "$10",
    1887,
    4.4,
    "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"
  ),
  new Destination(
    "d3",
    "c3",
    "Plaza de Espana",
    "Free",
    1929,
    5,
    "https://sevillecityguide.com/images/plaza-de-espana.jpg"
  ),
  new Destination(
    "d4",
    "c4",
    "Cologne Cathedral",
    "$7",
    1248,
    4.5,
    "https://www.aesu.com/wp-content/uploads/2020/03/europe-4272297_640.jpg"
  ),
  new Destination(
    "d5",
    "c5",
    "Rhine Falls",
    "$6",
    1887,
    4.5,
    "https://switzerland-tour.com/storage/media/Rhine%20Falls/Rhine-Falls-in-Switzerland.jpg"
  ),
  new Destination(
    "d6",
    "c6",
    "Abba Museum",
    "$25",
    2013,
    4.5,
    "https://www.city-guide-stockholm.com/_bibli/annonces/455/hd/abba-museum-03.jpg"
  ),
  new Destination(
    "d7",
    "c7",
    "Ranua Zoo",
    "$26",
    1982,
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/9c/cc/5e/caption.jpg?w=1200&h=-1&s=1"
  ),
  new Destination(
    "d8",
    "c8",
    "Van Gogh Museum",
    "$11",
    1973,
    4.5,
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/33/16/12.jpg"
  ),
  new Destination(
    "d9",
    "c9",
    "Pena Palace",
    "$14",
    1839,
    4.5,
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Pena_National_Palace_-_Sintra_-_Pal%C3%A1cio_Nacional_da_Pena_%2815842491914%29_%28cropped%29.jpg"
  ),
  new Destination(
    "d10",
    "c10",
    "Acropolis of Athens",
    "$21",
    "5th Century BC",
    4.5,
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg"
  ),
  new Destination(
    "d11",
    "c1",
    "Trevi Fountain",
    "Free",
    1762,
    4.5,
    "https://www.travelandleisure.com/thmb/CKxA_iBAtx1zYw_7EevV4cuxgH0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/trevi-fountain-rome-italy-TREVI0217-4b6f7385c7f0436ba3d5fa2c061a1791.jpg"
  ),
  new Destination(
    "d12",
    "c2",
    "Notre Dame",
    "$11",
    1345,
    4.5,
    "https://a.cdn-hotels.com/gdcs/production65/d694/a64cb752-6ef4-4aa7-b215-e4641d10b6fb.jpg?impolicy=fcrop&w=800&h=533&q=medium"
  ),
  new Destination(
    "d13",
    "c3",
    "La Pedrera-Casa Milà",
    "$44",
    1912,
    4.5,
    "https://cdn-imgix.headout.com/media/images/9ba6c7208f8614f6df6c0b223e964d95-Casa%20Mila.jpg"
  ),
  new Destination(
    "d14",
    "c4",
    "Neuschwanstein Castle",
    "$19",
    1869,
    4.4,
    "https://www.travelandleisure.com/thmb/umcoSMJygYyG5OIYDdBPgnrJGLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01-neuschwanstein-castle-bavaria-NEUSCHWANSTEIN0417-273a040698f24fc1ac22e717bb3f1f0c.jpg"
  ),
  new Destination(
    "d15",
    "c5",
    "Chapel Bridge",
    "Free",
    1333,
    4.5,
    "https://switzerland-tour.com/storage/media/Lucerne/Chapel-Bridge-%20in-Lucerne-Switzerland.jpg"
  ),
  new Destination(
    "d16",
    "c6",
    "Skansen",
    "$20",
    1891,
    4.5,
    "https://www.travellector.com/wp-content/uploads/2014/07/skansen-entrance-600x400.jpg"
  ),
  new Destination(
    "d17",
    "c7",
    "Arktikum",
    "$19",
    1992,
    4.0,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/f7/97/d5/arktikum.jpg?w=1200&h=-1&s=1"
  ),
  new Destination(
    "d18",
    "c8",
    "Anne Frank House",
    "$18",
    1957,
    4.4,
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg"
  ),
  new Destination(
    "d19",
    "c9",
    "Jerónimos Monastery",
    "$11",
    1495,
    4.5,
    "https://www.historyhit.com/app/uploads/2020/11/Jeronimos-Monastery.jpg"
  ),
  new Destination(
    "d20",
    "c10",
    "Parthenon",
    "$14",
    "447BCE",
    4.4,
    "https://www.greece-is.com/wp-content/uploads/2021/12/shutterstock_259025507_ACROPOLIS.jpeg"
  ),
];

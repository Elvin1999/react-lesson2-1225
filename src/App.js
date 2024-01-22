import './App.css';
import Info from './Info';
import Item from './Item';
import Product from './Product';
import Profile from './Profile';
import Todo from './Todo';
import UserImage from './UserImage';

const person={
  name:"Elvin",
  surname:"Camalzade",
  age:25,
  avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
};

const products=[
  {
    name:"Apple",
    price:1200.5,
    avatar:"https://www.maplestore.in/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN_43b0347b-c716-4297-b1d4-a15af53ad270_823x.jpg?v=1701815316"
  },
  {
    name:"Samsung",
    price:1800.5,
    avatar:"https://m.media-amazon.com/images/I/813sVzTfvaL.jpg"
  },
  {
    name:"Acer Rog",
    price:5500.5,
    avatar:"https://dlcdnwebimgs.asus.com/gain/868C3307-DD02-4624-8BA7-31B62EE4A38F/w240/h175"
  }
];

function App() {
  return (
    <div className="App">
     {/* <Todo></Todo> */}
     {/* <Profile></Profile> */}
     {/* <Item></Item> */}
     {/* <UserImage name={person.name} avatar={person.avatar} ></UserImage> */}
     {/* <Info person={person}></Info> */}
     {/* <Product size={100} product={products[0]}></Product>
     <Product size={100} product={products[1]}></Product>
     <Product size={100} product={products[2]}></Product> */}
     { 
     products.map((p)=>
       ( <Product size={100} product={p}></Product> )
      )
     }
    </div>
  );
}

export default App;

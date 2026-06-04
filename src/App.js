import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import car from "./assets/car.avif";
import city from "./assets/city.avif";
import night from "./assets/night.avif";
import travel from "./assets/travel.avif";

let bannerHeader = "Welcome To The Biggest Luxury Agency";
let bannerText = "Luxury Agency is the biggest agency that deals with sourcing for and trading luxurious items in Canada ranging from Cars, Houses, Views, Wears, Travel Destinations to Meals that can't be easily sourced for anywhere around the globe."

const navLinks = [
    {index: 0, name: 'About', url: '#'},
    {index: 1, name: 'Blogs', url: '#'},
    {index: 2, name: 'Team', url: '#'},
    {index: 3, name: 'Contact', url: '#'},
]
const imageLinks = [
    {index: 0, name: 'Car', url: car},
    {index: 1, name: 'City', url: city},
    {index: 2, name: 'Night', url: night},
    {index: 3, name: 'Travel', url: travel},
]

const buttonText = [
  {index: 0, text: 'Learn More', className: 'primary'},
  {index: 1, text: 'About', className: 'secondary'},
  {index: 2, text: 'Subscribe', className: 'subscribe'},
  {index: 3, text: 'Shop Luxe', className: 'welcome'},
]



function App() {
  return (
    <>
      <Header navLinks={navLinks} buttonText={buttonText}/>
      <Banner bannerHeader= {bannerHeader} bannerText={bannerText} buttonText={buttonText}/>
      <Gallery imageLinks = {imageLinks}/> 
      <Footer buttonText= {buttonText}/>
    </>
  );
}

export default App;

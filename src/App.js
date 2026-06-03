import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import car from "./assets/car.avif";
import city from "./assets/city.avif";
import night from "./assets/night.avif";
import travel from "./assets/travel.avif";

let bannerHeader = "Welcome To The Big Bang";
let bannerText = "Big Bang Theory Featuring A lot of Good Actors and Terrible Ones Too"

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
  {index: 0, text: 'Button 1', className: 'primary'},
  {index: 1, text: 'Button 2', className: 'secondary'},
  {index: 2, text: 'Button 3', className: 'subscribe'},
  {index: 3, text: 'Button 4', className: 'welcome'},
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

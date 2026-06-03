import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Banner from "./components/Banner";
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



function App() {
  return (
    <>
      <Header navLinks={navLinks}/>
      <Banner bannerHeader= {bannerHeader} bannerText={bannerText}/>
      <Gallery imageLinks = {imageLinks}/> 
    </>
  );
}

export default App;

import ImagesLogo from '/images-logo.png';
import Logo from "../Search/Logo";
import NavBar from "../NavBar";
import SearchBar from "../Search/SearchBar";

function ImageSearch() {
  const url = 'https://www.google.com/search?tbm=isch&q=';
  console.log('image url:', url);
return (
    <div id="image-page" className='page'>
    <NavBar />
    <Logo src={ImagesLogo} />
    <form action={url}>
        <SearchBar type='images' />
      </form>
    </div>
  )
}

export default ImageSearch;

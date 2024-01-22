import Logo from './Logo';
import MainLogo from '/logo.png';
import SearchBar from './SearchBar';
import SearchButtons from './SearchButtons';
import NavBar from '../NavBar';

function Search() {
  const url = 'https://www.google.com/search';
  return (
    <div id="search-page" className='page'>
      <NavBar />
      <Logo src={MainLogo} />
      <form action={url}>
        <SearchBar type='search' />
        <SearchButtons />
      </form>
    </div>
  )
}

export default Search;

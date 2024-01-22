import SearchIcon from '/search-icon.png';
import MicIcon from '/mic-icon.png';
import CameraIcon from '/camera-icon.png';

interface Props {
  type: string;
}

function SearchBar(props: Props) {
  return (
    <div id="main-search-bar">
      <div className="left">
        <img className="search-bar-icon" src={SearchIcon} alt="search-icon" />
      </div>
      <input
        id="main-search-bar-input"
        className="search-bar"
        type="text"
        name="q"
      />
      <div className="right">
        <img className="search-bar-icon" src={MicIcon} alt="mic-icon" />
        <img className="search-bar-icon" src={CameraIcon} alt="camera-icon" />
      </div>
      {props.type === 'images' && (
        <input type="hidden" name="tbm" value="isch" />
      )}
    </div>
  );
}

export default SearchBar;

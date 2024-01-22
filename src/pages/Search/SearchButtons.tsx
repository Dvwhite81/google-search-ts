function SearchButtons() {
  return (
    <div id="search-buttons">
      <button
        id="google-search"
        className="search-btn btn"
        type="submit"
        name="btnK"
      >
        Google Search
      </button>
      <button
        id="lucky-search"
        className="search-btn btn"
        type="submit"
        name="btnI"
      >
        I'm Feeling Lucky
      </button>
    </div>
  );
}

export default SearchButtons;

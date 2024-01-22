import NavBar from '../NavBar';

function AdvancedSearch() {
  const url = 'https://www.google.com/search';
  return (
    <div id="advanced-page" className="page">
      <NavBar />
      <div id="advanced-label-div">
        <label id="advanced-label">Advanced Search</label>
      </div>
      <hr />
      <div id="advanced-search">
        <div id="advanced-form-title">
          <p>Find pages with...</p>
        </div>
        <form action={url}>
          <div className="advanced-div">
            <p className="advanced-form-label">all these words:</p>
            <input type="text" name="as_q" />
          </div>
          <div className="advanced-div">
            <p className="advanced-form-label">this exact word or phrase:</p>
            <input type="text" name="as_epq" />
          </div>
          <div className="advanced-div">
            <p className="advanced-form-label">any of these words:</p>
            <input type="text" name="as_oq" />
          </div>
          <div className="advanced-div">
            <p className="advanced-form-label">none of these words:</p>
            <input type="text" name="as_eq" />
          </div>
          <button id="advanced-submit" className="btn" type="submit">
            Advanced Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdvancedSearch;

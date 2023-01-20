import React from "react";
import PropTypes from "prop-types";

export const SearchList = ({ hide = true, locations = [], handleSearch }) => {
  

  return (
    <ul className="search-content list-group" hidden={hide}>
      {locations.map((loc, idx) => {
        return (
          <li className="list-group-item" key={idx}>
            <button
              className="btn-no-decoration"
              onClick={() => {
                handleSearch(loc);
              }}
            >
              {loc.name} - {loc.country}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
SearchList.propTypes = {
  hide: PropTypes.bool,
  locations: PropTypes.array,
  handleSearch: PropTypes.func,
};

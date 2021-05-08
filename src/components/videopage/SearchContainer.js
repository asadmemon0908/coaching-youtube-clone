import React from 'react';
import { useHistory } from 'react-router';
import "../../css/videopage/SearchContainer.css";

const SearchContainer = ({searchedVideos, setSearchValue}) => {

    const history = useHistory();
    

    function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const goToVideo = (search) => {
    history.push(`/video?vid=${search.item.id}`);
    setSearchValue("");
  }


    return (
        <div className="searchContainer">
            {searchedVideos.map(search => <p onClick={() => goToVideo(search)} key={search.item.id}>{truncate(search.item.title, 50)}</p>)}
            <span>Related Search Results</span>
        </div>
    );
}

export default SearchContainer;

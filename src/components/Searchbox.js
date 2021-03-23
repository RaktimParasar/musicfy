import SkeletonSearch from "../skeletons/SkeletonSearch";
import Loading2 from "../components/Loading2";

const Searchbox = ({
  input,
  handleChange,
  searchResult,
  isDropdown,
  handleClick,
  isLoading,
  searchLoader,
}) => {
  return (
    <div className="search">
      {!isLoading && (
        <>
          <form className="search__form">
            <input
              className="search__box"
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="search your favourite song"
              required
            />
          </form>
          <div className="loading2">{searchLoader ? <Loading2 /> : ""}</div>
          {!searchLoader && isDropdown && input && (
            <div className="search__dropdown">
              {searchResult.map((item) => (
                <>
                  <div
                    className="dropdown__container"
                    onClick={() => handleClick(item.songID)}
                  >
                    <img className="cover" src={item.songImg} alt="cover" />
                    <p className="artists--name">
                      {item.artistName.length > 15
                        ? item.artistName.substring(0, 15) + "..."
                        : item.artistName}
                    </p>
                    <p className="title--left">
                      {item.songName.length > 20
                        ? item.songName.substring(0, 20) + "..."
                        : item.songName}
                    </p>
                  </div>
                </>
              ))}
            </div>
          )}
        </>
      )}
      {isLoading && (
        <div>
          <SkeletonSearch />
        </div>
      )}
    </div>
  );
};

export default Searchbox;

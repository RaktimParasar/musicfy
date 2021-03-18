import SkeletonSearch from "../skeletons/SkeletonSearch";

const Searchbox = ({
  input,
  handleChange,
  handleSubmit,
  searchResult,
  isDropdown,
  handleClick,
  isLoading,
}) => {
  return (
    <div className="search">
      {!isLoading && (
        <>
          <form className="search__form" onSubmit={handleSubmit}>
            <input
              className="search__box"
              type="text"
              value={input}
              onChange={handleChange}
              //   onChange={handleChange}
              placeholder="search your favourite song"
              required
            />
            <input type="submit" value="Search" className="search__btn" />
          </form>

          {isDropdown && input && (
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

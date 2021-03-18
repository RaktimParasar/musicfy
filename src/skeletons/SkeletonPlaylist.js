import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonPlaylist = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-playlist">
        <SkeletonElement type="box-big" />
        <div>
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonPlaylist;

import SkeletonElement from "../skeletons/SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonMusicPlayer = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-music">
        <SkeletonElement type="box-small" />
        <SkeletonElement type="title" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonMusicPlayer;

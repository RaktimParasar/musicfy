import SkeletonElement from "./SkeletonElement";
import Shimmer from "../skeletons/Shimmer";

const SkeletonSearch = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-search">
        <SkeletonElement type="box-long" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonSearch;

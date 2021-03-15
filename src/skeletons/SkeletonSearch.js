import SkeletonElement from "./SkeletonElement";

const SkeletonSearch = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-search">
        <SkeletonElement type="box-small" />
        <SkeletonElement type="box-mini" />
      </div>
    </div>
  );
};

export default SkeletonSearch;

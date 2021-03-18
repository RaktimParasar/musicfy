import SkeletonElement from "../skeletons/SkeletonElement";

const SkeletonMusicPlayer = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-music">
        <SkeletonElement type="box-small" />
        <SkeletonElement type="title" />
      </div>
    </div>
  );
};

export default SkeletonMusicPlayer;

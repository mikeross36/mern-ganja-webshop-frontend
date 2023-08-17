import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonProductCard = () => {
  return (
    <SkeletonTheme baseColor="#8a8a8a8a" highlightColor="#444">
      {Array(3)
        .fill()
        .map((_, idx) => {
          return (
            <ul className="products__container" key={idx}>
              <li className="product__card">
                <Skeleton
                  duration={1}
                  height={100}
                  width={100}
                  style={{ margin: "1rem", borderRadius: "50%" }}
                />
                <Skeleton
                  duration={1}
                  height={30}
                  width={240}
                  style={{ marginBottom: "2rem" }}
                />
                <Skeleton
                  duration={1}
                  height={30}
                  width={240}
                  style={{ marginBottom: "2rem" }}
                />
                <Skeleton
                  duration={1}
                  height={30}
                  width={240}
                  style={{ marginBottom: "2rem" }}
                />
              </li>
            </ul>
          );
        })}
    </SkeletonTheme>
  );
};

export default SkeletonProductCard;

// type Props = {
//   children: React.ReactNode
//   className?: string
//   gapVertical?: boolean
//   gapHorizontal?: boolean
// }

const Grid = ({
  children,
  className = "",
  gapVertical = true,
  gapHorizontal = true,
}) => {
  return (
    <div
      className={`grid grid-cols-4 md:grid-cols-12 ${
        gapVertical ? "gap-y-4 md:gap-y-6" : ""
      } ${gapHorizontal ? "gap-x-4 md:gap-x-6" : ""}  ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;

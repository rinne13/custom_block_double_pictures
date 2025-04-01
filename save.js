import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
  const { leftImage, rightImage, backgroundColor, padding, margin } =
    attributes;

  const blockProps = useBlockProps.save({
    style: {
      backgroundColor: backgroundColor || "transparent",
      paddingTop: padding?.top ? `${padding.top}px` : undefined,
      paddingRight: padding?.right ? `${padding.right}px` : undefined,
      paddingBottom: padding?.bottom ? `${padding.bottom}px` : undefined,
      paddingLeft: padding?.left ? `${padding.left}px` : undefined,
      marginTop: margin?.top ? `${margin.top}px` : undefined,
      marginRight: margin?.right ? `${margin.right}px` : undefined,
      marginBottom: margin?.bottom ? `${margin.bottom}px` : undefined,
      marginLeft: margin?.left ? `${margin.left}px` : undefined,
    },
  });

  return (
    <div {...blockProps}>
      <div className="double-picture-block">
        <div className="image-container">
          {leftImage && (
            <img src={leftImage} alt="Left Image" className="left-image" />
          )}
          {rightImage && (
            <img src={rightImage} alt="Right Image" className="right-image" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Save;

import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
} from "@wordpress/block-editor";
import {
  PanelBody,
  RangeControl,
  Button,
  ColorPicker,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { leftImage, rightImage, backgroundColor, padding, margin } =
    attributes;

  const handleBackgroundColorChange = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const blockProps = useBlockProps({
    className: "double-picture-block",
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
    <>
      <div {...blockProps}>
        <div className="image-container">
          <div className="left-image-placeholder">
            {!leftImage ? (
              <>
                <div className="image-frame" />
                <span>{__("Left Image", "text-domain")}</span>
              </>
            ) : (
              <img
                src={leftImage}
                alt={__("Left Image", "text-domain")}
                className="left-image"
              />
            )}
          </div>

          <div className="right-image-placeholder">
            {!rightImage ? (
              <>
                <div className="image-frame" />
                <span>{__("Right Image", "text-domain")}</span>
              </>
            ) : (
              <img
                src={rightImage}
                alt={__("Right Image", "text-domain")}
                className="right-image"
              />
            )}
          </div>
        </div>
      </div>

      <InspectorControls>
        <PanelBody
          title={__("Images Settings", "text-domain")}
          initialOpen={true}
        >
          <div>
            <strong>{__("Left Image", "text-domain")}</strong>
            <MediaUpload
              onSelect={(media) => setAttributes({ leftImage: media.url })}
              allowedTypes={["image"]}
              render={({ open }) => (
                <Button onClick={open} className="upload-button">
                  {leftImage
                    ? __("Change Image", "text-domain")
                    : __("Upload Image", "text-domain")}
                </Button>
              )}
            />
          </div>

          <div>
            <strong>{__("Right Image", "text-domain")}</strong>
            <MediaUpload
              onSelect={(media) => setAttributes({ rightImage: media.url })}
              allowedTypes={["image"]}
              render={({ open }) => (
                <Button onClick={open} className="upload-button">
                  {rightImage
                    ? __("Change Image", "text-domain")
                    : __("Upload Image", "text-domain")}
                </Button>
              )}
            />
          </div>

          <div>
            <strong>{__("Background Color", "text-domain")}</strong>
            <ColorPicker
              color={backgroundColor}
              onChangeComplete={(color) =>
                handleBackgroundColorChange(color.hex)
              }
              disableAlpha
            />
          </div>
        </PanelBody>

        <PanelBody title={__("Padding", "text-domain")} initialOpen={false}>
          {["top", "right", "bottom", "left"].map((side) => (
            <RangeControl
              key={side}
              label={__(`Padding ${side}`, "text-domain")}
              value={padding?.[side] ?? 0}
              onChange={(value) =>
                setAttributes({
                  padding: { ...padding, [side]: value },
                })
              }
              min={0}
              max={100}
            />
          ))}
        </PanelBody>

        <PanelBody title={__("Margin", "text-domain")} initialOpen={false}>
          {["top", "right", "bottom", "left"].map((side) => (
            <RangeControl
              key={side}
              label={__(`Margin ${side}`, "text-domain")}
              value={margin?.[side] ?? 0}
              onChange={(value) =>
                setAttributes({
                  margin: { ...margin, [side]: value },
                })
              }
              min={0}
              max={100}
            />
          ))}
        </PanelBody>
      </InspectorControls>
    </>
  );
}

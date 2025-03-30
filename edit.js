/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import { PanelBody, Button, ColorPicker } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { leftImage, rightImage, backgroundColor } = attributes;

	const handleBackgroundColorChange = (color) => {
		setAttributes({ backgroundColor: color });
	};

	return (
		<>
			<div
				{...useBlockProps({ className: "double-picture-block" })}
				style={{
					backgroundColor: backgroundColor || "transparent",
				}}
			>
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
			</InspectorControls>
		</>
	);
}

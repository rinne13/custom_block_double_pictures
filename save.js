import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { leftImage, rightImage, backgroundColor } = attributes;

	return (
		<div
			{...useBlockProps.save()}
			style={{ backgroundColor: backgroundColor || "transparent" }}
		>
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

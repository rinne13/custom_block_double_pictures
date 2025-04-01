# custom_block_double_pictures

A custom Gutenberg block for WordPress that displays two side-by-side images with customizable padding, margin, and background color. Built with React and WordPress Block Editor (Gutenberg) components.

## Features

- Upload and display two images: left and right.
- Customize background color using a color picker.
- Adjust individual padding and margin (top, right, bottom, left) via sliders.
- Responsive design with support for mobile-specific behavior.
- Easy to use inside the Gutenberg editor.

## Installation

1. Clone or download this plugin into your WordPress `wp-content/plugins/` directory.
2. Run the following commands in the plugin root:

```bash
npm install
npm run build
```

## Structure

double-picture-block/
├── src/
│ ├── edit.js # Block editor logic
│ ├── save.js # Frontend rendering logic
│ ├── editor.scss # Editor styles
│ └── style.scss # Frontend styles
├── build/ # Compiled output
├── block.json # Block metadata and attributes
├── package.json # Project dependencies and scripts
└── README.md # You are here

## Development Scripts

npm run start – Start development mode with live rebuilding.

npm run build – Build the production version.

npm run format – Format the source code.

npm run lint:js – Lint JavaScript files.

npm run lint:css – Lint styles.

## Attributes

{
"leftImage": "string",
"rightImage": "string",
"backgroundColor": "string",
"padding": {
"top": "number",
"right": "number",
"bottom": "number",
"left": "number"
},
"margin": {
"top": "number",
"right": "number",
"bottom": "number",
"left": "number"
}
}

## Notes

- Padding and margin are applied via inline styles.

- Recommended image aspect ratio: 3:2 or landscape for best layout.

- You can add responsive visibility (e.g. show only on mobile) via custom CSS classes like only-mobile.

## License

This plugin is for educational and personal use. Feel free to modify and use in your own projects.

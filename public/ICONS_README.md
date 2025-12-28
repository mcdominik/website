# PWA Icons Setup

The following icon files need to be generated from `favicon.svg`:

## Required Icons

1. **icon-192.png** (192x192) - Android PWA icon
2. **icon-512.png** (512x512) - Android splash screen
3. **apple-touch-icon.png** (180x180) - iOS home screen icon

## Current Status

⚠️ Placeholder files have been created. Please replace them with actual PNG images.

## How to Generate Icons

### Option 1: Online Tools (Easiest)
- Visit https://realfavicongenerator.net/
- Upload the `favicon.svg` file
- Download the generated icons
- Replace the placeholder files

### Option 2: Using ImageMagick (Command Line)
```bash
cd public

# Generate 192x192 icon
convert favicon.svg -resize 192x192 icon-192.png

# Generate 512x512 icon
convert favicon.svg -resize 512x512 icon-512.png

# Generate Apple touch icon
convert favicon.svg -resize 180x180 apple-touch-icon.png
```

### Option 3: Using macOS Preview or GIMP
1. Open `favicon.svg` in Preview or GIMP
2. Export as PNG with the required dimensions
3. Save with the correct filename

## Current favicon.svg Design
- Purple square (#4F46E5) with rounded corners
- White "M" letter in the center
- 32x32 viewBox

## Notes
- The manifest.webmanifest file is already configured with these icons
- The apple-touch-icon is already linked in the HTML head
- Icons should be opaque (no transparency) for best compatibility


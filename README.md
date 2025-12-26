# Swamp Dog Games - 3D Button Links Page

A modern, 3D interactive buttons page inspired by Linktree, featuring smooth animations and hover effects.

## Features

- 🎨 Dark minimalist design matching Swamp Dog Games branding
- 🎯 3D transform effects with dynamic mouse tracking
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- ⚡ Lightweight and fast-loading
- 🎮 Interactive hover states with depth effects

## Files

- `index.html` - Main HTML structure
- `styles.css` - 3D button styles and animations
- `script.js` - Interactive JavaScript for 3D effects

## Customization

### Update Links
Edit the `links` array in `script.js`:

```javascript
const links = [
    {
        title: "Your Link Title",
        url: "https://your-url.com",
        icon: "🌐",
        variant: "primary" // or "secondary", "tertiary"
    }
];
```

### Change Colors
Modify CSS variables in `styles.css`:
- Background: `#0A0A0A`
- Text: `#EAEAEA`
- Borders: `#2A2A2A`
- Hover effects: `#3A3A3A`

### Add Profile Image
Replace the placeholder in `index.html`:
```html
<img src="your-image.jpg" alt="Swamp Dog Games" id="profileImg">
```

## Usage

Simply open `index.html` in a web browser, or host on any web server.

## Browser Support

Works on all modern browsers with CSS3 and ES6 support.

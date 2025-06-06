# Favicon Setup Guide - Using Your Face Image

## 📁 Current Favicon System

I've set up a modern favicon system with two dynamic icon generators:

- `src/app/icon.tsx` - Standard favicon (32x32px)
- `src/app/apple-icon.tsx` - Apple Touch Icon (180x180px)
- `public/favicon.ico` - Fallback ICO file

## 🎯 Option 1: Update Dynamic Favicons with Face Image

### Step 1: Add Your Face Image to Public Folder

1. Add your face image to `public/` directory (e.g., `public/klimy-face.jpg`)
2. Recommended image: Square aspect ratio, high quality, clear face visibility

### Step 2: Update icon.tsx

Replace the content in `src/app/icon.tsx`:

```tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
          padding: '2px',
        }}
      >
        <img
          src="https://klimy.co/klimy-face.jpg"
          alt="KlimY"
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
```

### Step 3: Update apple-icon.tsx

Replace the content in `src/app/apple-icon.tsx`:

```tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          overflow: 'hidden',
          background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
          padding: '10px',
        }}
      >
        <img
          src="https://klimy.co/klimy-face.jpg"
          alt="KlimY"
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '15%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
```

## 🎯 Option 2: Use Static Image Files (Recommended)

This option provides better performance and browser compatibility.

### Step 1: Prepare Your Face Images

Create multiple sizes of your face image:

- `favicon.ico` (16x16, 32x32, 48x48 - multi-size ICO file)
- `icon-32x32.png` (32x32px)
- `icon-192x192.png` (192x192px)
- `apple-touch-icon.png` (180x180px)

### Step 2: Use Online Favicon Generator

1. Go to [https://favicon.io/favicon-converter/](https://favicon.io/favicon-converter/)
2. Upload your face image
3. Download the generated favicon package
4. Extract and place files in `public/` directory

### Step 3: Update Layout Configuration

Replace the icons configuration in `src/app/layout.tsx`:

```tsx
icons: {
  icon: [
    { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
  shortcut: '/favicon.ico',
},
```

## 🎨 Image Preparation Tips

### Best Practices for Face Favicon:

1. **Square Crop**: Crop your image to 1:1 aspect ratio
2. **Clear Face**: Make sure your face is clearly visible and centered
3. **High Contrast**: Ensure good contrast against potential backgrounds
4. **Simple Background**: Use a simple or solid background
5. **Professional Look**: Choose a professional, friendly photo

### Recommended Image Specifications:

- **Source Image**: 512x512px or larger, square format
- **File Format**: JPG or PNG
- **File Size**: Keep under 100KB for performance
- **Face Position**: Centered, taking up 60-80% of the frame

## 🔧 Testing Your Favicon

### Test in Different Places:

1. **Browser Tab**: Check if it appears in the browser tab
2. **Bookmarks**: Test how it looks when bookmarked
3. **Mobile Home Screen**: Test on iOS/Android home screen
4. **Search Results**: Check in search engine results
5. **Social Media**: Verify in social media sharing

### Browser Cache:

If you don't see changes immediately:
1. Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Test in incognito/private mode
4. Test in different browsers

## 🚀 Quick Implementation

If you want to get started quickly, here's what you need to do:

1. **Add your face image** to `public/klimy-face.jpg`
2. **Update the image URL** in both `icon.tsx` and `apple-icon.tsx` files
3. **Build and test** your application

The dynamic favicon system will automatically generate optimized favicons with your face image!

## 📱 Mobile Considerations

- **iOS**: Uses apple-touch-icon for home screen shortcuts
- **Android**: Uses standard icon for home screen shortcuts
- **PWA**: Consider adding a web app manifest for better mobile experience

## 🔄 Alternative: Keep Current Design

If you prefer to keep the current "K" design but want to customize it:

- Change the gradient colors
- Modify the font or letter
- Add a subtle border or shadow
- Use your brand colors

The current setup is already optimized and professional-looking! 
# Kastle UI - React Native Component Library

A React Native and Expo based UI component library with Storybook Web version for previewing and testing components.

## Features

- ✅ React Native + Expo 
- ✅ TypeScript Support
- ✅ Storybook Web Version (using react-native-web)
- ✅ Basic Button Component Example
- ✅ Component Demo App

## Installation & Usage

### Install Dependencies

```bash
npm install
```

### Development Mode

#### 1. View Component Demo App

```bash
npm start
```

This starts the Expo development server and displays the component showcase page. You can scan the QR code to preview on your mobile device.

#### 2. Web Storybook Preview

```bash
npm run preview
```

This starts the Web version of Storybook. Open your browser and visit `http://localhost:6006`.

#### 3. Build Static Storybook Website

```bash
npm run build-storybook
```

The built files will be in the `storybook-static/` folder, which can be deployed to any static website host.

## Components

### ExampleButton

A basic button component that supports multiple styles and sizes.

```tsx
import { ExampleButton } from 'kastle-ui';

<ExampleButton 
  title="Click Me" 
  onPress={() => console.log('Button clicked')}
  variant="primary"
  size="medium"
/>
```

#### Props

- `title: string` - Button text
- `onPress: () => void` - Click event handler
- `variant?: 'primary' | 'secondary' | 'outline'` - Button style (default: 'primary')
- `size?: 'small' | 'medium' | 'large'` - Button size (default: 'medium')
- `disabled?: boolean` - Whether to disable the button (default: false)

## Project Structure

```
src/
├── components/
│   └── ExampleButton/
│       ├── Button.tsx
│       ├── Button.stories.tsx
│       └── index.ts
└── index.ts

.storybook/            # Web Storybook configuration
AppDemo.tsx            # Component showcase page
```

## Usage

### 📱 View on Mobile

Run `npm start` to see all components showcase page (AppDemo.tsx)

### 🌐 View in Browser

Run `npm run preview` to preview Storybook in browser, supporting:
- Component control panels
- Responsive preview
- Documentation viewing
- Code examples

### 🚀 Deploy UI Documentation Website

```bash
npm run build-storybook
```
After building, deploy the `storybook-static/` folder to any static website host.

## Developing New Components

1. Create a new component folder under `src/components/`
2. Create component file (e.g., `MyComponent.tsx`)
3. Create Storybook story file (e.g., `MyComponent.stories.tsx`)
4. Export component in the component folder's `index.ts`
5. Export component in `src/index.ts`
6. Add component showcase in `AppDemo.tsx` (optional)

## Notes

- Web Storybook uses react-native-web to preview in browser
- Mobile app displays component showcase page for quick effect viewing
- Storybook is suitable for detailed debugging and generating UI documentation websites
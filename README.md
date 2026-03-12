# Kastle UI - React Native Component Library

A modern React Native component library with TypeScript support and Storybook documentation.

## Features

- ✅ React Native Component Library  
- ✅ TypeScript Support
- ✅ Storybook Documentation
- ✅ Figtree Font Integration
- ✅ Modern UI Components

## Installation

```bash
npm install kastle-ui
```

## Usage

```tsx
import { ExploreAppCard } from 'kastle-ui';

function App() {
  return (
    <ExploreAppCard
      appName="My App"
      appCategory="DeFi"
      isVerified={true}
      onPress={() => {}}
    />
  );
}
```

## Development

### Preview Components

```bash
npm run preview
```

Opens Storybook at `http://localhost:6006`

### Build Documentation

```bash
npm run build-storybook
```

## Project Structure

```
src/
├── components/          # UI components
└── index.ts            # Main exports

.storybook/             # Storybook configuration
```

## Contributing

1. Create components in `src/components/`
2. Add Storybook stories for documentation
3. Export from `src/index.ts`

---

Built with ❤️ for the Kastle ecosystem
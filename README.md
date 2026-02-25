# @sampan/react-widget

A React component for integrating the Sampan Club chatbot widget into your React applications.

## Installation

```bash
npm install @sampan/react-widget
```

## Quick Start

```tsx
import { SampanWidget } from '@sampan/react-widget';

export default function App() {
  return (
    <SampanWidget 
      widgetKey="wk_your_key_here"
      position="right"
    />
  );
}
```

## Props

- `widgetKey` (string, required): Your Sampan Club widget key
- `position` (string, optional): Widget position - 'left' or 'right' (default: 'right')
- `theme` (string, optional): Theme mode - 'light' or 'dark' (default: 'light')
- `onReady` (function, optional): Callback when widget is ready
- `onClose` (function, optional): Callback when widget is closed

## Documentation

For more information, visit [Sampan Club Documentation](https://sampan.club/docs)

## License

MIT

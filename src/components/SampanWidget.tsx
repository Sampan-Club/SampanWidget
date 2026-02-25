import React, { useEffect, useRef } from 'react';
import { SampanWidgetProps } from '../types';

/**
 * SampanWidget - React component for Sampan Club chatbot integration
 *
 * @example
 * ```tsx
 * <SampanWidget 
 *   widgetKey="wk_your_key_here"
 *   position="right"
 *   theme="light"
 * />
 * ```
 */
export const SampanWidget: React.FC<SampanWidgetProps> = ({
  widgetKey,
  position = 'right',
  theme = 'light',
  onReady,
  onClose,
  className,
  style,
}: SampanWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!widgetKey) {
      console.error('SampanWidget: widgetKey is required');
      return;
    }

    // Load the widget script if not already loaded
    if (!scriptLoadedRef.current && !window.SampanWidget) {
      const script = document.createElement('script');
      script.src = 'https://cdn.sampan.club/widget.js';
      script.async = true;
      script.onload = () => {
        scriptLoadedRef.current = true;
        initializeWidget();
      };
      script.onerror = () => {
        console.error('Failed to load Sampan Widget script');
      };
      document.head.appendChild(script);
    } else if (window.SampanWidget) {
      initializeWidget();
    }

    return () => {
      // Cleanup if needed
      if (window.SampanWidget?.destroy) {
        window.SampanWidget.destroy();
      }
    };
  }, [widgetKey]);

  const initializeWidget = () => {
    if (window.SampanWidget && containerRef.current) {
      try {
        window.SampanWidget.init({
          widgetKey,
          position,
          theme,
          container: containerRef.current,
          onReady,
          onClose,
        });
      } catch (error) {
        console.error('Failed to initialize Sampan Widget:', error);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'fixed',
        [position]: '20px',
        bottom: '20px',
        zIndex: 9999,
        ...style,
      }}
      data-sampan-widget={widgetKey}
    />
  );
};

// Extend window interface for TypeScript
declare global {
  interface Window {
    SampanWidget?: {
      init: (config: any) => void;
      destroy?: () => void;
    };
  }
}

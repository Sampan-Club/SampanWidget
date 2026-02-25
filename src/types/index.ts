export interface SampanWidgetProps {
  /**
   * Your Sampan Club widget key
   */
  widgetKey: string;

  /**
   * Position of the widget on the screen
   * @default 'right'
   */
  position?: 'left' | 'right';

  /**
   * Theme mode for the widget
   * @default 'light'
   */
  theme?: 'light' | 'dark';

  /**
   * Callback when widget is ready
   */
  onReady?: () => void;

  /**
   * Callback when widget is closed
   */
  onClose?: () => void;

  /**
   * Custom CSS class name
   */
  className?: string;

  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

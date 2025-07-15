/**
 * @file ChevronIcon.tsx
 * @description A reusable chevron icon component that rotates based on an `open` prop.
 * This is commonly used for accordions, dropdowns, or other collapsible elements.
 *
 * @component
 * @param {object} props - The component props.
 * @param {boolean} props.open - A boolean that determines the rotation of the icon. `true` for open (up), `false` for closed (down).
 * @returns {JSX.Element} The rendered SVG icon.
 *
 * @logic
 * - The component receives an `open` prop.
 * - It applies a CSS class (`open` or `closed`) to the SVG element based on the value of the `open` prop.
 * - The rotation is handled by the CSS in `ChevronIcon.css`.
 *
 * @integration
 * - This component is used in `CheckoutCart` to indicate the state of the collapsible mobile summary.
 * - It can be used in any component that needs a visual indicator for an open/closed state.
 */
import "./ChevronIcon.css";

const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={`chevron-icon${open ? ' open' : ' closed'}`}
  >
    <path d="M12 15.5c-.3 0-.5-.1-.7-.3l-5.5-5.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L12 13.3l4.8-4.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5.5 5.5c-.2.2-.4.3-.7.3z" />
  </svg>
);

export default ChevronIcon;
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
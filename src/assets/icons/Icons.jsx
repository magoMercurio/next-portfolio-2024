

export const LogoIcon = ({ className }) => {
  className = className || "";
  return (
    <>
      <svg 
        viewBox="0 0 24 24"
        className={className}
      >
        <path 
          fill="none"
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"
        >
        </path>
      </svg>
    </>
  ); 
}
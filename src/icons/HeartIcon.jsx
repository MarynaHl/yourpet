import * as React from 'react';

// color = stroke
// color of fill = fill

function HeartIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.331 12.047L12 20l7.669-7.953A4.804 4.804 0 0021 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 007.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333z"
        // stroke=візьме колір з className
        // fill=візьме колір з className
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HeartIcon;

interface RightArrowProps extends React.SVGProps<SVGSVGElement> {}

export default function RightArrow({ className, ...props }: RightArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" {...props}>
      <g clipPath="url(#clip0_466_2188)">
        <path
          d="M27.9519 15.9995L10.5828 32.1274L8.40601 29.7827L23.2488 15.9995L8.40601 2.21729L10.5828 -0.127441L27.9519 15.9995Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_466_2188">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

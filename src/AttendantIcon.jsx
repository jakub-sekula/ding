import clsx from 'clsx'

export default function AttendantIcon({
  color = 'currentColor', // inherit parent container text color by default
  lineWidth = '3',
  size = 16,
  className,
  ...props
}) {
  return (
    <svg
      {...props}
      className={clsx(className)}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2 19.4C30.7287 19.4 34.4 15.7287 34.4 11.2C34.4 6.67126 30.7287 3 26.2 3C21.6713 3 18 6.67126 18 11.2C18 15.7287 21.6713 19.4 26.2 19.4Z"
        stroke={color}
        strokeWidth={lineWidth}
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M41 45.9H54.6C56.8 45.9 58.7 44.1 58.7 41.8C58.7 39.6 56.9 37.7 54.6 37.7H46.6L41 27.7C39.9 25.7 37.8 24.4 35.4 24.4H14.9C10.5 24.4 7 28 7 32.3V56.3C7 58.7 9 60.7 11.4 60.7C13.8 60.7 15.8 58.7 15.8 56.3V34.3V56.6H35.9V36.4L41 45.9Z"
        stroke={color}
        strokeWidth={lineWidth}
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </svg>
  )
}

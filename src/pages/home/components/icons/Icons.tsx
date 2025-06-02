import type React from "react"

interface IconProps {
  height?: string
  width?: string
  color?: string
  transform?: string
}

export const PlusIcon: React.FC<IconProps> = ({
  height,
  width,
  color,
  transform,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    height={height}
    width={width}
    fill={color}
    transform={transform}
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
  </svg>
)

export const MagnifyingGlassIcon: React.FC<IconProps> = ({
  height,
  width,
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    width={width}
    fill={color}
  >
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
  </svg>
)

export const ThreeDotsIcon: React.FC<IconProps> = ({
  height,
  width,
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 512"
    height={height}
    width={width}
    fill={color}
  >
    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
  </svg>
)

export const GreaterThan: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
  >
    <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
  </svg>
)

export const Ravn: React.FC<IconProps> = ({
  height,
  width,
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    width={width}
    height={height}
    color={color}
  >
    <path
      fill="currentColor"
      d="M54.76 47.802c9.539-2.607 16.553-11.335 16.553-21.702 0-12.21-9.728-22.15-21.854-22.488V3.6H0l12.051 14.996h2.468v.004h34.407a7.5 7.5 0 0 1-.111 14.998H24.105L52.07 68.4h19.24L54.759 47.802ZM16.2 68.4c5.468 0 9.9-4.432 9.9-9.9s-4.432-9.9-9.9-9.9-9.9 4.432-9.9 9.9 4.432 9.9 9.9 9.9Z"
    />
  </svg>
)

export const Sun: React.FC<IconProps> = ({
  height,
  width,
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
    fill={color}
  >
    <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
  </svg>
)

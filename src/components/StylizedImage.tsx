import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

const shapes = [
  {
    width: 655,
    height: 680,
    path: 'M 69 2 H 530 C 696 289 589 612 495 734 H 69 V 1',
  },
  {
    width: 655,
    height: 680,
    path: 'M 580 14 V 683 H 141 C 104 653 -15 286 283 14 H 580',
  },
  { width: 655,
    height: 680,
    path: 'M 69 2 H 530 C 696 289 589 612 495 734 H 69 V 1',
  },
]

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export function StylizedImage({
  shape = 0,
  className,
  ...props
}: ImagePropsWithOptionalAlt & { shape?: 0 | 1 | 2 }) {
  let id = useId()
  let { width, height, path } = shapes[shape]

  return (
    <div
      className={clsx(
        className,
        'relative flex aspect-[719/680] w-full grayscale',
      )}
    >
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="h-full">
        <g clipPath={`url(#${id}-clip)`} className="group">
          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
            <foreignObject width={width} height={height}>
              <Image
                alt=""
                className="w-full bg-neutral-100 object-cover"
                style={{ aspectRatio: `${width} / ${height}` }}
                {...props}
              />
            </foreignObject>
          </g>
          <use
            href={`#${id}-shape`}
            strokeWidth="2"
            className="stroke-neutral-950/10"
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

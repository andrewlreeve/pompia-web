import clsx from 'clsx'
import Image, { type ImageProps } from 'next/image'
import imageLogo from '@/images/logo.png'

export function Logo({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'img'> & {}) {
  return (
    <Image
      alt=""
      height={50}
      src={imageLogo}
      className={`max-w-none`}
    />
  )
}

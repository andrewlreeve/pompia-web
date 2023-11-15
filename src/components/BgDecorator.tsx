import Image from 'next/image'
import backgroundTop from '@/images/backgrounds/background-top.svg'
import backgroundMiddle from '@/images/backgrounds/background-middle.svg'
import backgroundBottom from '@/images/backgrounds/background-bottom.svg'
type BgDecoratorProps = React.HTMLAttributes<HTMLElement> & {
  type: 'top' | 'middle' | 'bottom'
}

const BgDecorator: React.FC<BgDecoratorProps> = ({ type, ...restProps }) => {
  const srcObject: Record<
    string,
    {
      src: string
      width: number
      height: number
      class?: string
      wrapperClass?: string
      sizes?: string
    }
  > = {
    top: {
      src: backgroundTop,
      width: 1504,
      height: 856,
    },
    middle: {
      src: backgroundMiddle,
      width: 1920,
      height: 1165,
      class: 'mt-0 hidden sm:block',
      wrapperClass: 'desktopxl:justify-start desktopxl:left-0',
      sizes: '(min-width: 1024px) 41rem, 31rem',
    },
    bottom: {
      src: backgroundBottom,
      width: 1916,
      height: 939,
    },
  }

  const {
    src,
    class: additionalClass = '',
    wrapperClass = '',
  } = srcObject[type]
  return (
    <div className="absolute -z-10 w-full min-w-8xl" {...restProps}>
      <div
        className={`align-center relative left-bg-center-fix flex justify-end ${wrapperClass}`}
      >
        <Image
          alt=""
          width={srcObject[type].width}
          height={srcObject[type].height}
          src={src}
          sizes={srcObject[type].sizes}
          className={`-mt-92px max-w-none ${additionalClass}`}
        />
      </div>
    </div>
  )
}

export { BgDecorator }

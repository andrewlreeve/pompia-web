type BgDecoratorProps = React.HTMLAttributes<HTMLElement> & {
  type: 'top' | 'middle' | 'bottom'
}

const BgDecorator: React.FC<BgDecoratorProps> = ({ type, ...restProps }) => {
  const srcObject: Record<
    string,
    { src: string; class?: string; wrapperClass?: string }
  > = {
    top: { src: 'images/ui/pz_background_top.png' },
    middle: {
      src: 'images/ui/pz_background_middle.png',
      class: 'mt-0',
      wrapperClass: 'desktopxl:justify-start desktopxl:left-0',
    },
    bottom: { src: 'images/ui/pz_background_bottom.png' },
  }

  const { src, class: additionalClass, wrapperClass } = srcObject[type]
  return (
    <div className="min-w-8xl absolute -z-10 w-full" {...restProps}>
      <div
        className={`align-center relative left-bg-center-fix flex justify-end ${wrapperClass}`}
      >
        <img src={src} className={`-mt-92px max-w-none ${additionalClass}`} />
      </div>
    </div>
  )
}

export { BgDecorator }

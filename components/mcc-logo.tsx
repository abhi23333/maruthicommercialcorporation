import Image from 'next/image'

export function MccLogo({
  className = '',
  width = 200,
  height = 118,
  priority = false,
}: {
  className?: string
  width?: number
  height?: number
  priority?: boolean
}) {
  return (
    <Image
      src="/mcc-logo.jpeg"
      alt="Maruthi Commercial Corporation logo"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  )
}

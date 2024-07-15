import { cn } from '@/shared/lib/utils'
import { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  isDark?: boolean
}

const Phone = ({ className, imgSrc, isDark, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className,
      )}
      {...props}
    >
      <img
        className="pointer-events-none z-50 select-none"
        src={
          isDark
            ? '/phone-template-dark-edges.png'
            : 'phone-template-white-edges.png'
        }
        alt="phone image"
      />

      <div className="absolute -z-10 inset-0">
        <img className="object-cover" src={imgSrc} alt="overlay phone image" />
      </div>
    </div>
  )
}

export default Phone

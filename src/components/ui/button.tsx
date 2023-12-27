import { type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(['font-bold', 'text-white'], {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'hover:bg-blue-700', 'border-blue-700 border-2'],
      destructive: [
        'bg-red-600',
        'hover:bg-red-700',
        'border-red-800 border-2',
      ],
    },
    size: {
      small: ['text-sm', 'px-4', 'py-1'],
      medium: ['text-md', 'px-6', 'py-2'],
    },
  },
  compoundVariants: [
    { size: 'small', className: 'rounded-md' },
    { size: 'medium', className: 'rounded-full' },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export const Button = (props: ButtonProps) => {
  const { className, intent, size, ...rest } = props
  return (
    <button className={buttonVariants({ intent, size, className })} {...rest} />
  )
}

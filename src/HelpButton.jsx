import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function HelpButton({
  onActivated = undefined,
  label = 'Get help',
  leftIcon,
  rightIcon,
  className,
}) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active && onActivated) {
      onActivated()
    }
  }, [active, onActivated])

  useEffect(() => {
    if (active) {
      const ding = new Audio('ding.mp3')
      ding.play()
    }
  }, [active])

  return (
    <button
      onClick={() => {
        setActive(!active)
      }}
      className={clsx(
        active ? 'translate-y-[2px] text-amber-100' : 'text-white',
        'relative flex items-center gap-2 rounded-full p-4 px-6',
        'max-w-fit font-semibold transition-all duration-200 active:translate-y-[2px]',
        className,
      )}
    >
      <div
        className={clsx(
          active
            ? 'animate-pulse-fast from-orange-400 to-orange-500 shadow-orange-glow-light'
            : ' from-slate-500 to-slate-600',
          'absolute inset-0 -z-10 rounded-full bg-gradient-to-b transition-all duration-300',
        )}
      />
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  )
}

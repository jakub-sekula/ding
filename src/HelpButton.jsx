import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind-config'
import clsx from 'clsx'
import AttendantIcon from './AttendantIcon'

const fullConfig = resolveConfig(JSON.parse(tailwindConfig))

export default function HelpButton({ onActivated = undefined }) {
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
        'font-semibold transition-all duration-200 active:translate-y-[2px] max-w-fit',
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
      <AttendantIcon
        size={24}
        lineWidth="4"
        color={active ? fullConfig.theme.colors.amber['100'] : 'white'}
      />
      <span>Call moderator</span>
    </button>
  )
}

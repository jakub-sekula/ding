import AttendantIcon from './AttendantIcon'
import HelpButton from './HelpButton'

export default function App() {
  return (
    <div className={'relative flex h-full w-full items-center justify-center '}>
      <HelpButton
        leftIcon={<AttendantIcon size={24} lineWidth="4" />}
        label="Call attendant"
        onActivated={() => {
          console.log('Help requested!')
        }}
      />
    </div>
  )
}

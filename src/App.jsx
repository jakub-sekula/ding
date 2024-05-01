import HelpButton from './HelpButton'

export default function App() {
  return (
    <div className={'relative flex h-full w-full items-center justify-center '}>
      <HelpButton
        onActivated={() => {
          console.log('Help requested!')
        }}
      />
    </div>
  )
}

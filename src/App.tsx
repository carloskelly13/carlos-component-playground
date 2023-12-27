import { Button } from '@/components/ui/button'

function App() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-black dark:text-white text-xl font-bold mb-2">
          Buttons
        </h1>
        <div className="[&>button]:mr-4">
          <Button>Default</Button>
          <Button intent="primary" size="small">
            Primary, Small
          </Button>
          <Button intent="primary" size="medium">
            Primary, Medium
          </Button>
          <Button intent="destructive" size="small">
            Destructive, Small
          </Button>
          <Button intent="destructive" size="medium">
            Destructive, Medium
          </Button>
        </div>
      </div>
    </>
  )
}

export default App

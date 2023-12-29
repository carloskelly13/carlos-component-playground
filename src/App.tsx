import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'

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
        <div>
          <h1 className="text-black dark:text-white text-xl font-bold mt-12 mb-2">
            Dialogs
          </h1>
          {/* A Primary Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button intent="primary" size="small">
                Start Test
              </Button>
            </DialogTrigger>
            <DialogContent showClose>
              <DialogHeader>
                <DialogTitle>Start Load Test</DialogTitle>
                <DialogDescription>
                  Paste in the code you wish to test.
                </DialogDescription>
              </DialogHeader>
              <textarea className="w-full h-32 p-4 font-mono text-xs" />
              <div className="flex justify-end">
                <DialogClose asChild>
                  <Button size="small">Start Test</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
          {/* A Destructive Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="ml-4" intent="destructive" size="small">
                Self-Destruct
              </Button>
            </DialogTrigger>
            {/* 👇 Example of a custom intent (through a CVA prop) */}
            <DialogContent intent="destructive">
              <DialogHeader>
                <DialogTitle>Self-Destruct</DialogTitle>
                <DialogDescription>
                  Are you sure you want to blow everything up?
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end [&>button]:ml-4">
                <DialogClose asChild>
                  <Button size="small" intent="destructive">
                    Blow Everything Up
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button size="small">Cancel</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}

export default App

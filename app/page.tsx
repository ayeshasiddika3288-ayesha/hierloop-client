import { Button } from "@/components/ui/button"
import { SiteNavbar } from "@/components/site-navbar"

export default function Page() {
  return (
    <div className="min-h-svh bg-[#010103]">
      <SiteNavbar />
      <div className="flex p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium text-white">Project ready!</h1>
            <p className="text-white">You may now add components and start building.</p>
            <p className="text-white">We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import logo from "@/app/assets/logo.png"

const NAV_LINKS = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
] as const

function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="HireLoop home"
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src={logo}
        alt="HireLoop"
        priority
        className={cn("h-8 w-auto sm:h-10 lg:h-11", className)}
      />
    </Link>
  )
}

function NavLinks({ className, onNavigate }: {
  className?: string
  onNavigate?: () => void
}) {
  return (
    <ul className={cn("flex items-center gap-10", className)}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className="text-base tracking-[-0.2px] whitespace-nowrap text-white/90 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function AuthButtons({ className, onNavigate }: {
  className?: string
  onNavigate?: () => void
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Button
        variant="ghost"
        nativeButton={false}
        render={<Link href="/sign-in" onClick={onNavigate} />}
        className="h-auto rounded-xl bg-transparent px-6 py-3.5 text-lg font-semibold text-[#5c53fe] hover:bg-[#5c53fe]/10 hover:text-[#5c53fe]"
      >
        Sign In
      </Button>
      <Button
        nativeButton={false}
        render={<Link href="/get-started" onClick={onNavigate} />}
        className="h-auto rounded-xl border border-[#090a15] bg-[#5c53fe] px-6 py-3.5 text-lg font-medium text-white hover:bg-[#4b45f5]"
      >
        Get Started
      </Button>
    </div>
  )
}

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="relative z-50 px-4 pt-6 sm:px-6 lg:px-[60px]">
      <nav className="flex items-center justify-between gap-6 rounded-2xl bg-[#222222] py-2 pr-2 pl-4 sm:px-4 lg:h-[74px] lg:px-6">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          <NavLinks />
          <span aria-hidden className="h-px w-6 shrink-0 bg-[#a8a8a8]" />
          <AuthButtons />
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                aria-expanded={open}
                aria-haspopup="dialog"
                className="size-11 rounded-xl text-white hover:bg-white/10 hover:text-white lg:hidden"
              >
                <MenuIcon className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            }
          />
          <SheetContent
            side="right"
            className="w-[17rem] gap-6 border-[#2f2f2f] bg-[#151516] p-6 text-white sm:w-72"
          >
            <SheetHeader className="p-0">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <Logo className="h-9" />
            </SheetHeader>

            <NavLinks
              className="flex-col items-start gap-6"
              onNavigate={close}
            />

            <span aria-hidden className="h-px w-full bg-[#2f2f2f]" />

            <SheetFooter className="flex-col gap-4 p-0">
              <AuthButtons
                className="w-full flex-col items-stretch [&_a]:justify-center"
                onNavigate={close}
              />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

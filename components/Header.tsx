"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";
import { Ticket } from "lucide-react";

function Header() {
  return (
    <div className="border-b">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Ticket className="h-6 w-6 text-primary filter drop-shadow-[0_0_2px_rgba(59,130,246,0.5)]" />
              <span className="text-xl font-bold text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                TicketHub
              </span>
            </div>
          </Link>

          <div className="lg:hidden">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button>Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Search Bar - Full width on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        <div className="hidden lg:block ml-auto">
          <SignedIn>
            <div className="flex items-center gap-3">
              <Link href="/seller">
                <Button>Sell Tickets</Button>
              </Link>

              <Link href="/tickets">
                <Button>My Tickets</Button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile Action Buttons */}
        <div className="w-full lg:hidden justify-center flex space-x-3">
          <SignedIn>
            <Link href="/seller" className="flex-1">
              <Button className="w-full">Sell Tickets</Button>
            </Link>

            <Link href="tickets" className="flex-1">
              <Button className="w-full">My Tickets</Button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

function HomePage() {
  return (
    <div>
      <SignedIn>
        <UserButton  />
        <SignOutButton />
      </SignedIn>

      <SignedOut>
        <Button>
        <SignInButton />
        </Button>
      </SignedOut>
    </div>
  );
}

export default HomePage;

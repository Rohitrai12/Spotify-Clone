import { Button } from "./components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>

         <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  );
}

export default App;

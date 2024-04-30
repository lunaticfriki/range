import { Navigation } from '../navigation';

export const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-between p-4 sm:flex-row">
      <h1 className="text-4xl">Range component</h1>
      <Navigation />
    </header>
  );
};

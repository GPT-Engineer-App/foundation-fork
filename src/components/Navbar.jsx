import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            My App
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            {/* Add more navigation items here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
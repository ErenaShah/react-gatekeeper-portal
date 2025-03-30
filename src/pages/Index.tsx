
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to BALA</h1>
        <p className="text-xl text-gray-600 mb-8">Your modern application</p>
        <Link to="/login">
          <Button className="bg-bala-button hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Go to Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;

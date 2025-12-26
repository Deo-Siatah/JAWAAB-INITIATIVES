import { CheckCircle,Send } from "lucide-react";
import {Button} from "@/components/ui/button"

export default function Newsletter() {
  return (
    <div className="bg-emerald-600 flex flex-col items-center justify-center mt-20 py-20 px-4">
      {/* Badge */}
      <div className="flex items-center gap-2 bg-emerald-500 rounded-full px-5 py-3 shadow-md mb-8">
        <CheckCircle className="h-5 w-5 text-white" />
        <h2 className="text-white text-xl font-semibold">Stay Connected</h2>
      </div>

      {/* Heading */}
      <h2 className="text-center text-white font-bold text-3xl md:text-5xl">
        Join Our Newsletter
      </h2>
      <p className="text-gray-200 text-lg mt-4 text-center max-w-3xl">Get updates on our projects, success stories, and ways you can make a difference in communities across the region</p>

      {/*email part + button*/}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-10 md:gap-20">

         <input
            type="email"
            placeholder="Enter your email address"
            className="px-6 py-5 text-white text-lg rounded-md bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all w-full max-w-md"
        />
        <Button 
        size="md"
        className="flex items-center gap-3 rounded-md px-6 py-5 text-emerald-700 text-lg font-bold  bg-white border border-emerald-700 hover:bg-emerald-700 hover:text-white hover:scale-105 transition-all duration-300"
      >
        Subscribe
        <Send className="h-5 w-5" />
      </Button>
   
      </div>
    </div>
  );
}

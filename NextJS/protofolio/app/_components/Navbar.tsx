import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-white shadow p-10 
        flex items-center justify-between">
            <div>
                {/* Name */}
                <h2 className="
                font-bold italic text-2xl text-blue-400
                ">Avi Kumar</h2>
            </div>
            <div>
                <ul className="md:flex items-center gap-5 hidden ">
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Resume</Link>
                    </li>
                    <li>
                        <Link href="#">Project</Link>
                    </li>
                    <li>
                        <Link href="#">Skills</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>

                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Menu className="h-8 w-8" />
                    </SheetTrigger>
                    <SheetContent className="p-16">
                        <ul className="flex flex-col items-center gap-10 text-xl font-medium">
                            <li>
                                <Link href="#">Home</Link>
                            </li>
                            <li>
                                <Link href="#">About</Link>
                            </li>
                            <li>
                                <Link href="#">Resume</Link>
                            </li>
                            <li>
                                <Link href="#">Project</Link>
                            </li>
                            <li>
                                <Link href="#">Skills</Link>
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Navbar
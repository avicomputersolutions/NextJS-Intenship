import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <div className="p-10 lg:p-16 lg:container lg:mx-auto md:grid md:grid-cols-2 md:gap-10">
            <div className="p-16 lg:p-32 flex flex-col gap-5">
                {/* About */}
                <h1 className="text-5xl font-bold">Web Developer</h1>
                <p className="text-2xl font-medium">Build and customised today's market level website</p>
                <div className="flex items-center gap-5">
                    <Button className="rounded-full p-5 
                    text-md">Contact Today</Button>
                    <Button className="rounded-full p-5 
                    text-md" variant="outline">See My Work</Button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                {/* image */}
                <img src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="My Profile" className="
                    rounded-xl md:w-96 " />
            </div>
        </div>
    );
}

export default HeroSection
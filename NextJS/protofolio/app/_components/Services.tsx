import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
    return (
        <div className="bg-sky-300 p-16">
            <div className="container mx-auto">
                <div className="text-center p-3">
                    <h3 className="text-lg font-bold">What we can do for you</h3>
                    <h1 className="text-3xl font-bold">Our Services</h1>
                    <p className="
                    text-sm font-medium text-gray-700">your dreams our code. We can imgaine anything together</p>
                </div>

                <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5">
                    <Card>
                        <CardContent className="space-y-3">
                            <img className="rounded-xl" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="website Developement" />

                            <h1 className="text-2xl font-bold">
                                Website Developement
                            </h1>
                            <p className="text-gray-700">
                                We provide custom web development services to help businesses build fast, responsive, and user-friendly websites. From landing pages to complex web applications, we turn your ideas into scalable digital solutions tailored to your needs.s
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-3">
                            <img className="rounded-xl" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="website Developement" />

                            <h1 className="text-2xl font-bold">
                                Mobile App Development
                            </h1>
                            <p className="text-gray-700">
                                Custom Android and iOS app development for startups and enterprises to boost mobile presence.                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );

}

export default Services
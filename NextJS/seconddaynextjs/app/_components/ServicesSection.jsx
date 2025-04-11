import { Card, CardContent, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
    return (
        <div>
            <div className=" bg-gray-700 p-15 text-white space-y-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl 
                    font-bold ">Our Services</h1>
                    <p>
                        Best Service We can deliver
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-5 text-center">

                    <Card>
                        <CardContent className="space-y-6">
                            <CardTitle className="text-2xl">HomeWork Services</CardTitle>
                            <p>Lorem Ipsum is simply dummy
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been the
                                industry's standard dummy text ever
                                since the 1500s, when an unknown
                                printer took a galley of type and
                                scrambled it to make a type specimen
                                book. It has survived not only five
                                centuries, but also the leap into
                                electronic typesetting, remaining
                                essentially unchanged.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-6">
                            <CardTitle className="text-2xl">Exam Services</CardTitle>
                            <p>Lorem Ipsum is simply dummy
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been the
                                industry's standard dummy text ever
                                since the 1500s, when an unknown
                                printer took a galley of type and
                                scrambled it to make a type specimen
                                book. It has survived not only five
                                centuries, but also the leap into
                                electronic typesetting, remaining
                                essentially unchanged.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-6">
                            <CardTitle className="text-2xl">Training Services</CardTitle>
                            <p>Lorem Ipsum is simply dummy
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been the
                                industry's standard dummy text ever
                                since the 1500s, when an unknown
                                printer took a galley of type and
                                scrambled it to make a type specimen
                                book. It has survived not only five
                                centuries, but also the leap into
                                electronic typesetting, remaining
                                essentially unchanged.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-6">
                            <CardTitle className="text-2xl">Project Services</CardTitle>
                            <p>Lorem Ipsum is simply dummy
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been the
                                industry's standard dummy text ever
                                since the 1500s, when an unknown
                                printer took a galley of type and
                                scrambled it to make a type specimen
                                book. It has survived not only five
                                centuries, but also the leap into
                                electronic typesetting, remaining
                                essentially unchanged.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-6">
                            <CardTitle className="text-2xl">Delivery Services</CardTitle>
                            <p>Lorem Ipsum is simply dummy
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been the
                                industry's standard dummy text ever
                                since the 1500s, when an unknown
                                printer took a galley of type and
                                scrambled it to make a type specimen
                                book. It has survived not only five
                                centuries, but also the leap into
                                electronic typesetting, remaining
                                essentially unchanged.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-6">
                            <CardTitle className="text-2xl">Work From Home Services</CardTitle>
                            <p>Lorem Ipsum is simply dummy
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been the
                                industry's standard dummy text ever
                                since the 1500s, when an unknown
                                printer took a galley of type and
                                scrambled it to make a type specimen
                                book. It has survived not only five
                                centuries, but also the leap into
                                electronic typesetting, remaining
                                essentially unchanged.</p>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}
export default ServicesSection
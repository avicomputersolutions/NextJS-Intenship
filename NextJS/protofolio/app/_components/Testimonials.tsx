'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min:600  },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};
const Testimonials = () => {
    return (
        <div>

            <Carousel responsive={responsive} className="space-x-5">
                <Card className="w-full">
                    <CardContent className="space-y-4">
                        <div className="
                        flex items-center justify-between">
                            <div className="
                        flex text-yellow-500">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <Quote className="text-gray-500" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                        </p>
                        <div className="flex items-center gap-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrTBPxjgQtxbR_H3BQ_QhM0DVz9eaHSoVv-WGiklBOS2X4heHr1WqAawX2RTqv2J2SNI&usqp=CAU" alt=""
                                className="rounded-full w-16 h-16 shadow-xl" />
                            <div>
                                <h2 className="font-bold">Amit Kumar</h2>
                                <p className="text-sm text-gray-600">Head of operation</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardContent className="space-y-4">
                        <div className="
                        flex items-center justify-between">
                            <div className="
                        flex text-yellow-500">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <Quote className="text-gray-500" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                        </p>
                        <div className="flex items-center gap-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrTBPxjgQtxbR_H3BQ_QhM0DVz9eaHSoVv-WGiklBOS2X4heHr1WqAawX2RTqv2J2SNI&usqp=CAU" alt=""
                                className="rounded-full w-16 h-16 shadow-xl" />
                            <div>
                                <h2 className="font-bold">Amit Kumar</h2>
                                <p className="text-sm text-gray-600">Head of operation</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardContent className="space-y-4">
                        <div className="
                        flex items-center justify-between">
                            <div className="
                        flex text-yellow-500">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <Quote className="text-gray-500" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                        </p>
                        <div className="flex items-center gap-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrTBPxjgQtxbR_H3BQ_QhM0DVz9eaHSoVv-WGiklBOS2X4heHr1WqAawX2RTqv2J2SNI&usqp=CAU" alt=""
                                className="rounded-full w-16 h-16 shadow-xl" />
                            <div>
                                <h2 className="font-bold">Amit Kumar</h2>
                                <p className="text-sm text-gray-600">Head of operation</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardContent className="space-y-4">
                        <div className="
                        flex items-center justify-between">
                            <div className="
                        flex text-yellow-500">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <Quote className="text-gray-500" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                        </p>
                        <div className="flex items-center gap-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrTBPxjgQtxbR_H3BQ_QhM0DVz9eaHSoVv-WGiklBOS2X4heHr1WqAawX2RTqv2J2SNI&usqp=CAU" alt=""
                                className="rounded-full w-16 h-16 shadow-xl" />
                            <div>
                                <h2 className="font-bold">Amit Kumar</h2>
                                <p className="text-sm text-gray-600">Head of operation</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardContent className="space-y-4">
                        <div className="
                        flex items-center justify-between">
                            <div className="
                        flex text-yellow-500">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <Quote className="text-gray-500" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                        </p>
                        <div className="flex items-center gap-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrTBPxjgQtxbR_H3BQ_QhM0DVz9eaHSoVv-WGiklBOS2X4heHr1WqAawX2RTqv2J2SNI&usqp=CAU" alt=""
                                className="rounded-full w-16 h-16 shadow-xl" />
                            <div>
                                <h2 className="font-bold">Amit Kumar</h2>
                                <p className="text-sm text-gray-600">Head of operation</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Carousel>

        </div>
    );
}

export default Testimonials
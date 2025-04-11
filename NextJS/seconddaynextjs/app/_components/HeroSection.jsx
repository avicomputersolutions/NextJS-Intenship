import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const HeroSection = ({ title, page }) => {
    return (
        <div>
            <div className=" bg-gray-800 p-10">

                <div
                    className="container mx-auto">

                    <h1 className="text-2xl font-bold 
                    text-white">{title}</h1>
                    <Breadcrumb className="text-white">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    {page}
                                </BreadcrumbPage>

                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
}

export default HeroSection
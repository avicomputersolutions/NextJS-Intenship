import Testimonials from "./Testimonials";

const Feedbacks = () => {
    return (
        <div className="p-16">
            <div className="container mx-auto space-y-4">
                <div className="max-w-3xl">
                    <h1 className="text-3xl font-bold">What <span className="text-blue-700">Our Clients</span> Say</h1>
                    <p>
                        Hear Directly Our Satisfied Partnerss
                    </p>
                </div>

                <Testimonials />
            </div>
            
        </div>
    );
}
export default Feedbacks
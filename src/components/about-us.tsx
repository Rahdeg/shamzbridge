import Image from "next/image";

export const AboutUs = () => (
    <section id="about" className="py-16 bg-slate-100 text-center w-full px-4 lg:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center w-full md:justify-between">
            <div className="md:w-1/2">
                <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Mission & Vision</h2>
                <p className="text-slate-700 mb-4">
                    Our mission is to deliver high-quality HR solutions that help businesses grow and succeed.
                    We strive to build strong, sustainable workforces for every organization we partner with.
                </p>
                <p className="text-slate-700">
                    Our vision is to become a global leader in HR services, providing innovative and tailored
                    solutions to businesses of all sizes.
                </p>
            </div>
            <div className=" mt-8 md:mt-0">
                <Image src="/mission.svg" alt="HR Team" width={500} height={300} />
            </div>
        </div>
    </section>
);
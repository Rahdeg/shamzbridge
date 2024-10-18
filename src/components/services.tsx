import Image from "next/image";

const servicesData = [
    {
        title: 'Recruitment',
        description: 'Find the right talent for your organization with our tailored recruitment solutions.',
        icon: '/person.svg'
    },
    {
        title: 'Employee Training',
        description: 'Enhance your team’s skills with our comprehensive training programs.',
        icon: '/team.svg'
    },
    {
        title: 'Payroll Management',
        description: 'Streamline your payroll process with our efficient and reliable system.',
        icon: '/manager.svg'
    },
];



export const Services = () => (
    <section id="services" className="py-16 bg-white text-center w-full mt-4">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-blue-700 mb-10">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-3 lg:p-0">
                {servicesData.map((service, index) => (
                    <div key={index} className="bg-slate-100 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <Image src={service.icon} alt={service.title} width={100} height={100} />
                        <h3 className="text-2xl font-bold text-blue-700 mt-4">{service.title}</h3>
                        <p className="text-slate-700 mt-2">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
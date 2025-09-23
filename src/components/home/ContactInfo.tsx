import React from 'react';

const ContactInfo = () => {
    const contactDetails = [
        {
            title: "Call Us",
            info: "(555) 123-4567"
        },
        {
            title: "Email",
            info: "info@xfactorsalon.com"
        },
        {
            title: "Follow Us",
            info: "@XFactorSalon"
        }
    ];

    return (
        <section className="py-12 bg-black text-white">
            <div className="luxury-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {contactDetails.map((contact, index) => (
                        <div key={index}>
                            <h3 className="font-heading text-gold font-semibold mb-2">{contact.title}</h3>
                            <p className="text-gray-300 font-body">{contact.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
//oontact
import React from "react";

export default function Contact() {
    return (
        <div>
                <div class="bg-gray-50 text-gray-800 font-sans">

                    <section class="bg-[#7d2ae8] text-white text-center py-16 w-screen">
                        <h1 class="text-4xl font-bold mb-2">Contact Me</h1>
                        <p class="text-lg">Let’s talk about your project or idea</p>
                    </section>

                    <section class="py-16 px-6 md:px-20">
                        <div class="grid md:grid-cols-2 gap-12 items-start">

                            <div class="space-y-6">
                                <h2 class="text-2xl font-bold">Let's Connect</h2>
                                <p>If you have any questions or project in mind, feel free to contact me. I'm available for freelance work and collaborations.</p>

                                <div class="space-y-4">
                                    <p><strong>📞 Phone:</strong> <a href="tel:+917905064957" class="text-indigo-600 hover:underline">+91 7905064957</a></p>
                                    <p><strong>📧 Email:</strong> <a href="mailto:yourname@example.com" class="text-indigo-600 hover:underline">sameer20copy@gmail.com</a></p>
                                    <p><strong>🌐 Location:</strong> India (Remote available)</p>
                                </div>

                                <div class="pt-4">
                                    <a href="https://wa.me/917905064957" target="_blank" className="hover:scale-[1.03] active:scale-90 hover:cursor-pointer inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                                        Message on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
        </div>
    )
}
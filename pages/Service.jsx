import React from "react";

export default function Service() {
    return (
        <div>
                <div class="bg-gray-50 text-gray-800 font-sans">

                    <section class="bg-[#7d2ae8] text-white py-20 text-center w-screen">
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">My Services</h1>
                        <p class="text-lg md:text-xl max-w-xl mx-auto">I help businesses grow with powerful, user-friendly, and modern websites.</p>
                    </section>

                    <section class="py-16 px-6 md:px-20">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

                            <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-[1.03] transition">
                                <h2 class="text-xl font-semibold mb-3">Website Development</h2>
                                <p class="text-gray-600 mb-4">Custom-designed websites tailored to your brand. Fully responsive and fast-loading for all devices.</p>
                                <p class="text-[#7d2ae8] font-bold">Starts at ₹1,999</p>
                            </div>

                            <div class="bg-white rounded-2xl shadow-md p-6 hover:scale-[1.03] hover:shadow-lg transition">
                                <h2 class="text-xl font-semibold mb-3">E-commerce Solutions</h2>
                                <p class="text-gray-600 mb-4">Online store setup with product listings, secure payments, and admin dashboard.</p>
                                <p class="text-[#7d2ae8] font-bold">Starts at ₹3,999</p>
                            </div>

                            <div class="bg-white rounded-2xl shadow-md p-6 hover:scale-[1.03] hover:shadow-lg transition">
                                <h2 class="text-xl font-semibold mb-3">Business/Portfolio Sites</h2>
                                <p class="text-gray-600 mb-4">Professional showcase websites for your work, business, or personal brand.</p>
                                <p class="text-[#7d2ae8] font-bold">Starts at ₹1,999</p>
                            </div>

                            <div class="bg-white rounded-2xl shadow-md p-6 hover:scale-[1.03] hover:shadow-lg transition">
                                <h2 class="text-xl font-semibold mb-3">Landing Page Design</h2>
                                <p class="text-gray-600 mb-4">High-converting landing pages for product launches, marketing campaigns, or lead generation.</p>
                                <p class="text-[#7d2ae8] font-bold">Starts at ₹1,999</p>
                            </div>

                            <div class="bg-white rounded-2xl shadow-md p-6 hover:scale-[1.03] hover:shadow-lg transition">
                                <h2 class="text-xl font-semibold mb-3">Website Redesign</h2>
                                <p class="text-gray-600 mb-4">Upgrade your outdated site with a modern, clean, and mobile-optimized look.</p>
                                <p class="text-[#7d2ae8] font-bold">Starts at ₹1,499</p>
                            </div>

                            <div class="bg-white rounded-2xl shadow-md p-6 hover:scale-[1.03] hover:shadow-lg transition">
                                <h2 class="text-xl font-semibold mb-3">Bug Fixing & Optimization</h2>
                                <p class="text-gray-600 mb-4">Fix errors, improve load speed, and make your site SEO-friendly for better performance.</p>
                                <p class="text-[#7d2ae8] font-bold">Starts at ₹999</p>
                            </div>
                        </div>
                    </section>

                    <section class="bg-[#7d2ae8] text-white text-center py-16 px-4">
                        <h2 class="text-3xl font-bold mb-4">Ready to work with me?</h2>
                        <p class="text-lg mb-6">Let’s build something amazing together. Reach out now for a free consultation!</p>
                        <a href="tel:+917905064957" class="inline-block bg-white text-[#7d2ae8] font-semibold px-6 py-3 rounded-full hover:bg-cyan-500 hover:scale-[1.03] active:scale-90 transition">Call Now: 7905064957</a>
                    </section>

                </div>

        </div>
    )
}
"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { useState } from "react";

export const Contact = () => {

    const [isMessageSent, setIsMessageSent] = useState(false)

    const formSchema = z.object({
        name: z.string().min(2, { message: "minimum of 2 characters" }),
        email: z.string().email(),
        phone: z.string().min(11, { message: "minimum of 11 digits" }),
        message: z.string().min(3, { message: "minimum of 3 characters" }),
    })



    type FormValues = z.input<typeof formSchema>;



    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    const onSubmit = (values: FormValues) => {
        console.log({ values });
        setIsMessageSent(true);
    };

    return (
        <div className=" w-full">
            <section className="bg-blue-700 text-white text-center py-20 w-full">
                <div className="container mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg mb-8">We are here to help you with all your HR needs. Feel free to reach out to us!</p>
                </div>
            </section>
            <section className="py-16 bg-white text-center">
                <div className="container mx-auto max-w-xl">
                    {
                        isMessageSent ? (
                            <div className="bg-blue-50 p-8 rounded-lg shadow-lg text-center ">
                                <h3 className="text-3xl font-bold text-blue-700 mb-4">Thank You!</h3>
                                <p className="text-lg text-slate-700 mb-6">Your message has been sent successfully. We will get back to you shortly.</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-12 h-12 mx-auto text-green-500"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="mt-6 text-blue-700 underline cursor-pointer">
                                    <a href="/">Back to Home</a>
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-4xl font-bold text-blue-700 mb-8">Contact Us</h2>

                                <Form {...form} >
                                    <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-8 w-full px-3 lg:px-0'>


                                        <FormField
                                            control={form.control}
                                            name='name'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="block text-left text-slate-700 font-bold ">Name</FormLabel>
                                                    <FormControl className="w-full">
                                                        <input className="w-full p-4 border border-slate-300 rounded-lg" disabled={false} placeholder='john doe' {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name='email'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="block text-left text-slate-700 font-bold">Email</FormLabel>
                                                    <FormControl>
                                                        <input className="w-full p-4 border border-slate-300 rounded-lg" disabled={false} placeholder='joe@gmail.com' {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='phone'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="block text-left text-slate-700 font-bold">Phone</FormLabel>
                                                    <FormControl>
                                                        <input className="w-full p-4 border border-slate-300 rounded-lg" disabled={false} placeholder='08065..' {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='message'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="block text-left text-slate-700 font-bold">Message</FormLabel>
                                                    <FormControl>
                                                        <textarea className="w-full p-4 border border-slate-300 rounded-lg" disabled={false} placeholder='your message ...' {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />



                                        <Button disabled={false} className=' bg-blue-700 text-white px-6 py-3 rounded-lg font-bold w-full hover:bg-blue-800' type='submit'>
                                            Send Message
                                        </Button>
                                    </form>
                                </Form>
                            </>
                        )
                    }


                </div>
            </section>
            <section className="py-16 bg-slate-100 text-center">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Information</h2>
                        <p className="text-slate-700 mb-4">Address: 123 HR Solutions St., Business City, BC 45678</p>
                        <p className="text-slate-700 mb-4">Phone: (123) 456-7890</p>
                        <p className="text-slate-700 mb-4">Email: contact@hrsolutions.com</p>
                    </div>
                    <div className="md:w-1/2">
                        <Image src="/map.svg" alt="Map" width={500} height={300} /> {/* Add a real map if desired */}
                    </div>
                </div>
            </section>
        </div>
    )
};
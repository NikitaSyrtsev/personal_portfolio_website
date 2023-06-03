import React from "react";
import photo2 from "../assets/photo.jpg";

const About = () => {
    return (
        <section className="section bg-tertiary" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                    <img
                        className="object-cover w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
                        src={photo2}
                        alt=""
                    />
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                                Nikita Syrtsev
                            </h2>
                            <p className="mb-4 text-accent">Web-developer</p>
                            <hr className="mb-8 opacity-5" />
                            <p className="mb-8">
                                A year of experience studying web programming. I started by
                                creating a CSS and JS layouts. Now I actively use frameworks and
                                libraries.
                            </p>
                            <p className="mb-8">
                                I have worked with React.js, Next.js, TypeScript,
                                Node.js and Tailwind.css. Currently I study Python and Flask for
                                improvement of my backend abilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

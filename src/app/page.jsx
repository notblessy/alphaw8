"use client";

import { Carousel } from "@mantine/carousel";
import { GiWeightScale } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { IoBarbell, IoFitnessSharp } from "react-icons/io5";

import Image from "next/image";
import { Blockquote, Text } from "@mantine/core";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/09/61/73/56/360_F_961735659_mHVxUAWurhG75DDJli60g1d7bUWcXRit.jpg')",
        }}
      >
        <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">
          AlphaW8
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Elevate your fitness game with personalized coaching tailored for
          results.
        </p>
        <div className="mt-8 w-full h-auto max-w-4xl px-4">
          <iframe
            className="w-full h-96"
            src="https://www.youtube.com/embed/X0xbNUMZCvk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </section>

      {/* Photo Slider */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Carousel
            height={200}
            slideSize="20%"
            slideGap="md"
            align="start"
            loop
          >
            <Carousel.Slide>
              <Image
                src="https://t4.ftcdn.net/jpg/02/51/45/49/360_F_251454966_MSoiZITSgkSgIs2qGr1SnfJOYdhd6ieJ.jpg"
                width={400}
                height={200}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="https://media.gettyimages.com/id/1347191252/photo/man-with-battle-ropes-in-a-gym.jpg?s=612x612&w=gi&k=20&c=nneKMneQJnBrm5mm5I65DN2XnugpBixiTBbfy-UEblI="
                width={400}
                height={200}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="https://png.pngtree.com/background/20230528/original/pngtree-dark-gym-with-equipments-picture-image_2773570.jpg"
                width={400}
                height={200}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsWCjlRRwG_56ks1spvafDvLvlV6eGH-t7Q&s"
                width={400}
                height={200}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="https://img.stablecog.com/insecure/2560w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vNTRjYjRiYjItYWFiOC00MzNjLWJhZWQtY2M5YzA5ZGI4NTU0LmpwZWc.webp"
                width={400}
                height={200}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="https://www.shutterstock.com/image-photo/barbell-fitness-training-gym-sports-600nw-2139742761.jpg"
                width={400}
                height={200}
              />
            </Carousel.Slide>
          </Carousel>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-algray">
        <div className="container max-w-2xl -md mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">GETTING TO KNOW</h2>
          <h2 className="text-5xl font-bold mb-4">ALPHAW8</h2>
          <Text fz="20px" lh="md" className="text-gray-300 mb-4">
            Transform your body and mindset with a fitness program designed for
            champions.
          </Text>
          <Text fz="20px" lh="md" className="text-gray-300 mb-4">
            At <b>AlphaW8</b>, we believe in building strength, resilience, and
            confidence through unparalleled guidance and motivation.
          </Text>
          <Text fz="20px" lh="md" className="text-gray-300 mb-4">
            Our coaches combine science-backed strategies with personalized
            attention to ensure every workout brings you closer to your dream
            physique.
          </Text>
          <Blockquote color="dark" mb={20} cite="– Someone Strong">
            Take the first step toward a healthier, stronger you.
          </Blockquote>
          <Text fz="20px" lh="md" className="text-gray-300 mb-4">
            Take the first step toward a healthier, stronger you. <b>AlphaW8</b>
            is more than a fitness program—it's a lifestyle dedicated to
            unlocking your true potential.
          </Text>
          <p className="text-gray-300 mb-6"></p>
          <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 font-medium">
            Book a Call
          </button>
        </div>
      </section>

      {/* Coaching Programs */}
      <section className="py-12 bg-algray border-t border-b border-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Coaching Programs
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Discover our transformative coaching options designed to help you
            excel. Each program is tailored to provide the best results for your
            fitness journey.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Weight Loss Program",
                description:
                  "Achieve your ideal weight with a plan that focuses on effective, sustainable strategies.",
                icon: () => (
                  <GiWeightScale size="64px" className="text-red-600" />
                ),
              },
              {
                title: "Strength Building",
                description:
                  "Enhance your strength with personalized training programs that challenge and motivate.",
                icon: () => (
                  <IoIosFitness size="64px" className="text-red-600" />
                ),
              },
              {
                title: "Endurance Training",
                description:
                  "Boost your stamina and resilience with expert guidance and well-structured routines.",
                icon: () => (
                  <IoFitnessSharp size="64px" className="text-red-600" />
                ),
              },
            ].map((program) => (
              <div key={program.title} className="bg-gray-800 p-6 text-center">
                <div className="flex justify-center">
                  <program.icon />
                </div>
                <h3 className="text-xl font-bold mt-4">{program.title}</h3>
                <p className="text-gray-300 mt-2">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs and Pricing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Programs & Pricing
          </h2>
          <div className="flex flex-row gap-6 items-center justify-center">
            {[
              {
                title: "Kickstart Fitness",
                description:
                  "Perfect for beginners looking to jumpstart their fitness journey.",
                price: "$50",
                features: [
                  "Personalized plan to meet your needs.",
                  "Weekly check-ins to track progress.",
                  "Access to an exclusive online community.",
                  "Email support during business hours.",
                  "Receive tips and resources in your inbox.",
                  "Monthly personal growth webinars.",
                  "Priority discounts on future plans.",
                  "Free introductory course on goal setting.",
                ],
                icon: <IoBarbell />,
              },
              {
                title: "Next Level Boost",
                description:
                  "For those ready to take their fitness to the next level.",
                price: "$100",
                features: [
                  "Customized plan with extra features.",
                  "Daily check-ins for real-time feedback.",
                  "Comprehensive diet plan and recipes.",
                  "24/7 chat support with your coach.",
                  "Weekly progress tracking and analysis.",
                  "Weekly private live coaching sessions.",
                  "Exclusive offers and discounts.",
                  "Access to member-only events and webinars.",
                ],
                icon: <IoFitnessSharp />,
              },
            ].map((program) => (
              <div
                key={program.title}
                className="bg-gray-950 border border-gray-700 p-6 w-[400px]"
              >
                <h3 className="text-xl font-bold flex items-end gap-3 mb-2">
                  <p className="text-5xl font-semibold">{program.price}</p>
                  {program.title}
                </h3>
                <Text
                  fz="14px"
                  lh="md"
                  c="dimmed"
                  className="text-gray-300 mb-8"
                >
                  {program.description}
                </Text>
                <ul className="text-gray-400 space-y-3 mb-12">
                  {program.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm md:text-base flex gap-3 items-center"
                    >
                      <FaCheckCircle /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2">
                  Book a Call
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
          <div className="space-y-6">
            {[
              {
                question: "How do I start?",
                answer:
                  "You can start by booking a call with us. We'll discuss your goals and create a plan tailored to you.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Refunds are handled on a case-by-case basis. Please contact our support for more information.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-800 p-4">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} AlphaW8. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

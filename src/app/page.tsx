"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import SplitAboutFeatures from '@/components/sections/about/SplitAboutFeatures';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { ChefHat, Sparkles, Wine, Users, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="mediumSizeExtraSmallSpacing"
      background="aurora"
      cardStyle="solid-accent-light"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Anonime"
          button={{
            text: "Reserve Table",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Anonime"
          description="Experience culinary excellence in an intimate setting where tradition meets innovation. Every dish tells a story of passion and precision."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765960675345-y2u0h80s.jpg"
          imageAlt="Elegant Anonime restaurant interior with warm ambient lighting"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutFeatures
          title="About"
          features={[
            {
              text: "Exceptional culinary crafted with finest ingredients and time-honored techniques",
              icon: ChefHat
            },
            {
              text: "Intimate atmosphere designed for unforgettable dining experiences",
              icon: Sparkles
            },
            {
              text: "Expert sommelier selection paired with every course",
              icon: Wine
            },
            {
              text: "Personalized service anticipating every guest need",
              icon: Users
            },
            {
              text: "Call if you want know more",
              icon: Phone
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardTen
          title="Signature Menu"
          description="Discover our most celebrated dishes, each crafted with meticulous attention to flavor and presentation"
          tag="Menu"
          features={[
            {
              id: "1",
              title: "Appetizers",
              description: "Begin your journey with our curated selection of small plates",
              reverse: false,
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765960676468-1rzdh0ms.jpg"
              },
              items: [
                {
                  icon: CheckCircle,
                  text: "Fresh seasonal ingredients"
                },
                {
                  icon: CheckCircle,
                  text: "Artistic plating presentation"
                },
                {
                  icon: CheckCircle,
                  text: "Flavor-forward combinations"
                }
              ]
            },
            {
              id: "2",
              title: "Main Courses",
              description: "The heart of our menu featuring premium proteins and vegetables",
              reverse: true,
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765960677896-vv42e14d.jpg"
              },
              items: [
                {
                  icon: CheckCircle,
                  text: "Premium sourced proteins"
                },
                {
                  icon: CheckCircle,
                  text: "Precise cooking techniques"
                },
                {
                  icon: CheckCircle,
                  text: "Harmonious flavor profiles"
                }
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Anonime completely transformed my understanding of what fine dining can be. Every detail, from the food to the service, was executed flawlessly. I return whenever I have a special occasion to celebrate."
          rating={5}
          author="Michael Torres, Food Critic"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765960679838-otu6mfgq.jpg",
              alt: "Michael Torres"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765960680940-5gee6a46.jpg",
              alt: "Sophie Leclerc"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765960681953-ed8hg1x5.jpg",
              alt: "James Bennett"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765960683113-ctpdpiyu.jpg",
              alt: "Emma Rodriguez"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Reserve Your Experience"
          ctaDescription="Book your table at Anonime and prepare for an unforgettable culinary journey. Limited seatings available daily."
          ctaButton={{
            text: "Reserve Now",
            href: "tel:+1234567890"
          }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "How far in advance should I make a reservation?",
              content: "We recommend reserving 2-4 weeks in advance for optimal availability, though we do accommodate last-minute requests based on current seating."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely. Please inform us of any dietary preferences or allergies when booking, and our chef will create a customized menu experience for you."
            },
            {
              id: "3",
              title: "What is your dress code?",
              content: "Smart casual to formal attire recommended. Jackets are appreciated for evening service. Please contact us for any specific dress code questions."
            },
            {
              id: "4",
              title: "Do you offer private dining events?",
              content: "Yes, we host private events and special occasions. Contact our events team to discuss your needs and customize a memorable experience."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Anonime"
          title="Fine dining experiences crafted with passion and precision"
          columns={[
            {
              title: "Restaurant",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Menu",
                  href: "#menu"
                },
                {
                  label: "Reservations",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Information",
              items: [
                {
                  label: "Hours",
                  href: "#"
                },
                {
                  label: "Location",
                  href: "#"
                },
                {
                  label: "Private Events",
                  href: "#contact"
                }
              ]
            }
          ]}
          contactItems={[
            {
              icon: Phone,
              text: "+1 (555) 123-4567"
            },
            {
              icon: Mail,
              text: "hello@anonime.com"
            },
            {
              icon: MapPin,
              text: "123 Culinary Street, Gourmet City, GC 12345"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
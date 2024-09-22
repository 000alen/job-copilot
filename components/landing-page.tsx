"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  CalendarIcon,
  CheckCircleIcon,
  RocketIcon,
  BrainCircuitIcon,
  TargetIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "hero", label: "Home" },
  { id: "features", label: "Features" },
  { id: "success-rate", label: "Success Rate" },
  { id: "testimonials", label: "Testimonials" },
  { id: "pricing", label: "Pricing" },
  { id: "cta", label: "Get Started" },
];

export function LandingPageComponent() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 snap-y snap-mandatory overflow-y-scroll h-screen relative">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <RocketIcon className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900">
                Job Copilot
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {sections.slice(1, -1).map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleSmoothScroll(e, section.id)}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </nav>
            <div className="flex space-x-4">
              <Link href="/auth">
                <Button
                  variant="outline"
                  data-ph-capture-attribute-signup-attempt
                >
                  Log in
                </Button>
              </Link>

              <Link href="/auth">
                <Button data-ph-capture-attribute-signup-attempt>
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <nav className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => handleSmoothScroll(e, section.id)}
                className={`w-3 h-3 rounded-full block transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={section.label}
              />
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-grow pt-16">
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-purple-50 snap-start snap-always"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Your AI Copilot for Job Success
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Navigate your career journey with ease. Job Copilot uses AI to
              optimize your applications, prepare you for interviews, and boost
              your chances of landing your dream job.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/job/1">
                <Button size="lg" data-ph-capture-attribute-demo-cta>
                  See Demo
                </Button>
              </Link>

              <Link href="/auth">
                <Button
                  size="lg"
                  variant="outline"
                  data-ph-capture-attribute-signup-attempt
                >
                  Start for Free
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="min-h-screen flex items-center justify-center py-20 bg-white snap-start snap-always"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Supercharge Your Job Search
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BrainCircuitIcon className="mr-2 h-6 w-6 text-primary" />
                    AI-Powered Profile Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Our AI analyzes your profile and tailors it to match job
                  requirements, increasing your visibility to recruiters.
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <CalendarIcon className="mr-2 h-6 w-6 text-primary" />
                    Smart Application Tracker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Stay organized with our intuitive dashboard. Track application
                  statuses, deadlines, and follow-ups effortlessly.
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <TargetIcon className="mr-2 h-6 w-6 text-primary" />
                    Interview Ace
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Practice with AI-generated interview questions tailored to
                  your target roles. Receive instant feedback to improve your
                  responses.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="success-rate"
          className="min-h-screen flex items-center justify-center py-20 bg-gray-50 snap-start snap-always"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Boost Your Application Success Rate
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Our AI analyzes job descriptions and optimizes your
                  applications, significantly increasing your interview chances.
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500 mr-2">
                    Average Success Rate
                  </span>
                  <Progress value={85} className="h-2 w-48" />
                  <span className="text-sm font-medium ml-2 text-primary">
                    85%
                  </span>
                </div>
                <Link href="/job/1">
                  <Button data-ph-capture-attribute-demo-cta>
                    Optimize My Applications
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="min-h-screen flex items-center justify-center py-20 bg-white snap-start snap-always"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg">
                <CardContent className="pt-6">
                  <p className="italic mb-4 text-gray-600">
                    &quot;Job Copilot&rsquo;s AI-powered suggestions helped me
                    tailor my applications perfectly. I landed interviews at top
                    tech companies and eventually my dream job!&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 mr-4 flex items-center justify-center">
                      <UserIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alex Chen</h4>
                      <p className="text-sm text-gray-500">
                        Software Engineer at TechGiant
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="pt-6">
                  <p className="italic mb-4 text-gray-600">
                    &quot;The interview practice feature was a game-changer. It
                    boosted my confidence, and I felt fully prepared for every
                    interview. Highly recommend!&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 mr-4 flex items-center justify-center">
                      <UserIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Samantha Lee
                      </h4>
                      <p className="text-sm text-gray-500">
                        Marketing Manager at BrandBoost
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="min-h-screen flex items-center justify-center py-20 bg-gray-50 snap-start snap-always"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Free
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold mb-4 text-gray-900">
                    $0
                    <span className="text-xl font-normal text-gray-600">
                      /month
                    </span>
                  </p>
                  <ul className="text-left mb-6 space-y-2">
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />{" "}
                      Basic profile optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />{" "}
                      Up to 5 job applications/month
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />{" "}
                      Limited interview question bank
                    </li>
                  </ul>
                  <Link href="/job/1">
                    <Button
                      size="lg"
                      className="w-full"
                      data-ph-capture-attribute-demo-cta
                    >
                      See Demo
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Pro
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold mb-4 text-gray-900">
                    $19.99
                    <span className="text-xl font-normal text-gray-600">
                      /month
                    </span>
                  </p>
                  <ul className="text-left mb-6 space-y-2">
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />{" "}
                      Advanced AI profile optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />{" "}
                      Unlimited job applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />{" "}
                      Full interview question bank
                    </li>
                  </ul>
                  <Link href="/auth">
                    <Button
                      size="lg"
                      className="w-full"
                      data-ph-capture-attribute-signup-attempt
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="min-h-screen flex items-center justify-center bg-primary text-white py-20 snap-start snap-always"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Job Search?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of job seekers who have found success with Job
              Copilot.
            </p>

            <Link href="/job/1">
              <Button
                size="lg"
                variant="secondary"
                data-ph-capture-attribute-demo-cta
              >
                See Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 snap-start snap-always">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Job Copilot</h3>
              <p className="text-gray-400">Your AI-powered career companion</p>
            </div>
          </div>

          <div className="mt-8 pt-8text-center">
            <p>
              &copy; {new Date().getFullYear()} Job Copilot. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

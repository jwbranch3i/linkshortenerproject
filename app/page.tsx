import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignUpButton } from "@clerk/nextjs";
import { Link2, BarChart3, Shield, Zap, Globe, Users } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  const features = [
    {
      icon: Link2,
      title: "Instant Short Links",
      description: "Transform long URLs into short, memorable links in seconds. Share them anywhere with ease.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      description: "Get detailed insights on clicks, geographic data, and referral sources for all your links.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your links are protected with enterprise-grade security. 99.9% uptime guaranteed.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Ultra-fast redirects ensure your audience reaches their destination instantly.",
    },
    {
      icon: Globe,
      title: "Custom Domains",
      description: "Use your own domain for branded short links that build trust with your audience.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team to manage and organize all your shortened links.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 sm:py-32">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">
            Modern Link Management
          </Badge>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
            Shorten, Track, and Optimize Your Links
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            The most powerful link shortener for individuals and teams. 
            Create branded short links, track engagement, and boost your marketing efforts.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="h-12 rounded-full px-8 text-base" asChild>
              <SignUpButton>
                Get Started Free
              </SignUpButton>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 rounded-full px-8 text-base"
              asChild
            >
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Powerful features designed to help you create, manage, and track your links effectively.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-zinc-800 bg-zinc-950/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-zinc-50">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-zinc-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 sm:py-32">
        <Card className="border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950">
          <CardHeader className="text-center space-y-4 py-12">
            <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to get started?
            </CardTitle>
            <CardDescription className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Join thousands of users who trust us with their links. Start shortening for free today.
            </CardDescription>
            <div className="pt-4">
              <Button size="lg" className="h-12 rounded-full px-8 text-base" asChild>
                <SignUpButton>
                  Create Your Account
                </SignUpButton>
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
}

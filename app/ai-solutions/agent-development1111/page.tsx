
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Rocket, BarChart3,  Shield, Lightbulb, Brain } from "lucide-react";



export const metadata: Metadata = {
  title: "AI Agent Development Company - Custom AI Solutions",
  description: "Transform your business with intelligent AI agents that automate processes, enhance customer experiences, and drive growth. We specialize in developing custom AI solutions.",
  keywords: "AI agent development, custom AI solutions, business automation, AI integration, intelligent agents",
  alternates: {
    canonical: "https://www.marqait.com/agent-development"
  },
  openGraph: {
    title: "AI Agent Development Company - Custom AI Solutions",
    description: "Transform your business with intelligent AI agents that automate processes, enhance customer experiences, and drive growth. We specialize in developing custom AI solutions.",
    url: "https://www.marqait.com/agent-development",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Development Company - Custom AI Solutions",
    description: "Transform your business with intelligent AI agents that automate processes, enhance customer experiences, and drive growth. We specialize in developing custom AI solutions."
  }
};

export default function AIAgentDevelopment() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f051a] w-full overflow-x-hidden">
      {/* Navigation Breadcrumb */}
       {/* Navigation Breadcrumb */}
      <div className="container mx-auto px-4 pt-6 pb-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-gray-600">›</span>
          <Link href="/solutions" className="hover:text-white transition-colors">
            AI Solutions
          </Link>
          <span className="text-gray-600">›</span>
          <span className="text-white">AI For Ecommerce</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                <span className="block">AI for Ecommerce: The</span>
                <span className="block mt-1">Future of Online Stores</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-lg text-gray-200 leading-relaxed max-w-xl">
                At Marqait AI, we provide AI ecommerce solutions that help online stores of all sizes achieve higher 
                conversions, stronger customer loyalty, and smarter growth. Whether it&apos;s Shopify AI integrations, 
                AI-powered ecommerce chatbots, or dynamic pricing systems, our tools give your business a competitive edge.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center px-8 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>

            {/* Right Column - 3D Ecommerce Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative max-w-md lg:max-w-lg">
                <Image
                  src="/agent-devlopment/SEO illustration.png"
                  alt="AI for Ecommerce - 3D Online Store with Shopping Bags"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* section1*/}
      <section className="py-20 px-4 bg-[#05000A]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                What Is{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Agent Development?
                </span>
              </h2>

              <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  AI agent development involves creating intelligent software systems that can perceive their 
                  environment, make decisions, and take actions to achieve specific goals. These autonomous agents use 
                  machine learning, natural language processing, and advanced algorithms to simulate human-like 
                  reasoning and behavior.
                </p>

                <p>
                  Our AI agents are designed to handle complex tasks, learn from interactions, and continuously improve 
                  their performance. They can operate 24/7, process vast amounts of data, and provide consistent, 
                  accurate responses across multiple channels.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/agent-devlopment/Rectangle 427321330.png"
                  alt="AI Agent Development - Woman working with AI interface"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-pink-900/10"></div>
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-600/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section11 */}
      <section className="py-20 px-4 bg-[#05000A]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
<div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/agent-devlopment/Rectangle 427321330.png"
                  alt="AI Agent Development - Woman working with AI interface"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-pink-900/10"></div>
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-600/20 rounded-full blur-lg"></div>
            </div>


           

            {/* Right Column - Image */}
             <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                What Is{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Agent Development?
                </span>
              </h2>

              <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  AI agent development involves creating intelligent software systems that can perceive their 
                  environment, make decisions, and take actions to achieve specific goals. These autonomous agents use 
                  machine learning, natural language processing, and advanced algorithms to simulate human-like 
                  reasoning and behavior.
                </p>

                <p>
                  Our AI agents are designed to handle complex tasks, learn from interactions, and continuously improve 
                  their performance. They can operate 24/7, process vast amounts of data, and provide consistent, 
                  accurate responses across multiple channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom AI Agents Section */}
      <section className="py-20 px-4 bg-[#05000A]">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              At Marqait AI, We build custom AI Agents
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Marqait AI, we specialize in building powerful, custom AI Agents designed to transform the way businesses 
              operate and interact with customers. Our AI Agents solutions go beyond simple automation. They are built to 
              learn, adapt, and deliver measurable results.
            </p>
          </div>

          {/* AI Agents Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Conversational AI agents */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/agent-devlopment/speech-bubble-conversation-talk-message-graphic.jpg"
                  alt="Conversational AI agents"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Conversational AI agents</h3>
              <p className="text-gray-300 leading-relaxed">
                Our conversational AI agents, including chatbots, voicebots, and virtual 
                assistants, that help businesses deliver seamless and personalised 
                communication. These agents handle customer queries, provide real-time 
                support, and even manage routine tasks such as bookings, order tracking, and FAQs.
              </p>
            </div>

            {/* Intelligent process automation agents */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/agent-devlopment/programming-background-with-html.jpg"
                  alt="Intelligent process automation agents"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent process automation agents</h3>
              <p className="text-gray-300 leading-relaxed">
                Our intelligent process automation (IPA) agents streamline complex 
                workflows across industries. From automotive back office tasks to 
                managing data entry, approvals, and compliance checks, they deliver 
                efficiency and accuracy. Whether in HR, finance, or supply chain, our 
                agents help organisations work smarter and faster.
              </p>
            </div>

            {/* Decision-making AI agents */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/agent-devlopment/doctor-from-future-concept.jpg"
                  alt="Decision-making AI agents"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Decision-making AI agents</h3>
              <p className="text-gray-300 leading-relaxed">
                Our decision-making agents analyze data to uncover patterns and deliver 
                actionable insights. They support predictive analytics, risk assessment, 
                and strategic planning, helping businesses make smarter decisions, stay 
                competitive, and respond quickly to market changes.
              </p>
            </div>

            {/* Industry-specific AI agents */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/agent-devlopment/37416.jpg"
                  alt="Industry-specific AI agents"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Industry-specific AI agents</h3>
              <p className="text-gray-300 leading-relaxed">
                We design industry-specific AI agents for diverse needs. In healthcare, 
                they improve patient care and workflows; in retail, they enhance customer 
                experience and inventory; in finance, they handle fraud detection and 
                compliance. For startups, our agents streamline operations and drive 
                growth. Whatever the industry, we deliver AI solutions that create impact.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* Why Choose Marqait AI Section */}
<section className="py-20 px-4 bg-[#05000A]">
  <div className="container mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Why Choose Marqait AI for{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          AI Agent Development?
        </span>
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        At Marqait AI, we go beyond building AI agents. We create intelligent, future-ready AI solutions that 
        seamlessly integrate into your business ecosystem. Companies across industries trust us because we 
        blend cutting-edge AI technologies with deep domain expertise to design, develop, and deploy custom AI 
        agents that streamline operations, reduce costs, and enhance customer experiences.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Custom AI Agent Solutions */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Rocket className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Custom AI Agent Solutions</h3>
        <p className="text-gray-300 leading-relaxed">
          Tailored solutions designed specifically for your business needs and objectives.
        </p>
      </div>

      {/* Scalable Architecture */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Scalable Architecture</h3>
        <p className="text-gray-300 leading-relaxed">
          Future-proof systems that grow with your business and adapt to changing requirements.
        </p>
      </div>

      {/* Advanced NLP & ML Integration */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Advanced NLP & ML Integration</h3>
        <p className="text-gray-300 leading-relaxed">
          Cutting-edge natural language processing and machine learning capabilities.
        </p>
      </div>

      {/* Data Security & Compliance */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Data Security & Compliance</h3>
        <p className="text-gray-300 leading-relaxed">
          Enterprise-grade security with full compliance to industry standards.
        </p>
      </div>

      {/* Proven ROI */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group md:col-span-2 lg:col-span-1">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Lightbulb className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Proven ROI</h3>
        <p className="text-gray-300 leading-relaxed">
          Demonstrated return on investment with measurable business impact.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Our AI Agent Development Process Section */}
<section className="py-20 px-4 bg-[#05000A]">
  <div className="container mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Our AI Agent Development Process
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        We follow a strategic and transparent development process to ensure our AI agents deliver 
        measurable business value:
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Column - Process Steps */}
      <div className="space-y-8">
        {/* Step 01 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">01</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Discovery & Requirement Analysis</h3>
            <p className="text-gray-300">Understanding your challenges and goals</p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">02</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">AI Agent Design</h3>
            <p className="text-gray-300">Crafting workflows, decision-making models, and interaction logic</p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">03</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Development & Training</h3>
            <p className="text-gray-300">Building and training AI models with real-world data</p>
          </div>
        </div>

        {/* Step 04 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">04</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Integration</h3>
            <p className="text-gray-300">Connecting AI agents seamlessly with your apps, CRMs, and platforms</p>
          </div>
        </div>

        {/* Step 05 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">05</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Testing & Optimization</h3>
            <p className="text-gray-300">Ensuring performance, scalability, and compliance</p>
          </div>
        </div>

        {/* Step 06 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">06</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Deployment & Support</h3>
            <p className="text-gray-300">Continuous monitoring, updates, and improvements</p>
          </div>
        </div>
      </div>

      {/* Right Column - Illustration */}
      <div className="relative">
        <div className="relative">
          <Image
            src="/agent-devlopment/SEO illustration.png"
            alt="AI Agent Development Process Illustration"
            width={600}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pink-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </div>
  </div>
</section>

{/* Industries We Serve With AI Agents Section */}
<section className="py-20 px-4 bg-[#05000A]">
  <div className="container mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Industries We Serve With AI Agents
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Marqait AI develops industry-focused AI agents that adapt to different business 
        environments:
      </p>
    </div>

    {/* Industries Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {/* AI For Healthcare */}
      <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src="/agent-devlopment/medical-banner-with-doctor-wearing-equipment.jpg"
            alt="AI For Healthcare"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">AI For Healthcare</h3>
            <p className="text-gray-200 text-sm">
              Patient care automation, appointment scheduling, and medical data analysis
            </p>
          </div>
        </div>
      </div>

      {/* AI For Startups */}
      <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src="/agent-devlopment/Ai for startups.png"
            alt="AI For Startups"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">AI For Startups</h3>
            <p className="text-gray-200 text-sm">
              Streamline operations, automate workflows, and accelerate growth
            </p>
          </div>
        </div>
      </div>

      {/* AI For Customer Service */}
      <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src="/agent-devlopment/colleagues-working-together-call-center-office-with-coffee.jpg"
            alt="AI For Customer Service"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">AI For Customer Service</h3>
            <p className="text-gray-200 text-sm">
              24/7 support, intelligent chatbots, and automated query resolution
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Row - 2 Cards Centered */}
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* AI For Retail */}
      <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src="/agent-devlopment/digital-environment-scene.jpg"
            alt="AI For Retail"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">AI For Retail</h3>
            <p className="text-gray-200 text-sm">
              Inventory management, personalized recommendations, and customer insights
            </p>
          </div>
        </div>
      </div>

      {/* AI For Finance & Banking */}
      <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src="/agent-devlopment/AI for finance.png"
            alt="AI For Finance & Banking"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">AI For Finance & Banking</h3>
            <p className="text-gray-200 text-sm">
              Risk assessment, fraud detection, and automated financial advisory
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Benefits of Our AI Agent Development Section */}
<section className="py-20 px-4 bg-[#05000A] relative overflow-hidden">
  {/* Background gradient effects */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-600/20 rounded-full blur-2xl"></div>
  </div>

  <div className="container mx-auto max-w-7xl relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Benefits of Our AI Agent Development
      </h2>
    </div>

    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
      {/* Left Column - Benefits */}
      <div className="space-y-8">
        {/* Faster Decisions */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            <h3 className="text-xl font-bold text-white">FASTER DECISIONS</h3>
          </div>
          <p className="text-gray-300 ml-7">
            Data-driven insights for real-time problem-solving
          </p>
        </div>

        {/* Personalized Experience */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            <h3 className="text-xl font-bold text-white">PERSONALIZED EXPERIENCE</h3>
          </div>
          <p className="text-gray-300 ml-7">
            Adaptive AI agents that understand users better
          </p>
        </div>

        {/* Enhanced Efficiency */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            <h3 className="text-xl font-bold text-white">ENHANCED EFFICIENCY</h3>
          </div>
          <p className="text-gray-300 ml-7">
            Streamlined workflows and automated processes
          </p>
        </div>
      </div>

      {/* Center Column - Image */}
      <div className="flex justify-center">
        <div className="relative">
          <Image
            src="/agent-devlopment/benefits img.png"
            alt="Benefits of AI Agent Development"
            width={400}
            height={500}
            className="w-full max-w-sm h-auto object-contain"
            priority
          />
          
          {/* Decorative glow around image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-2xl scale-110 -z-10"></div>
        </div>
      </div>

      {/* Right Column - Benefits */}
      <div className="space-y-8">
        {/* 24/7 Availability */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            <h3 className="text-xl font-bold text-white">24/7 AVAILABILITY</h3>
          </div>
          <p className="text-gray-300 ml-7">
            Always-on virtual support for customers and operations
          </p>
        </div>

        {/* Cost Reduction */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            <h3 className="text-xl font-bold text-white">COST REDUCTION</h3>
          </div>
          <p className="text-gray-300 ml-7">
            Automating repetitive tasks saves time and resources
          </p>
        </div>

        {/* Business Scalability */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            <h3 className="text-xl font-bold text-white">BUSINESS SCALABILITY</h3>
          </div>
          <p className="text-gray-300 ml-7">
            Handle increasing workloads without additional manpower
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Frequently Asked Questions Section */}
<section className="py-20 px-4 bg-[#05000A]">
  <div className="container mx-auto max-w-4xl">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        Everything you need to know about our AI agent development
      </p>
    </div>

    {/* FAQ Items */}
    <div className="space-y-6">
      {/* FAQ 1 */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">
          What is AI Agent Development?
        </h3>
        <p className="text-gray-300 leading-relaxed">
          AI Agent Development involves creating intelligent software systems that can perceive their environment, 
          make autonomous decisions, and take actions to achieve specific goals. Our AI agents use machine learning, 
          natural language processing, and advanced algorithms to automate processes, enhance customer experiences, 
          and deliver measurable business results.
        </p>
      </div>

      {/* FAQ 2 */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">
          How long does it take to develop a custom AI agent?
        </h3>
        <p className="text-gray-300 leading-relaxed">
          The development timeline varies depending on complexity and requirements. Simple conversational agents 
          can be developed in 4-6 weeks, while complex enterprise-level AI agents with advanced decision-making 
          capabilities may take 3-6 months. We provide detailed project timelines during our consultation phase.
        </p>
      </div>

      {/* FAQ 3 */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">
          Can AI agents integrate with existing business systems?
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Yes, our AI agents are designed to seamlessly integrate with your existing CRMs, ERPs, databases, 
          and third-party applications through APIs and webhooks. We ensure smooth data flow and maintain 
          system compatibility while enhancing your current workflows with intelligent automation.
        </p>
      </div>

      {/* FAQ 4 */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">
          What industries can benefit from AI agent development?
        </h3>
        <p className="text-gray-300 leading-relaxed">
          AI agents benefit virtually every industry including healthcare, finance, retail, manufacturing, 
          real estate, education, and startups. Whether it&apos;s automating customer support, streamlining 
          operations, or enhancing decision-making processes, our custom AI solutions are tailored to 
          meet specific industry requirements and compliance standards.
        </p>
      </div>

      {/* FAQ 5 */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">
          How secure are AI agents and what about data privacy?
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Security and privacy are our top priorities. We implement enterprise-grade security measures including 
          data encryption, secure API connections, and compliance with industry standards like GDPR, HIPAA, and SOC 2. 
          All data processing follows strict privacy protocols, and we provide detailed security documentation for 
          your peace of mind.
        </p>
      </div>
    </div>
  </div>
</section>




{/* Ready to Scale Your Business CTA Section */}
<section className="py-20 px-4 bg-gradient-to-br from-[#05000A] via-purple-900/20 to-[#05000A] relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-600/10 rounded-full blur-2xl"></div>
  </div>

  <div className="container mx-auto max-w-7xl relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Column - Contact Form */}
      <div className="space-y-8">
        {/* Small badge */}
        <div className="inline-flex items-center space-x-2 text-purple-400 text-sm font-medium">
          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
          <span>LET&apos;S CONNECT</span>
          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Scale Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-white font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-white font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Enter Your Company Name"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Enter your Message"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Book Demo
          </button>
        </form>
      </div>

      {/* Right Column - Image */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative">
          <Image
            src="/agent-devlopment/CTA img.png"
            alt="Ready to Scale Your Business"
            width={600}
            height={600}
            className="w-full max-w-lg h-auto object-contain"
            priority
          />
          
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl scale-110 -z-10"></div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
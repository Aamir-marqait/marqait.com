'use client';

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity";
import { Rocket, BarChart3, Shield, Lightbulb, Brain, Zap, Target, Users, Clock, TrendingUp } from "lucide-react";

const iconMap = {
  Rocket, BarChart3, Shield, Lightbulb, Brain, Zap, Target, Users, Clock, TrendingUp
};

interface DynamicPageClientProps {
  page: any;
}

export default function DynamicPageClient({ page }: DynamicPageClientProps) {
  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="w-8 h-8 text-white" /> : <Brain className="w-8 h-8 text-white" />;
  };

  const renderSection = (section: any, index: number) => {
    switch (section._type) {
      case 'textImageSection':
        return (
          <section key={index} className="py-20 px-4 bg-[#05000A]">
            <div className="container mx-auto max-w-7xl">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                section.sectionType === 'imageLeft' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-8 ${section.sectionType === 'imageLeft' ? 'lg:order-2' : ''}`}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {section.heading?.normalText && <span>{section.heading.normalText} </span>}
                    {section.heading?.gradientText && (
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {section.heading.gradientText}
                      </span>
                    )}
                  </h2>
                  <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                    {section.content?.map((paragraph: string, pIndex: number) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                {section.image?.asset && (
                  <div className={`relative ${section.sectionType === 'imageLeft' ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={urlFor(section.image).width(600).height(400).url()}
                        alt={section.image?.alt || section.heading?.normalText || 'Section image'}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-pink-900/10"></div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-600/20 rounded-full blur-lg"></div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      case 'gridSection':
        return (
          <section key={index} className="py-20 px-4 bg-[#05000A]">
            <div className="container mx-auto max-w-7xl">
              {(section.heading || section.description) && (
                <div className="text-center mb-16">
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                      {section.heading}
                    </h2>
                  )}
                  {section.description && (
                    <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                      {section.description}
                    </p>
                  )}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {section.gridItems?.map((item: any, itemIndex: number) => (
                  <div key={itemIndex} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                    {item.image?.asset && (
                      <div className="relative mb-6 overflow-hidden rounded-xl">
                        <Image
                          src={urlFor(item.image).width(400).height(250).url()}
                          alt={item.image?.alt || item.title}
                          width={400}
                          height={250}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'featuresSection':
        return (
          <section key={index} className="py-20 px-4 bg-[#05000A]">
            <div className="container mx-auto max-w-7xl">
              {(section.heading || section.description) && (
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {section.heading?.normalText && <span>{section.heading.normalText} </span>}
                    {section.heading?.gradientText && (
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {section.heading.gradientText}
                      </span>
                    )}
                  </h2>
                  {section.description && (
                    <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                      {section.description}
                    </p>
                  )}
                </div>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.features?.map((feature: any, featureIndex: number) => (
                  <div key={featureIndex} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {renderIcon(feature.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'processSection':
        return (
          <section key={index} className="py-20 px-4 bg-[#05000A]">
            <div className="container mx-auto max-w-7xl">
              {(section.heading || section.description) && (
                <div className="text-center mb-16">
                  {section.heading && (
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                      {section.heading}
                    </h2>
                  )}
                  {section.description && (
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      {section.description}
                    </p>
                  )}
                </div>
              )}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-8">
                  {section.processSteps?.map((step: any, stepIndex: number) => (
                    <div key={stepIndex} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{step.stepNumber}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {section.processImage?.asset && (
                  <div className="relative">
                    <div className="relative">
                      <Image
                        src={urlFor(section.processImage).width(600).height(500).url()}
                        alt={section.processImage?.alt || 'Process illustration'}
                        width={600}
                        height={500}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pink-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      case 'benefitsSection':
        return (
          <section key={index} className="py-20 px-4 bg-[#05000A] relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-600/20 rounded-full blur-2xl"></div>
            </div>
            <div className="container mx-auto max-w-7xl relative z-10">
              {section.heading && (
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {section.heading}
                  </h2>
                </div>
              )}
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                <div className="space-y-8">
                  {section.leftBenefits?.map((benefit: any, benefitIndex: number) => (
                    <div key={benefitIndex} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                        <h3 className="text-xl font-bold text-white">{benefit.title?.toUpperCase()}</h3>
                      </div>
                      <p className="text-gray-300 ml-7">{benefit.description}</p>
                    </div>
                  ))}
                </div>
                {section.centerImage?.asset && (
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src={urlFor(section.centerImage).width(400).height(500).url()}
                        alt={section.centerImage?.alt || 'Benefits illustration'}
                        width={400}
                        height={500}
                        className="w-full max-w-sm h-auto object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-2xl scale-110 -z-10"></div>
                    </div>
                  </div>
                )}
                <div className="space-y-8">
                  {section.rightBenefits?.map((benefit: any, benefitIndex: number) => (
                    <div key={benefitIndex} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                        <h3 className="text-xl font-bold text-white">{benefit.title?.toUpperCase()}</h3>
                      </div>
                      <p className="text-gray-300 ml-7">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );

      case 'faqSection':
        return (
          <section key={index} className="py-20 px-4 bg-[#05000A]">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {section.heading?.normalText && <span>{section.heading.normalText} </span>}
                  {section.heading?.gradientText && (
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {section.heading.gradientText}
                    </span>
                  )}
                </h2>
                {section.description && (
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {section.description}
                  </p>
                )}
              </div>
              <div className="space-y-6">
                {section.faqs?.map((faq: any, faqIndex: number) => (
                  <div key={faqIndex} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'ctaSection':
        return (
          <section key={index} className="py-20 px-4 bg-gradient-to-br from-[#05000A] via-purple-900/20 to-[#05000A] relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-600/10 rounded-full blur-2xl"></div>
            </div>
            <div className="container mx-auto max-w-7xl relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 text-purple-400 text-sm font-medium">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>LET'S CONNECT</span>
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      {section.heading?.normalText && <span>{section.heading.normalText} </span>}
                      {section.heading?.gradientText && (
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {section.heading.gradientText}
                        </span>
                      )}
                    </h2>
                  </div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-white font-medium mb-2">Full Name</label>
                      <input type="text" id="fullName" name="fullName" placeholder="Enter Full Name" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                      <input type="email" id="email" name="email" placeholder="Enter Your Email" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                      <input type="text" id="company" name="company" placeholder="Enter Your Company Name" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                      <textarea id="message" name="message" rows={4} placeholder="Enter your Message" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                      Book Demo
                    </button>
                  </form>
                </div>
                {section.ctaImage?.asset && (
                  <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                      <Image
                        src={urlFor(section.ctaImage).width(600).height(600).url()}
                        alt={section.ctaImage?.alt || 'Contact us'}
                        width={600}
                        height={600}
                        className="w-full max-w-lg h-auto object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl scale-110 -z-10"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f051a] w-full overflow-x-hidden">
      <div className="relative min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                {page.heroSection?.mainHeading?.line1 && (
                  <span className="block">{page.heroSection.mainHeading.line1}</span>
                )}
                {page.heroSection?.mainHeading?.line2 && (
                  <span className="block mt-1">{page.heroSection.mainHeading.line2}</span>
                )}
              </h1>
              <p className="text-lg md:text-lg text-gray-200 leading-relaxed max-w-xl">
                {page.heroSection?.description}
              </p>
              {page.heroSection?.ctaButton && (
                <div className="pt-2">
                  <Link
                    href={page.heroSection.ctaButton.link || '/contact'}
                    className="inline-flex items-center justify-center px-8 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {page.heroSection.ctaButton.text || 'Get Started'}
                  </Link>
                </div>
              )}
            </div>
            {page.heroSection?.heroImage?.asset && (
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative max-w-md lg:max-w-lg">
                  <Image
                    src={urlFor(page.heroSection.heroImage).width(1000).height(1000).url()}
                    alt={page.heroSection.heroImage?.alt || page.title}
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
      </div>
      {page.contentSections?.map((section: any, index: number) => 
        renderSection(section, index)
      )}
    </div>
  );
}
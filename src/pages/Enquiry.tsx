import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useContext } from "react";
import { ThemeContext } from "@/components/ui/themeContext";

const Enquiry: React.FC = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mldlkjgo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Enquiry Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", requirements: "" }); // reset form
      } else {
        toast({
          title: "Error",
          description: "Failed to send enquiry. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-833-2923-289',
      href: 'tel:+91-833-2923-289',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hertzdynamics@gmail.com',
      href: 'mailto:hertzdynamics@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '103, Level-1, CII, National Institute of Technology, Warangal, Telangana – 506 004. INDIA.',
      href: '#',
    },
  ];

  return (
    <div
      className={`min-h-screen transition ease duration-1000 pt-1 ${
        theme === "sunny"
          ? "bg-[var(--background-color)]"
          : "bg-[var(--darkbackground-color)]"
      }`}
    >
      <Navbar />

      {/* Header Section */}
      <section
        className={`pt-24 pb-16 transition ease duration-1000  ${
          theme === "sunny"
            ? "bg-[var(--background-color)]"
            : "bg-[var(--darkbackground-color)]"
        } relative`}
      >
        <div className="absolute inset-0 hex-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            {t('enquiry.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('enquiry.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t('form.name')} *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">{t('form.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t('form.phone')}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">{t('form.requirements')} *</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      required
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="mt-2 min-h-32"
                      placeholder="Tell us about your drone requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        {t('form.submit')} <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">{t('enquiry.touch')}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('enquiry.belowtouch')}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, title, value, href }) => (
                  <div key={title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold  text-primary">{title}</h3>
                      {href === '#' ? (
                        <p className="text-muted-foreground">{value}</p>
                      ) : (
                        // <a 
                        //   href={href} 
                        //   className="text-primary hover:text-primary-dark transition-colors"
                        // >
                        <p className="text-muted-foreground">{value}</p>
                        // </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* <Card className="bg-gradient-accent border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Why Choose Hertz Dynamics?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Industry-leading technology and innovation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">24/7 customer support and service</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Custom solutions for your specific needs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Worldwide shipping and support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-gradient-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about our products and services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-primary mb-3">What's included with my drone purchase?</h3>
                <p className="text-muted-foreground">All our drones come with a complete kit including the aircraft, controller, batteries, charger, carrying case, and comprehensive documentation.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-primary mb-3">Do you offer training and support?</h3>
                <p className="text-muted-foreground">Yes! We provide comprehensive training programs, technical support, and ongoing maintenance services for all our professional customers.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-primary mb-3">What's your warranty policy?</h3>
                <p className="text-muted-foreground">All Hertz Dynamics drones come with a 2-year manufacturer warranty covering defects and a 6-month accidental damage protection plan.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-primary mb-3">Can you customize drones for specific needs?</h3>
                <p className="text-muted-foreground">Absolutely! We specialize in custom drone solutions tailored to your specific industry requirements and operational needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Enquiry;
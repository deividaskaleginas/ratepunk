"use client";

import { Banner } from "@/components/banner/Banner";
import { Header } from "@/components/header/Header";
import { BannerSection } from "@/components/sections/bannerSection/BannerSection";
import { FAQSection } from "@/components/sections/faqSection/FAQSection";
import { FeaturesSection } from "@/components/sections/featuresSection/FeaturesSection";
import { HeroSection } from "@/components/sections/heroSection/HeroSection";
import { HowItWorksSection } from "@/components/sections/howItWorksSection/HowItWorksSection";
import { MediaSection } from "@/components/sections/mediaSection/MediaSection";
import { ProvidersSection } from "@/components/sections/providersSection/ProviderSection";
import { SavingSection } from "@/components/sections/savingsSection/SavingsSection";
import { useState } from "react";

export default function Home() {
  const [browser, setBrowser] = useState(String);
  return (
    <>
      <Header browser={browser} setBrowser={setBrowser} />
      <main>
        <HeroSection browser={browser} />
        <MediaSection />
        <FeaturesSection browser={browser} />
        <ProvidersSection />
        <HowItWorksSection browser={browser} />
        <SavingSection />
        <BannerSection type="savings" bgColor="light" />
        <FAQSection />
      </main>
    </>
  );
}

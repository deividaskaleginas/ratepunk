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
import { RankingSection } from "@/components/sections/rankingSection/RankingSection";
import { useState } from "react";
import { BlogSection } from "@/components/sections/blogSection/BlogSection";
import { Message } from "@/components/message/Message";
import { useGetEmails } from "@/hooks/useGetEmails";

export default function Home() {
  const [browser, setBrowser] = useState(String);
  return (
    <>
      <Message />
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
        <RankingSection browser={browser} />
        <BlogSection />
        <BannerSection type="newsLetter" bgColor="blue" />
      </main>
    </>
  );
}

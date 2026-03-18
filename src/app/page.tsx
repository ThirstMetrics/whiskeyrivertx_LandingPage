import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroRotator from "@/components/HeroRotator";
import TrustBar from "@/components/TrustBar";
import FeatureGrid from "@/components/FeatureGrid";
import PhotoBand from "@/components/PhotoBand";
import ProductWalkthrough from "@/components/ProductWalkthrough";
import MarketConditions from "@/components/MarketConditions";
import ComingSoonFeatures from "@/components/ComingSoonFeatures";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Whiskey River — Texas Market Intelligence | ThirstMetrics",
  description:
    "Texas TABC data and CRM intelligence for alcohol sales reps. Target the right accounts faster with beer, wine, and spirits receipts enhanced with metroplex filters and proprietary enrichment.",
};

export default function WhiskeyRiverPage() {
  return (
    <>
      <Header />
      <main>
        <HeroRotator />
        <TrustBar />
        <FeatureGrid />
        <PhotoBand />
        <ProductWalkthrough />
        <MarketConditions />
        <ComingSoonFeatures />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

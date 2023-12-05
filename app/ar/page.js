import AboutStatistics from "@/components/ar/home/AboutStatistics";
import HomeAboutUs from "@/components/ar/home/HomeAboutUs";
import HomeCameraContract from "@/components/ar/home/HomeCameraContract";
import HomeContractRenew from "@/components/ar/home/HomeContractRenew";
import HomeHeader from "@/components/ar/home/HomeHeader";
import HomeOurServices from "@/components/ar/home/HomeOurServices";
import HomeWhyChooseUs from "@/components/ar/home/HomeWhyChooseUs";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <AboutStatistics />
      <HomeAboutUs />
      <HomeOurServices />
      <HomeCameraContract />
      <HomeContractRenew />
      <HomeWhyChooseUs />
    </main>
  );
}

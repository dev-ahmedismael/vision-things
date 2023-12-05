import AboutStatistics from "@/components/en/home/AboutStatistics";
import HomeAboutUs from "@/components/en/home/HomeAboutUs";
import HomeCameraContract from "@/components/en/home/HomeCameraContract";
import HomeContractRenew from "@/components/en/home/HomeContractRenew";
import HomeHeader from "@/components/en/home/HomeHeader";
import HomeOurServices from "@/components/en/home/HomeOurServices";
import HomeWhyChooseUs from "@/components/en/home/HomeWhyChooseUs";

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

import Hero from "@/components/Hero";
import Header from "@/components/common/Header";
import DashboardImg from '@/assets/images/dashboard.png';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className='container mx-auto py-60 px-24'
      >
        <Hero />
        <section className="">
            <div className="dashboard-img_wrapper w-full h-[200px] md:w-[1051px] md:h-[635px] mx-auto">
                <Image src={DashboardImg} alt="Block Radar Dashboard " priority
                  style={{ objectFit: 'contain' }}
                  placeholder="blur"/>
            </div>
        </section>
      </main>
    </>
  );
}

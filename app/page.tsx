import Hero from "../components/Hero";
import Section2 from "../components/Section2";
import Collection from "../components/Collection";
import Story from "../components/Story";
import ScrollAnimationController from "../components/ScrollAnimationController";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#f8f1e9] text-neutral-900">
      <ScrollAnimationController />

      <div className="flex flex-col">
        <Hero />
        <Section2 />
        <Collection />
        <Story />
      </div>
    </main>
  );
}

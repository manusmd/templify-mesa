import { content } from "@/lib/content";
import Motion from "./components/Motion";
import {
  Nav,
  Hero,
  TonightStrip,
  MenuSection,
  Story,
  Visit,
  Footer,
} from "./components/Sections";

export default function Page() {
  return (
    <>
      <div className="scroll-progress" aria-hidden />
      <Nav content={content} />
      <Hero hero={content.hero} />
      <TonightStrip items={content.tonight} />
      <MenuSection menu={content.menu} />
      <Story story={content.story} />
      <Visit visit={content.visit} />
      <Footer content={content} />
      <Motion />
    </>
  );
}

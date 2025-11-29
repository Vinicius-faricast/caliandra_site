import { ContactSection } from "./components/contactSection/ContactSection"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { HistorySection } from "./components/HistorySection/HistorySection"
import { InstagramSection } from "./components/InstagramSection/InstagramSection"
import { PriceSection } from "./components/PriceSection/PriceSection"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <HistorySection>
        Lorem ipsum dolor sit amet consectetur. Sit quis nunc massa velit. A sed massa adipiscing pulvinar bibendum libero. Sed ultricies pulvinar pharetra hac purus. At convallis cursus sagittis maecenas non amet lorem ac.Lorem ipsum dolor sit amet consectetur. Sit quis nunc massa velit. A sed massa adipiscing pulvinar bibendum libero. Sed ultricies pulvinar pharetra hac purus. At convallis cursus sagittis maecenas non amet lorem ac.
      </HistorySection>
      <PriceSection />
      <InstagramSection />
      <ContactSection>
        Descrição exemplo para children
      </ContactSection>
    </>
  )
}

export default App

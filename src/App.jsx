import Header from "./components/Header"
import Hero from "./components/Hero"
import Content from "./components/Content"
import Integration from "./components/Integration"
import MarqueeBanner from "./components/MarqueeBanner"


export default function App() {

  return (
    <main>
      {/* Gradiente Lemon */}
      <img
      className="absolute top-0 right-0 opacity-60 -z-1"
      src="/gradient.png"
      alt="gradiente"
      >

      </img>

      {/*Efeito Blur*/}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%]
      shadow-[0_0_900px_20px_#4ca724] -rotate-[30deg] -z-10">
      </div>

    <Header />
    <Hero />

    <img
    className="absolute opacity-90 -z-10 w-1/2 h-auto 
                left-0 transform translate-y-1/2" 
    src="/gradient.png"
    alt="gradiente-inferior"
    style={{ top: '150vh', filter: 'hue-rotate(120deg) blur(1px)' }} 
  />

      <Content />
      <MarqueeBanner />
      <Integration />

    </main>
  )
}

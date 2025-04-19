import RateTheCat from "@/components/rate-the-cat"
import { BackgroundMusic } from "@/components/BackgroundMusic"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/40 via-transparent to-transparent opacity-70"></div>
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/30 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-200/30 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <RateTheCat />
      </div>

      <BackgroundMusic />
    </main>
  )
}

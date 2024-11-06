import Image from "next/image"
import Link from "next/link"
import { User, Code, Cog } from "lucide-react"

export default function Component() {
  const testimonials = [
    {
      text: "Crown has proven to be by far the most reliable and effective discord security measure out there.",
      author: "Sebastian Slicks",
      role: "Tempura - Founder"
    },
    {
      text: "Since implementing Crown, our community has been safer and more secure than ever before.",
      author: "Alex Johnson",
      role: "GamersUnite - Admin"
    },
    {
      text: "The customization options and intelligent threat detection make Crown an indispensable tool for our server.",
      author: "Emily Chen",
      role: "TechTalk - Moderator"
    },
    {
      text: "Crown's support team is responsive and helpful. They've made our transition to enhanced security seamless.",
      author: "Michael Brown",
      role: "ArtistAlley - Owner"
    }
  ]

  return (
    <div className="min-h-screen bg-[#1C2127] text-[#E5C992]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 relative">
              <Image
                src="/placeholder.svg"
                alt="Crown Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold">CROWN</span>
          </div>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-white transition-colors">
              home
            </Link>
            <Link href="#features" className="hover:text-white transition-colors">
              features
            </Link>
            <Link href="/purchase" className="hover:text-white transition-colors">
              purchase
            </Link>
          </div>
          <Link
            href="/dashboard"
            className="bg-[#E5E992] text-black px-6 py-2 rounded hover:bg-[#E5E992]/90 transition-colors"
          >
            dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6">CROWN SECURITY</h1>
            <p className="text-lg mb-8">
              Crown is a revolutionary digital security company that focuses on
              protecting your discord communities and businesses.
            </p>
          </div>
          <div className="text-right">
            <div className="space-y-4">
              <div>
                <div className="text-4xl font-bold">135,294</div>
                <div className="text-sm">Members Secured</div>
              </div>
              <div>
                <div className="text-4xl font-bold">45</div>
                <div className="text-sm">Servers protected</div>
              </div>
              <div>
                <div className="text-4xl font-bold">18</div>
                <div className="text-sm">Custom Bots</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          How does Crown work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#232830] p-8 rounded-lg">
            <User className="w-8 h-8 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Direct Integration</h3>
            <p className="text-sm">
              Crown connects directly to the users to check if a user is a security
              threat and to bring them to your new server if your current one is
              deleted.
            </p>
          </div>
          <div className="bg-[#232830] p-8 rounded-lg">
            <Code className="w-8 h-8 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Intelligent Systems</h3>
            <p className="text-sm">
              Crown has the blistering speeds and systems built to break down
              complex user statistics to detect if a user is a security threat.
            </p>
          </div>
          <div className="bg-[#232830] p-8 rounded-lg">
            <Cog className="w-8 h-8 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Tailor Fit</h3>
            <p className="text-sm">
              There is no "one size fits all" and with Crown there is no
              exception. You can configure every setting through the dashboard to
              fit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Don't take our word for it.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-[#232830] p-6 rounded-lg">
              <p className="mb-4 text-sm">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-700" />
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Link
          href="/purchase"
          className="inline-block bg-[#E5C992] text-black px-12 py-3 rounded-lg text-lg font-bold hover:bg-[#E5C992]/90 transition-colors"
        >
          purchase
        </Link>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 relative">
              <Image
                src="/placeholder.svg"
                alt="Crown Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold">CROWN</span>
          </div>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-white transition-colors">
              home
            </Link>
            <Link href="#features" className="hover:text-white transition-colors">
              features
            </Link>
            <Link href="/purchase" className="hover:text-white transition-colors">
              purchase
            </Link>
          </div>
          <div className="text-sm">support@crownsecurity.us</div>
        </div>
        <div className="flex justify-between mt-8 text-sm">
          <Link href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  )
}
import Image from "next/image"
import Link from "next/link"

// Sample project data - you can replace this with your actual projects
const projects = [
  {
    id: "modern-residence",
    title: "Recorrido y espacios de transición (Peter Zumthor Christopher Alexander)",
    location: "Calderon, Quito",
    year: "2024",
    type: "Residential",
    description: "Rediseño de Recorrido y espacios de transición",
    image: "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/vqthdeawzgrxqzldid4g.jpg",
  },
  {
    id: "urban-office-complex",
    title: "EJERCICIO 3 - LOCALIZACION GEOGRAFICA",
    location: "Calderon, Quito",
    year: "2024",
    type: "Residential",
    description: "Rediseño ampleando temas de clase",
    image: "https://res.cloudinary.com/dztz492su/image/upload/v1753804332/books/e9mxxbe4gpw4zopi4zbv.jpg",
  },
  {
    id: "cultural-center",
    title: "Museo de Frida Kahlo o Casa Azul",
    location: "Coyoacán, México",
    year: "1958",
    type: "Cultural",
    description: "Se trata de una casa vernácula adaptada como museo, que conserva y exhibe la vida, obra y objetos personales de Frida Kahlo..",
    image: "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/h4ncilvcyuy90a7sljff.jpg",
  },
  {
    id: "sustainable-housing",
    title: "Piscinas Recreativas y Deportivas en el Sector de Calderón",
    location: "Calderon, Quito",
    year: "2025",
    type: "Comercial",
    description: "Piscinas Recreativas y Deportivas en el Sector de Calderón.",
    image: "https://res.cloudinary.com/dztz492su/image/upload/v1753804329/books/ibvwp8zfeqf4g334puob.jpg",
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <div>
                  <h1 className="text-lg font-light tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors">
                    ARQUITECTURA
                  </h1>
                </div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-12">
              <Link
                href="/"
                className="text-sm font-light tracking-wider text-gray-900 hover:text-gray-600 transition-colors uppercase"
              >
                Recreación 
              </Link>
              <Link
                href="#"
                className="text-sm font-light tracking-wider text-gray-500 hover:text-gray-900 transition-colors uppercase"
              >
                Inspiración
              </Link>
              <Link
                href="#"
                className="text-sm font-light tracking-wider text-gray-500 hover:text-gray-900 transition-colors uppercase"
              >
                Resiliencia
              </Link>
            </nav>
            <button className="md:hidden p-2">
              <div className="w-5 h-0.5 bg-gray-900 mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-900 mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-900"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-8 tracking-tight leading-none">
              Creando Espacios
              <br />
              <span className="text-gray-400">Que inspiran</span>
            </h2>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
            <p className="text-lg font-light text-gray-500 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Proyectos cuarto semestre de arquitectura Universidad central del ecuador
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-6 bg-white">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-light tracking-widest text-gray-400 uppercase">{project.type}</span>
                      <span className="text-xs font-light text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-sm font-light text-gray-500 tracking-wide">{project.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
              Lets Create Something Amazing Together
            </h3>
            <div className="w-12 h-px bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-500 font-light mb-8 tracking-wide">
              Ready to discuss your next architectural project?
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-900 text-gray-900 font-light text-sm tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

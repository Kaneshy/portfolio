

  import Link from "next/link";

// Dummy data for projects (replace with real data or dynamic loading)
const projects = [
  {
    id: "project-1",
    title: "Recorrido y espacios de transición (Peter Zumthor Christopher Alexander)",
    thumbnail: "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/vqthdeawzgrxqzldid4g.jpg",
    pdfUrl: "/pdfs/project1.pdf"
  },
  {
    id: "project-2",
    title: "Urban Park Design",
    thumbnail: "https://res.cloudinary.com/dztz492su/image/upload/v1753800174/books/rupcmjeldd1j9qsnswac.jpg",
    pdfUrl: "/pdfs/project2.pdf"
  },
  {
    id: "project-2",
    title: "Urban Park Design",
    thumbnail: "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/zru62zas9pukcqs6tife.jpg",
    pdfUrl: "/pdfs/project2.pdf"
  },
  {
    id: "project-2",
    title: "Urban Park Design",
    thumbnail: "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/gtoozesjlueyra83kh9n.jpg",
    pdfUrl: "/pdfs/project2.pdf"
  },
  {
    id: "project-2",
    title: "Urban Park Design",
    thumbnail: "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/dzer7kmz1x7mxe0oudzf.jpg",
    pdfUrl: "/pdfs/project2.pdf"
  },
  {
    id: "project-2",
    title: "Urban Park Design",
    thumbnail: "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/dzer7kmz1x7mxe0oudzf.jpg",
    pdfUrl: "/pdfs/project2.pdf"
  },
  // Add more projects as needed
];

export default function HomePage() {
  return (
    <main className="min-h-screen  ">
      {/* Header Section */}
      <section className="relative w-full h-[70vh] bg-gray-800 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dztz492su/image/upload/v1753800174/books/rupcmjeldd1j9qsnswac.jpg"
          alt="Portfolio Header"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
        <div className="space-y-6">
            <div>
              <h2 className="text-xl text-gray-800 uppercase font-semibold mb-4">Recorrido y espacios de transición (Peter Zumthor  Christopher Alexander)</h2>
              <p className="text-sm leading-relaxed text-gray-800">
              ANALISIS DEL PROYECTO
              </p>
              <br />
              <p className="text-sm text-gray-800 italic">
              Patrones muertos
              </p>

              <ul className="list-disc list-inside text-left text-sm mt-4 text-gray-800">
                <li>La vivienda carece de un espacio destinado específicamente al comedor, lo que obliga a los usuarios a realizar esta actividad en áreas inadecuadas como la sala de estar o los dormitorios, afectando la funcionalidad y la jerarquía espacial del interior.</li>
                <li>El espacio central de la vivienda se limita a una función de circulación, carece de una identidad propia y no recibe iluminación natural adecuada, lo que lo convierte en un espacio oscuro y sin vitalidad.</li>
                <li>El diseño no contempla áreas destinadas al ocio o al encuentro social en el exterior, lo cual representa una oportunidad perdida para introducir patrones vivos como patios activos, jardines habitables o terrazas con funciones claras.La ubicación de las ventanas no funcionan y el patio no se utiliza lo que lo hace un patio muerto.</li>
                <li>El patio no se integra con las actividades de la vivienda y carece de conexiones visuales o físicas efectivas, lo que lo convierte en un espacio residual o muerto. La ubicación y proporción de las ventanas tampoco fomentan el vínculo interior-exterior.</li>
                <li>La fachada principal carece de elementos que inviten a ser observada o recorrida. No presenta articulaciones formales, materiales o espaciales que propicien un sentido de entrada o pertenencia, haciendo que el acceso pase desapercibido.</li>
                <li>La falta de elementos arquitectónicos como pérgolas, aleros, bancas, vegetación o transiciones escalares refuerza la ausencia de patrones vivos y reduce la habitabilidad del entorno inmediato..</li>
                <li>No se observan estrategias de diseño bioclimático que optimicen la orientación, ventilación cruzada o captación de luz natural, lo que repercute negativamente en la calidad ambiental interior.</li>
              </ul>
            </div>
  
            <img src="/https://res.cloudinary.com/dztz492su/image/upload/v1753800174/books/rupcmjeldd1j9qsnswac.jpg" alt="Bridge Study" className="w-full object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-1 pb-10 mt-10">
        <h2 className="text-3xl font-bold text-center mb-8">GALERIA REDISEÑO</h2>
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#111]  shadow-md overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample detailed project data - you can replace this with your actual project details
const projectsData = {
  "modern-residence": {
    title: "Recorrido y espacios de transición (Peter Zumthor Christopher Alexander)",
    location: "Calderon, Quito",
    year: "2023",
    type: "Residential",
    client: "Private Client",
    area: "",
    description:
      "This contemporary family home represents a harmonious blend of modern architecture and sustainable living. The design emphasizes clean lines, open spaces, and a strong connection to the natural environment. Large floor-to-ceiling windows flood the interior with natural light while providing stunning views of the surrounding landscape.",
    challenge:
      "The main challenge was to create a modern home that would complement the natural hillside setting while maximizing views and natural light. The sloping terrain required innovative structural solutions.",
    solution:
      "La vivienda carece de un espacio destinado específicamente al comedor, lo que obliga a los usuarios a realizar esta actividad en áreas inadecuadas como la sala de estar o los dormitorios, afectando la funcionalidad y la jerarquía espacial del interior. El espacio central de la vivienda se limita a una función de circulación, carece de una identidad propia y no recibe iluminación natural adecuada, lo que lo convierte en un espacio oscuro y sin vitalidad. El diseño no contempla áreas destinadas al ocio o al encuentro social en el exterior, lo cual representa una oportunidad perdida para introducir patrones vivos como patios activos, jardines habitables o terrazas con funciones claras.La ubicación de las ventanas no funcionan y el patio no se utiliza lo que lo hace un patio muerto. El patio no se integra con las actividades de la vivienda y carece de conexiones visuales o físicas efectivas, lo que lo convierte en un espacio residual o muerto. La ubicación y proporción de las ventanas tampoco fomentan el vínculo interior-exterior.",
    features: [
      "La fachada principal carece de elementos que inviten a ser observada o recorrida. No presenta articulaciones formales, materiales o espaciales que propicien un sentido de entrada o pertenencia, haciendo que el acceso pase desapercibido.",
      "Open-plan living spaces with 20-foot ceilings",
      "La falta de elementos arquitectónicos como pérgolas, aleros, bancas, vegetación o transiciones escalares refuerza la ausencia de patrones vivos y reduce la habitabilidad del entorno inmediato.",
      "No se observan estrategias de diseño bioclimático que optimicen la orientación, ventilación cruzada o captación de luz natural, lo que repercute negativamente en la calidad ambiental interior.",
    ],
    images: [
      "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/vqthdeawzgrxqzldid4g.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/gtoozesjlueyra83kh9n.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/zru62zas9pukcqs6tife.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/dzer7kmz1x7mxe0oudzf.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/zb7wwjnm1bxkpisae4w5.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/ank66bgxnsfea7ksaiwc.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/ank66bgxnsfea7ksaiwc.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/zru62zas9pukcqs6tife.jpg",
    ],
    pdfa:["https://res.cloudinary.com/dh01ngdjo/image/upload/v1753807927/s9swu6urilz1kz2iprz4.pdf"]
  },
  "urban-office-complex": {
    title: "EJERCICIO 3 - LOCALIZACION GEOGRAFICA",
    location: "Calderon, Quito",
    year: "2022",
    type: "Commercial",
    client: "",
    area: "",
    description:
      "Rediseño ampleando temas de clase",
    challenge:
      "Sistemas solares pasivos: El aprovechamiento de la radiación solar puede aumentar la temperatura interna a niveles confortables, cuando las temperaturas exteriores oscilan entre 10° y 20° el diseño del edificio debe incluir superficies vidriadas orientadas al sol, buenos espesores de aislante térmico, aberturas reducidas en las orientaciones menos favorables y proporciones apropiadas de espacios exteriores para lograr asoleamiento invernal. El uso de elementos constructivos interiores, con gran capacidad térmica, evitará amplitudes interiores excesivas . Cuando la temperatura exterior es menor a 10° C, las ganancias solares dificilmente pueden proporcionar temperaturas interiores confortables, aunque con mayores espesores de aislantes y sistemas solares pasivos de alta eficiencia, se puede lograr confort en días soleados con temperaturas de 0° C. En todas maneras, el aporte de calor resulta significativo, logrando disminuir la necesidad de combustibles convencionales y mejorando las condiciones interiores..",
    solution:
      "Our design features a stepped facade that provides outdoor terraces on multiple levels, while the ground floor opens up to create a welcoming public plaza. The building's form responds to zoning requirements while creating distinctive architectural character.",
    features: [
      "La nueva configuración espacial mejora sustancialmente la calidad ambiental interior, tanto en términos de confort térmico como de iluminación natural.",
      "El juego de niveles y la manipulación topográfica no solo respondieron a una necesidad funcional de zonificación, sino que también añadieron riqueza espacial y belleza arquitectónica.",
      "El proyecto demostró cómo una arquitectura sensible al contexto climático puede ser también una arquitectura bella, coherente y funcional.",
      "Ground-level retail and dining",
      "La cubierta, rediseñada como componente climático, actúa como regulador de temperatura y luz, articulando elementos de ventilación e iluminación en favor del rendimiento energético.",
    ],
    images: [
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804332/books/e9mxxbe4gpw4zopi4zbv.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804332/books/pz34t8dkr3rkybho5ft2.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804333/books/hhvdfjga8u1pjquul32v.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804332/books/yihjycxcvtmnwixt4c9k.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804333/books/a5tc3a5nxbfxpkbbxopr.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804333/books/xsiqheolu7x6mgsjltsj.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804333/books/oesxnbbefrmtr3hqk5b6.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804332/books/hvza4uktacarcmyrpvlc.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804332/books/voitfs0ntbjodegnbye0.jpg",
    ],
    pdfa:["https://res.cloudinary.com/dh01ngdjo/image/upload/v1753807926/iodhpnptulsr1iepitkm.pdf"]
  },
  "cultural-center": {
    title: "Museo de Frida Kahlo o Casa Azul",
    location: "Coyoacán, México",
    year: "1958",
    type: "Cultural",
    client: "",
    area: "45,000 sq ft",
    description:
      "Se trata de una casa vernácula adaptada como museo, que conserva y exhibe la vida, obra y objetos personales de Frida Kahlo...",
    challenge:
      "El Museo Frida Kahlo, conocido como la Casa Azul, es un proyecto donde la arquitectura vernácula se entrelaza profundamente con la naturaleza, generando una experiencia sensorial rica en matices. La casa no solo encierra un jardín central en su interior, sino que además está parcialmente envuelta por vegetación en los bordes del terreno. Esto produce una fusión simbiótica entre la arquitectura y el entorno natural, creando espacios intermedios que difuminan los límites entre lo construido y lo orgánico. El proyecto cuenta con un gran patio central ajardinado, que incluye esculturas prehispánicas, caminos de piedra y vegetación autóctona. Aunque no hay conexión visual directa entre este jardín y la calle, sí existe un portal o porche anterior al ingreso que permite una vista parcial del patio, de manera similar a un patio romano, donde el visitante intuye el corazón del hogar sin verlo completamente, lo que aumenta el misterio y la expectativa al ingresar.",
    solution:
      "La Casa Azul se adapta con sensibilidad al clima templado subhúmedo de la zona, donde la radiación solar varía significativamente a lo largo del año. En invierno, el sol se encuentra más bajo, lo que provoca sobreasolamiento en algunas salas orientadas al sur u oeste, especialmente durante la tarde. En contraste, otras zonas del museo, protegidas por vegetación o muros, permanecen en semi-penumbra o reciben luz muy tenue, lo que genera contrastes atmosféricos dentro del recorrido. Durante el verano, cuando el sol está alto, la casa se protege naturalmente mediante corredores techados, muros gruesos y vegetación frondosa, que filtran y tamizan la luz, creando un microclima fresco y sombreado en los patios y espacios interiores.",
    features: [
      "El acceso se realiza frontalmente desde la calle Londres, una vía tranquila del barrio de Coyoacán. El visitante se encuentra con un muro alto, liso y de color azul intenso, que contrasta con el entorno urbano. La puerta principal de madera es sobria y sólida, lo que refuerza la idea de que uno está a punto de ingresar a un espacio íntimo y privado",
      "La fachada no invita explícitamente a entrar; más bien, mantiene un carácter cerrado, introspectivo. Su única insinuación de apertura es el porche frontal, por lo que frecuentemente se colocan letreros de “Museo” para guiar al visitante. Este recurso subraya que el acceso no es obvio, sino casi ritual, como si atravesar el umbral implicara entrar en la historia personal de sus habitantes.",
      "La transición entre lo público y lo privado es gradual e intencional. Desde el ruido urbano de la calle, el visitante entra en un vestíbulo de ingreso cerrado, luego accede a las habitaciones personales y, finalmente, se abre al jardín central, que representa el alma abierta del espacio.",
      "Las habitaciones conservadas como el dormitorio de Frida, su cocina o su estudio transmiten una sensación poderosa: el visitante percibe la vida detenida, como si sus habitantes aún estuvieran presentes.",
      "La arquitectura utiliza estrategias pasivas para captar o controlar la luz solar sin depender de sistemas mecánicos: patios ajardinados, verandas, y pórticos funcionan como transiciones climáticas y visuales, permitiendo que la luz difusa penetre de forma indirecta y cálida en los interiores. La vegetación envolvente, junto con las superficies de colores intensos, reflejan y suavizan la luz, generando ambientes introspectivos acordes con el carácter íntimo del lugar. Así, el proyecto logra equilibrar protección solar, confort térmico y una poética relación entre la luz, el espacio y la memoria.",
    ],
    images: [
       "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/a0woscqpewyn5gbtxmgv.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/umcbmdoag43engxwytqe.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/a0woscqpewyn5gbtxmgv.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/vdgabbtdfj2zxxnzdkpe.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/ho9agz75yh7alydxm1lw.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/h4ncilvcyuy90a7sljff.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/oxzwugp4si3lfd3oejlx.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/nby4mugvphid9oxz5vu6.jpg",
    
    ],
    pdfa:["https://res.cloudinary.com/dh01ngdjo/image/upload/v1753807926/bczjzxkrsytjpjsvu0lh.pdf"]
  },
  "sustainable-housing": {
    title: "Piscinas Recreativas y Deportivas en el Sector de Calderón",
    location: "Calderon, Quito",
    year: "2025",
    type: "Comercial",
    client: "",
    area: "7,489.59 m2",
    description:
      "Uno de los lineamientos de desarrollo local es fomentar el uso del tiempo libre en actividades físicas y deportivas, que contribuyan al bienestar físico, intelectual y social de la población. Un conjunto de piscinas responde directamente a este propósito.",
    challenge:
      "Calderón ha experimentado un crecimiento urbano acelerado, sin embargo, carece de suficientes espacios recreativos y turísticos. La construcción de un conjunto de piscinas puede convertirse en un punto de encuentro comunitario para familias, niños, jóvenes y adultos mayores. Fomenta la cohesión social y ofrecer una alternativa de ocio activo y saludable.",
    solution:
      "Complejo de piscinas recreativas y deportivas en el sector de Calderón responde auna necesidad urbana identificada a partir del crecimiento acelerado y la carenciade equipamientos comunitarios destinados al ocio activo y la actividad física. Desdeuna perspectiva urbanística, este equipamiento colectivo busca integrarsearmónicamente al tejido urbano existente, funcionando como un nodo dearticulación social y un espacio de interacción intergeneracional. Su implantación aprovecha las condiciones climáticas favorables de la zona, lo que optimiza el uso prolongado de las instalaciones y reduce la demanda energética para su funcionamiento. El objetivo fundamental del proyecto es elevar la calidad de vida de la población mediante la creación de un espacio arquitectónico accesible, inclusivo y funcional, que potencie tanto el desarrollo deportivo sistemático como el esparcimiento cotidiano, contribuyendo a la salud física, emocional y social de los habitantes a través de una infraestructura diseñada bajo criterios de eficiencia, sostenibilidad y normativa técnica vigente",
    features: [
      "",

    ],
    images: [
      "https://res.cloudinary.com/dztz492su/image/upload/v1753798663/books/srlhx1totnw6tocyorr9.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753798663/books/brsytqmbfelryzy1jfgi.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753805636/books/d2tdyslr1ese0pvlbgzg.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753798663/books/ogmbqmujlxghsmd79bza.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753798663/books/srlhx1totnw6tocyorr9.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753798663/books/nrml0m5q96jwjy2hqgaf.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753798663/books/rjz46nsfwq3gfvv31hut.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753798663/books/bz9nsuqhwhki3syevzlo.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804334/books/hrsucle68yutckxsy8zm.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804332/books/bksizi9hznvz2p6vehau.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804332/books/mtod1omrlgpomna3ff8e.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804331/books/hpyea37hpm8jk9kynocx.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804330/books/gt0blka0hd8tr8tylqst.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804330/books/ycondkkfrow6dluvgqvd.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804330/books/ugukrppqxjopjs0t6utj.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804330/books/mja0q9sqdd6wsythiqcn.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804330/books/ferbbcjwbxnpzryeub7k.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804329/books/tqgduxdheea9i7sa72dw.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804330/books/pjpddbssdbi9f4nlmfog.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804329/books/o9zjctdozeqazc8uya65.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804330/books/hkbgqjmjyahsnberua0o.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753804329/books/wvavmqjifhmgrvyvcgnj.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753805497/books/pokvfrx3yn8swkuwiupl.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753805497/books/bijjgzx2ki5eampwuxbe.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753805497/books/pfskonynbkhwj7skqimx.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753805497/books/uk0wbvoz9eekrprziddp.jpg",
      "https://res.cloudinary.com/dztz492su/image/upload/v1753805497/books/zowsuj780ihtu3k5j30h.jpg",
    ],
    pdfa:["https://res.cloudinary.com/dh01ngdjo/image/upload/v1753807927/yu5strn8qllggniovvos.pdf"]
  }
}




export default function ProjectPage({ params }) {
  const project = projectsData[params.slug]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    )
  }

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
                    ARCHITECTURE
                  </h1>
                </div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-12">
              <Link
                href="/"
                className="text-sm font-light tracking-wider text-gray-900 hover:text-gray-600 transition-colors uppercase"
              >
                Work
              </Link>
              <Link
                href="#"
                className="text-sm font-light tracking-wider text-gray-500 hover:text-gray-900 transition-colors uppercase"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-light tracking-wider text-gray-500 hover:text-gray-900 transition-colors uppercase"
              >
                Contact
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

      {/* Hero Image */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <Link href="/">
            <button className="group flex items-center font-light text-gray-500 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">
              <ArrowLeft className="w-4 h-4 mr-3" />
              Back to Work
            </button>
          </Link>
        </div>
      </div>
      <div className="aspect-[21/9] overflow-hidden mb-16">
        <img
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-6 py-16">
        
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <span className="text-xs font-light tracking-widest text-gray-400 uppercase mr-4">{project.type}</span>
                <a href={`${project.pdfa}`} target="_blank"  className=" left-3 p-4 text-black bg-red-300 border-red-600 border-1  rounded-2xl">ver PDF</a>
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8 tracking-tight leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-8 text-gray-500 mb-8 font-light">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm tracking-wide">{project.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm tracking-wide">{project.year}</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="text-sm tracking-wide">{project.area}</span>
                </div>
              </div>
              <p className="text-lg font-light text-gray-700 leading-relaxed tracking-wide">{project.description}</p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-6 tracking-wide uppercase"></h3>
                <div className="w-8 h-px bg-gray-300 mb-4"></div>
                <p className="text-gray-600 font-light leading-relaxed tracking-wide">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-6 tracking-wide uppercase"></h3>
                <div className="w-8 h-px bg-gray-300 mb-4"></div>
                <p className="text-gray-600 font-light leading-relaxed tracking-wide">{project.solution}</p>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-16">
              <h3 className="text-lg font-light text-gray-900 mb-6 tracking-wide uppercase">Project Gallery</h3>
              <div className="w-8 h-px bg-gray-300 mb-8"></div>
              <div className="grid md:grid-cols-2 gap-8">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 2}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 mb-8">
              <h3 className="text-lg font-light text-gray-900 mb-6 tracking-wide uppercase">Project Details</h3>
              <div className="w-8 h-px bg-gray-300 mb-6"></div>
              <div className="space-y-4">
                <div>
                  <span className="font-light text-gray-500 text-sm tracking-wide uppercase block mb-1">Client</span>
                  <span className="text-gray-900 font-light">{project.client}</span>
                </div>
                <div>
                  <span className="font-light text-gray-500 text-sm tracking-wide uppercase block mb-1">Year</span>
                  <span className="text-gray-900 font-light">{project.year}</span>
                </div>
                <div>
                  <span className="font-light text-gray-500 text-sm tracking-wide uppercase block mb-1">Location</span>
                  <span className="text-gray-900 font-light">{project.location}</span>
                </div>
                <div>
                  <span className="font-light text-gray-500 text-sm tracking-wide uppercase block mb-1">Area</span>
                  <span className="text-gray-900 font-light">{project.area}</span>
                </div>
                <div>
                  <span className="font-light text-gray-500 text-sm tracking-wide uppercase block mb-1">Type</span>
                  <span className="text-gray-900 font-light">{project.type}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <h3 className="text-lg font-light text-gray-900 mb-6 tracking-wide uppercase"></h3>
              <div className="w-8 h-px bg-gray-300 mb-6"></div>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 text-sm font-light leading-relaxed tracking-wide">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">Interesado en trabajar juntos?</h3>
            <div className="w-12 h-px bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-500 font-light mb-8 tracking-wide">
              Let's discuss how we can bring your architectural vision to life.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-900 text-gray-900 font-light text-sm tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// pages/study.tsx or pages/index.tsx

export default function StudyPage() {
    return (
      <div className="min-h-screen bg-black text-white px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Text + Image */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold uppercase mb-4">Recorrido y espacios de transición (Peter Zumthor  Christopher Alexander)</h2>
              <p className="text-sm leading-relaxed text-gray-300">
              ANALISIS DEL PROYECTO
              </p>
              <br />
              <p className="text-sm text-gray-300 italic">
              Patrones muertos
              </p>
              <ul className="list-disc list-inside text-sm mt-4 text-gray-300">
                <li>La vivienda carece de un espacio destinado específicamente al comedor, lo que obliga a los usuarios a realizar esta actividad en áreas inadecuadas como la sala de estar o los dormitorios, afectando la funcionalidad y la jerarquía espacial del interior.</li>
                <li>El espacio central de la vivienda se limita a una función de circulación, carece de una identidad propia y no recibe iluminación natural adecuada, lo que lo convierte en un espacio oscuro y sin vitalidad.</li>
                <li>El diseño no contempla áreas destinadas al ocio o al encuentro social en el exterior, lo cual representa una oportunidad perdida para introducir patrones vivos como patios activos, jardines habitables o terrazas con funciones claras.La ubicación de las ventanas no funcionan y el patio no se utiliza lo que lo hace un patio muerto.</li>
                <li>El patio no se integra con las actividades de la vivienda y carece de conexiones visuales o físicas efectivas, lo que lo convierte en un espacio residual o muerto. La ubicación y proporción de las ventanas tampoco fomentan el vínculo interior-exterior.</li>
                <li>La fachada principal carece de elementos que inviten a ser observada o recorrida. No presenta articulaciones formales, materiales o espaciales que propicien un sentido de entrada o pertenencia, haciendo que el acceso pase desapercibido.</li>
                <li>La falta de elementos arquitectónicos como pérgolas, aleros, bancas, vegetación o transiciones escalares refuerza la ausencia de patrones vivos y reduce la habitabilidad del entorno inmediato.</li>
                <li>No se observan estrategias de diseño bioclimático que optimicen la orientación, ventilación cruzada o captación de luz natural, lo que repercute negativamente en la calidad ambiental interior.</li>
              </ul>
            </div>
  
            <img src="https://res.cloudinary.com/dztz492su/image/upload/v1753800174/books/rupcmjeldd1j9qsnswac.jpg" alt="Bridge Study" className="w-full object-cover rounded" />
          </div>
  
          {/* Column 2: Main Machine Image */}
          <div>
            <img src="https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/zru62zas9pukcqs6tife.jpg" alt="Machine" className="w-full object-cover rounded" />
          </div>
  
          {/* Column 3: Blueprint Grid */}
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-blue-900 aspect-[3/4] flex items-center justify-center text-white text-sm rounded">
                VV{i + 1}
              </div>
            ))}
          </div>
  
          {/* Column 4: Axonometric Drawing */}
          <div>
            <img src="https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/gtoozesjlueyra83kh9n.jpg" alt="Drawing" className="w-full object-cover rounded" />
          </div>
  
          {/* Column 5: Wooden Models */}
          <div>
            <img src="https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/vqthdeawzgrxqzldid4g.jpg" alt="Models" className="w-full object-cover rounded" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/dzer7kmz1x7mxe0oudzf.jpg" alt="Models" className="w-full object-cover rounded" />
          </div>
          <div>
            <img src="hhttps://res.cloudinary.com/dztz492su/image/upload/v1753800173/books/zb7wwjnm1bxkpisae4w5.jpg" alt="Models" className="w-full object-cover rounded" />
          </div>
        </div>
      </div>
    );
  }
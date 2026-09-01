import './App.css'

export default function App() {
  return (
    <>
      {/* HEADER */}
      <header id="inicio">
        <h1>Aves de Colombia</h1>
        <p>
          Exhibición virtual sobre algunas de las increíbles
          especies de aves que habitan nuestro territorio.
        </p>
      </header>

      {/* NAVEGACION */}
      <nav>
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#exhibicion">Exhibición</a>
          </li>
          <li>
            <a href="#aruco">Aruco</a>
          </li>
          <li>
            <a href="#tangara">Tángara azulada</a>
          </li>
          <li>
            <a href="#jacana">Jacana común</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        {/* PRESENTACIÓN */}
        <section>
          <h2>Descubre las aves de Colombia</h2>
          <p>
            Colombia posee una enorme variedad de ecosistemas,
            desde bosques hmedos y montaas hasta lagunas,
            pantanos y humedales.
          </p>
          <p>
            Esta diversidad permite que numerosas especies de
            aves encuentren alimento, refugio y lugares adecuados
            para reproducirse.
          </p>
          <p>
            En esta exhibición conoceremos tres especies:
            el Aruco, la Tángara azulada y la Jacana común.
          </p>
          <a href="#exhibicion">
            Comenzar la exhibición
          </a>
        </section>

        {/* EXHIBICIÓN - TARJETAS */}
        <section id="exhibicion">
          <header>
            <h2>Exhibición de aves</h2>
            <p>
              Selecciona una de las aves para conocer ms
              informacion sobre ella.
            </p>
          </header>

          {/* TARJETA 1 */}
          <article>
            <figure>
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Anhima%20cornuta.jpg"
                alt="Fotografía de un Aruco"
                width="350"
              />
              <figcaption>
                Aruco
              </figcaption>
            </figure>
            <h3>Aruco</h3>
            <p>
              <strong>Nombre cientifico:</strong>
              <em>Anhima cornuta</em>
            </p>
            <p>
              Gran ave relacionada con humedales, pantanos,
              lagunas y sabanas inundables.
            </p>
            <a href="#aruco">
              Conocer más sobre esta ave
            </a>
          </article>

          {/* TARJETA 2 */}
          <article>
            <figure>
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Thraupis%20episcopus.jpg"
                alt="Fotografía de una Tángara azulada"
                width="350"
              />
              <figcaption>
                Tángara azulada
              </figcaption>
            </figure>
            <h3>Tángara azulada</h3>
            <p>
              <strong>Nombre cientifico:</strong>
              <em>Thraupis episcopus</em>
            </p>
            <p>
              Habita bosques abiertos, jardines, parques,
              cultivos y ciudades de Colombia.
            </p>
            <a href="#tangara">
              Conocer más sobre esta ave
            </a>
          </article>

          {/* TARJETA 3 */}
          <article>
            <figure>
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Jacana%20jacana.jpg"
                alt="Fotografía de una Jacana común"
                width="350"
              />
              <figcaption>
                Jacana común
              </figcaption>
            </figure>
            <h3>Jacana común</h3>
            <p>
              <strong>Nombre cientifico:</strong>
              <em>Jacana jacana</em>
            </p>
            <p>
              Ave acuática de lagunas, ciénagas y pantanos
              con abundante vegetación flotante.
            </p>
            <a href="#jacana">
              Conocer más sobre esta ave
            </a>
          </article>
        </section>

        {/* INFORMACIÓN ARUCO */}
        <section id="aruco">
          <header>
            <h2>Aruco</h2>
            <p>
              <em>Anhima cornuta</em>
            </p>
          </header>
          <figure>
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Anhima%20cornuta.jpg"
              alt="Aruco en su hábitat"
              width="500"
            />
            <figcaption>
              Aruco
            </figcaption>
          </figure>

          {/* INFORMACIÓN GENERAL */}
          <article>
            <h3>¿Por qué se llama Aruco?</h3>
            <p>
              También conocido como gritador cornudo, se distingue
              por la estructura córnea alargada que sobresale
              de su cabeza.
            </p>
          </article>

          {/* COMPORTAMIENTO */}
          <article>
            <h3>Comportamiento</h3>
            <p>
              Permanece asociado a ambientes acuáticos y puede
              desplazarse entre zonas de vegetación inundada.
            </p>
            <p>
              Su alimentación es principalmente herbívora:
              consume plantas acuáticas, hojas, brotes y semillas.
            </p>
          </article>

          {/* DATO CURIOSO */}
          <aside>
            <h3>Dato curioso</h3>
            <p>
              Posee espolones en las alas y fuertes vocalizaciones.
              No es exclusivo de Colombia: también habita otros
              países de Sudamérica tropical.
            </p>
          </aside>

          {/* HABITAT */}
          <article>
            <h3>Su habitat</h3>
            <p>
              Vive principalmente en humedales tropicales,
              sabanas inundables, lagunas, pantanos, ciénagas
              y zonas próximas a ríos.
            </p>
            <h4>Características del habitat</h4>
            <ul>
              <li>Humedales tropicales.</li>
              <li>Sabanas inundables.</li>
              <li>Lagunas y pantanos.</li>
              <li>Vegetación acuática.</li>
              <li>Zonas cercanas a ríos.</li>
            </ul>
          </article>

          {/* MAPA */}
          <article>
            <h3>¿Dónde se encuentra?</h3>
            <p>
              En Colombia se encuentra principalmente en la
              Amazonia y la Orinoquía, además de otros humedales
              como la Laguna de Sonso en el Valle del Cauca.
            </p>
            <iframe
              src="/mapa-aves.html?ave=aruco"
              width="600"
              height="400"
              title="Mapa de distribución representativa del Aruco"
            />
            <p>
              <small>
                Cada marcador corresponde a una observación
                con coordenadas publicada en GBIF.
              </small>
            </p>
          </article>

          <a href="#exhibicion">
            Volver a las aves
          </a>
        </section>

        {/* INFORMACIÓN TÁNGARA AZULADA */}
        <section id="tangara">
          <header>
            <h2>Tángara azulada</h2>
            <p>
              <em>Thraupis episcopus</em>
            </p>
          </header>
          <figure>
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Thraupis%20episcopus.jpg"
              alt="Tángara azulada"
              width="500"
            />
            <figcaption>
              Tángara azulada
            </figcaption>
          </figure>

          {/* NOMBRE */}
          <article>
            <h3>¿Por qué se llama Tángara azulada?</h3>
            <p>
              Su nombre común hace referencia al plumaje
              azul grisáceo que cubre la cabeza, el dorso
              y el pecho.
            </p>
          </article>

          {/* COMPORTAMIENTO */}
          <article>
            <h3>Comportamiento</h3>
            <p>
              Puede vivir en bosques abiertos, jardines,
              parques, cultivos y zonas urbanas.
            </p>
            <p>
              Construye pequeños nidos en árboles o arbustos
              utilizando fibras vegetales y otros materiales.
            </p>
          </article>

          {/* ALIMENTACIÓN */}
          <article>
            <h3>Alimentación</h3>
            <p>
              Consume frutos, semillas, bayas, néctar,
              insectos y otros pequeños invertebrados.
            </p>
          </article>

          {/* DATO CURIOSO */}
          <aside>
            <h3>Dato curioso</h3>
            <p>
              Al consumir frutos contribuye a la dispersión
              de semillas y se adapta con facilidad a los
              ambientes transformados por las personas.
            </p>
          </aside>

          {/* HÁBITAT */}
          <article>
            <h3>Su hábitat</h3>
            <p>
              Vive en bosques abiertos, bordes de bosque,
              jardines, parques y zonas agrícolas y urbanas.
            </p>
            <p>
              Esta variedad de ambientes explica por qué es
              común observarla en muchas ciudades colombianas.
            </p>
            <h4>Características del hábitat</h4>
            <ul>
              <li>Bosques abiertos.</li>
              <li>Bordes de bosque.</li>
              <li>Jardines y parques.</li>
              <li>Zonas agrícolas.</li>
              <li>Áreas urbanas.</li>
            </ul>
          </article>

          {/* MAPA */}
          <article>
            <h3>¿Dónde se encuentra?</h3>
            <p>
              En Colombia se encuentra ampliamente distribuida,
              tanto en ambientes naturales como rurales y urbanos.
            </p>
            <iframe
              src="/mapa-aves.html?ave=tangara"
              width="600"
              height="400"
              title="Mapa de distribución representativa de la Tángara azulada"
            />
            <p>
              <small>
                Cada marcador corresponde a una observación
                con coordenadas publicada en GBIF.
              </small>
            </p>
          </article>

          <a href="#exhibicion">
            Volver a las aves
          </a>
        </section>

        {/* INFORMACIÓN JACANA COMÚN */}
        <section id="jacana">
          <header>
            <h2>Jacana común</h2>
            <p>
              <em>Jacana jacana</em>
            </p>
          </header>
          <figure>
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Jacana%20jacana.jpg"
              alt="Jacana común"
              width="500"
            />
            <figcaption>
              Jacana común
            </figcaption>
          </figure>

          {/* NOMBRE */}
          <article>
            <h3>¿Por qué se llama Jacana común?</h3>
            <p>
              Su nombre identifica a una especie ampliamente
              distribuida en los humedales de América tropical,
              principalmente en Sudamérica.
            </p>
          </article>

          {/* COMPORTAMIENTO */}
          <article>
            <h3>Comportamiento</h3>
            <p>
              Se desplaza sobre la vegetación acuática utilizando
              sus dedos y uñas extremadamente largos.
            </p>
            <p>
              Presenta poliandria: una hembra puede reproducirse
              con varios machos, quienes cuidan los huevos
              y los polluelos.
            </p>
          </article>

          {/* ALIMENTACI�N */}
          <article>
            <h3>Alimentación</h3>
            <p>
              Consume principalmente insectos y otros invertebrados,
              además de semillas y pequeños organismos acuáticos.
            </p>
          </article>

          {/* DATO CURIOSO */}
          <aside>
            <h3>Dato curioso</h3>
            <p>
              Sus dedos y uñas largos permiten distribuir su peso
              sobre una superficie mayor, facilitándole
              caminar sobre plantas flotantes.
            </p>
          </aside>

          {/* HABITAT */}
          <article>
            <h3>Su hábitat</h3>
            <p>
              Habita principalmente ecosistemas acuáticos
              como lagunas, pantanos, ciénagas y humedales.
            </p>
            <p>
              En estos lugares encuentra vegetación acuática
              que utiliza para desplazarse, protegerse,
              alimentarse y reproducirse.
            </p>
            <h4>Características del hábitat</h4>
            <ul>
              <li>Humedales.</li>
              <li>Lagunas.</li>
              <li>Pantanos.</li>
              <li>Vegetación flotante.</li>
              <li>Juncos y plantas acuáticas.</li>
              <li>Zonas con agua poco profunda.</li>
            </ul>
          </article>

          {/* MAPA */}
          <article>
            <h3>¿Dónde se encuentra?</h3>
            <p>
              Puede encontrarse en diferentes lagunas, ciénagas,
              pantanos y cuerpos de agua con vegetación flotante
              del territorio colombiano.
            </p>
            <iframe
              src="/mapa-aves.html?ave=jacana"
              width="600"
              height="400"
              title="Mapa de humedales donde puede encontrarse la Jacana común"
            />
            <p>
              <small>
                Cada marcador corresponde a una observación
                con coordenadas publicada en GBIF.
              </small>
            </p>
          </article>

          <a href="#exhibicion">
            Volver a las aves
          </a>
        </section>

        {/* SOBRE EL PROYECTO */}
        <section>
          <h2>Sobre esta exhibición</h2>
          <p>
            Esta página busca presentar de forma sencilla
            información sobre algunas especies representativas
            de la biodiversidad colombiana.
          </p>
          <p>
            La estructura utiliza elementos semánticos de HTML5
            como header, nav, main, section, article, aside,
            figure y footer.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contacto">
        <h2>Aves de Colombia</h2>
        <p>
          Exhibición educativa de biodiversidad colombiana.
        </p>
        <p>
          Proyecto académico - Ingeniería Multimedia
        </p>
        <nav>
          <a href="#inicio">
            Volver al inicio
          </a>
        </nav>
      </footer>
    </>
  )
}

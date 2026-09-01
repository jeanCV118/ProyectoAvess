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
            <a href="#perdiz">Perdiz colorada</a>
          </li>
          <li>
            <a href="#tucan">Cabezón tucán</a>
          </li>
          <li>
            <a href="#polla-azul">Polla azul de agua</a>
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
            la Perdiz colorada, el Cabezón tucán y la Polla azul
            de agua.
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
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Chestnut%20wood%20quail%20%28Odontophorus%20hyperythrus%29.jpg"
                alt="Fotografa de una Perdiz colorada"
                width="350"
              />
              <figcaption>
                Perdiz colorada
              </figcaption>
            </figure>
            <h3>Perdiz colorada</h3>
            <p>
              <strong>Nombre cientifico:</strong>
              <em>Odontophorus hyperythrus</em>
            </p>
            <p>
              Ave terrestre relacionada principalmente
              con los bosques húmedos de los Andes colombianos.
            </p>
            <a href="#perdiz">
              Conocer más sobre esta ave
            </a>
          </article>

          {/* TARJETA 2 */}
          <article>
            <figure>
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Semnornis%20ramphastinus%20258139738.jpg"
                alt="Fotograf�a de un Cabez�n tuc�n"
                width="350"
              />
              <figcaption>
                Cabezón tucán
              </figcaption>
            </figure>
            <h3>Cabezón tucán</h3>
            <p>
              <strong>Nombre cientifico:</strong>
              <em>Semnornis ramphastinus</em>
            </p>
            <p>
              Habita principalmente bosques húmedos y bosques
              de niebla de la región occidental de Colombia.
            </p>
            <a href="#tucan">
              Conocer más sobre esta ave
            </a>
          </article>

          {/* TARJETA 3 */}
          <article>
            <figure>
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Tingua%20Azul%20%28Porphyrio%20martinica%29.jpg"
                alt="Fotograf�a de una Polla azul de agua"
                width="350"
              />
              <figcaption>
                Polla azul de agua
              </figcaption>
            </figure>
            <h3>Polla azul de agua</h3>
            <p>
              <strong>Nombre cientifico:</strong>
              <em>Porphyrio martinica</em>
            </p>
            <p>
              Ave acuática que puede encontrarse en humedales,
              lagunas y pantanos con abundante vegetación.
            </p>
            <a href="#polla-azul">
              Conocer más sobre esta ave
            </a>
          </article>
        </section>

        {/* INFORMACIÓN PERDIZ COLORADA */}
        <section id="perdiz">
          <header>
            <h2>Perdiz colorada</h2>
            <p>
              <em>Odontophorus hyperythrus</em>
            </p>
          </header>
          <figure>
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Chestnut%20wood%20quail%20%28Odontophorus%20hyperythrus%29.jpg"
              alt="Perdiz colorada en su h�bitat"
              width="500"
            />
            <figcaption>
              Perdiz colorada
            </figcaption>
          </figure>

          {/* INFORMACIÓN GENERAL */}
          <article>
            <h3>¿Por que se llama Perdiz colorada?</h3>
            <p>
              Su nombre común hace referencia principalmente
              a los tonos castaños y rojizos presentes en
              distintas partes de su plumaje.
            </p>
          </article>

          {/* COMPORTAMIENTO */}
          <article>
            <h3>Comportamiento</h3>
            <p>
              Es principalmente terrestre y suele desplazarse
              caminando por el suelo del bosque.
            </p>
            <p>
              Busca alimento entre la vegetación y la hojarasca,
              donde puede encontrar frutos, semillas y pequeños
              invertebrados.
            </p>
          </article>

          {/* DATO CURIOSO */}
          <aside>
            <h3>Dato curioso</h3>
            <p>
              Es una especie endémica de Colombia, lo que
              significa que su distribución natural se encuentra
              únicamente dentro del territorio colombiano.
            </p>
          </aside>

          {/* HABITAT */}
          <article>
            <h3>Su habitat</h3>
            <p>
              Vive principalmente en bosques húmedos montanos.
              Estos ecosistemas poseen abundante vegetación,
              árboles, arbustos, musgos y una gran cantidad
              de materia vegetal sobre el suelo.
            </p>
            <h4>Características del habitat</h4>
            <ul>
              <li>Bosques húmedos.</li>
              <li>Regiones montañosas.</li>
              <li>Vegetación densa.</li>
              <li>Abundante hojarasca.</li>
              <li>Climas frescos y húmedos.</li>
            </ul>
          </article>

          {/* MAPA */}
          <article>
            <h3>¿Dónde se encuentra?</h3>
            <p>
              La especie habita diferentes regiones de los
              Andes colombianos, especialmente sectores
              montañosos de las cordilleras Central y Occidental.
            </p>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-77.2%2C2.7%2C-74.7%2C6.6&layer=mapnik&marker=3.45%2C-76.53"
              width="600"
              height="400"
              title="Mapa de distribuci�n representativa de la Perdiz colorada"
            />
            <p>
              <small>
                El mapa muestra una región representativa
                de su distribución y no la ubicación exacta
                de ejemplares individuales.
              </small>
            </p>
          </article>

          <a href="#exhibicion">
            Volver a las aves
          </a>
        </section>

        {/* INFORMACIÓN CABEZA TUCÁN */}
        <section id="tucan">
          <header>
            <h2>Cabezón tucán</h2>
            <p>
              <em>Semnornis ramphastinus</em>
            </p>
          </header>
          <figure>
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Semnornis%20ramphastinus%20258139738.jpg"
              alt="Cabez�n tuc�n"
              width="500"
            />
            <figcaption>
              Cabezón tucán
            </figcaption>
          </figure>

          {/* NOMBRE */}
          <article>
            <h3>¿Por qué se llama Cabezón tucán?</h3>
            <p>
              Su nombre hace referencia a su cabeza robusta
              y a su pico grande y llamativo, que recuerda
              visualmente al pico de los tucanes.
            </p>
          </article>

          {/* COMPORTAMIENTO */}
          <article>
            <h3>Comportamiento</h3>
            <p>
              Puede observarse en parejas o pequeños grupos
              moviéndose entre las ramas de los árboles.
            </p>
            <p>
              Utiliza diferentes niveles del bosque y puede
              comunicarse mediante llamados fuertes entre
              individuos.
            </p>
          </article>

          {/* ALIMENTACIÓN */}
          <article>
            <h3>Alimentación</h3>
            <p>
              Su alimentación está compuesta principalmente
              por frutos, aunque también puede consumir
              insectos y otros pequeños alimentos disponibles
              en el bosque.
            </p>
          </article>

          {/* DATO CURIOSO */}
          <aside>
            <h3>Dato curioso</h3>
            <p>
              Puede presentar comportamientos de cooperación
              familiar, donde algunos individuos participan
              en actividades relacionadas con el cuidado
              del grupo.
            </p>
          </aside>

          {/* HÁBITAT */}
          <article>
            <h3>Su hábitat</h3>
            <p>
              Vive principalmente en bosques húmedos de montaña
              y bosques de niebla.
            </p>
            <p>
              Estos ecosistemas poseen árboles altos,
              abundante humedad, musgos, helechos y numerosas
              plantas que crecen sobre los árboles.
            </p>
            <h4>Características del hábitat</h4>
            <ul>
              <li>Bosques de niebla.</li>
              <li>Árboles altos.</li>
              <li>Alta humedad.</li>
              <li>Regiones montañosas.</li>
              <li>Vegetación abundante.</li>
            </ul>
          </article>

          {/* MAPA */}
          <article>
            <h3>¿Dónde se encuentra?</h3>
            <p>
              En Colombia se encuentra principalmente en
              bosques de la región occidental del país.
            </p>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.6%2C0.7%2C-75.6%2C4.5&layer=mapnik&marker=3.65%2C-76.69"
              width="600"
              height="400"
              title="Mapa de distribuci�n representativa del Cabez�n tuc�n"
            />
            <p>
              <small>
                El mapa presenta una zona representativa
                de su distribución.
              </small>
            </p>
          </article>

          <a href="#exhibicion">
            Volver a las aves
          </a>
        </section>

        {/* INFORMACI�N POLLA AZUL */}
        <section id="polla-azul">
          <header>
            <h2>Polla azul de agua</h2>
            <p>
              <em>Porphyrio martinica</em>
            </p>
          </header>
          <figure>
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Tingua%20Azul%20%28Porphyrio%20martinica%29.jpg"
              alt="Polla azul de agua"
              width="500"
            />
            <figcaption>
              Polla azul de agua
            </figcaption>
          </figure>

          {/* NOMBRE */}
          <article>
            <h3>¿Por qué se llama Polla azul de agua?</h3>
            <p>
              Su nombre hace referencia a su relación con
              otras aves conocidas como pollas de agua y
              a los intensos colores azules y púrpuras
              presentes en su plumaje.
            </p>
          </article>

          {/* COMPORTAMIENTO */}
          <article>
            <h3>Comportamiento</h3>
            <p>
              Se desplaza entre vegetación acuática utilizando
              sus patas y dedos largos.
            </p>
            <p>
              Esta característica le permite caminar sobre
              hojas, tallos y plantas flotantes mientras
              busca alimento.
            </p>
          </article>

          {/* ALIMENTACI�N */}
          <article>
            <h3>Alimentación</h3>
            <p>
              Consume diferentes materiales vegetales,
              semillas, frutos y pequeños organismos que
              encuentra dentro de los ecosistemas acuáticos.
            </p>
          </article>

          {/* DATO CURIOSO */}
          <aside>
            <h3>Dato curioso</h3>
            <p>
              Sus largos dedos permiten distribuir su peso
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
              Puede encontrarse en diferentes humedales
              y ecosistemas acuáticos del territorio
              colombiano.
            </p>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.25%2C4.55%2C-73.95%2C4.85&layer=mapnik&marker=4.71%2C-74.10"
              width="600"
              height="400"
              title="Mapa de humedales donde puede encontrarse la Polla azul de agua"
            />
            <p>
              <small>
                El mapa está centrado en la región de Bogotá,
                donde existen diferentes humedales utilizados
                por numerosas especies de aves acuáticas.
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

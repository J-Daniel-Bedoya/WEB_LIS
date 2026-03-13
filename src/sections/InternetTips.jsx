import { ArrowUpRight, CheckCircle2, Gauge, PlayCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import { INTERNET_TIP_DOCS, INTERNET_TIP_PILLARS, INTERNET_TIP_VIDEOS } from '../data/legalData';
import './InternetTips.scss';

const QUICK_POINTS = [
  'Seguridad digital para hogares y negocios.',
  'Control parental y acompañamiento para familias.',
  'Recomendaciones para mejorar la red dentro de casa o la oficina.',
];

export default function InternetTips() {
  return (
    <section className="internet-tips section">
      <div className="container">
        <SectionHeader
          label="Tips de internet"
          title="Contenido útil para navegar mejor, cuidar tu red y aprovechar el servicio"
          subtitle="Como ISP, LIS también debe orientar al usuario. Esta sección organiza los recursos más útiles para seguridad, control del hogar y rendimiento cotidiano de la conexión."
          align="left"
        />

        <div className="internet-tips__layout">
          <article className="internet-tips__intro">
            <div className="internet-tips__intro-copy">
              <p className="internet-tips__kicker">Recursos prácticos para clientes LIS</p>
              <p className="internet-tips__lead">
                La conectividad no termina en la instalación. Estos materiales ayudan a tomar
                mejores decisiones sobre seguridad, uso familiar y desempeño de la red.
              </p>
            </div>

            <ul className="internet-tips__checklist">
              {QUICK_POINTS.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="internet-tips__speedtest">
              <div className="internet-tips__speedtest-head">
                <div className="internet-tips__speedtest-icon">
                  <Gauge size={22} />
                </div>
                <strong>Prueba tu velocidad</strong>
              </div>
              <div className="internet-tips__speedtest-cta">
                <Button
                  href="https://www.speedtest.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir Speedtest
                </Button>
              </div>
              <p className="internet-tips__speedtest-description">
                Mide tu conexión y comparte el resultado con soporte si necesitas ayuda.
              </p>
            </div>

            <div className="internet-tips__actions">
              <Button to="/contacto">Hablar con soporte</Button>
              <Button href="#documentos-soporte" variant="outline">
                Ver otros documentos
              </Button>
            </div>
          </article>

          <div className="internet-tips__pillars" aria-label="Categorias de información útil">
            {INTERNET_TIP_PILLARS.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article key={pillar.title} className="internet-tips__pillar">
                  <div className="internet-tips__pillar-icon">
                    <Icon size={20} />
                  </div>
                  <div className="internet-tips__pillar-body">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                    <ul>
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="internet-tips__docs">
          {INTERNET_TIP_DOCS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`internet-tips__doc ${item.featured ? 'internet-tips__doc--featured' : ''}`}
            >
              <div className="internet-tips__doc-top">
                <span className="internet-tips__doc-tag">{item.tag}</span>
                <span className="internet-tips__doc-type">{item.fileType.toUpperCase()}</span>
              </div>
              <div className="internet-tips__doc-body">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <span className="internet-tips__doc-link">
                Abrir guía
                <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>

        <div className="internet-tips__videos">
          <div className="internet-tips__videos-head">
            <div>
              <p className="internet-tips__kicker">Videoguias</p>
              <h3>Maximiza tu experiencia en internet: consejos y trucos esenciales</h3>
              <p>
                Videoguias de consulta con recomendaciones sobre seguridad digital, uso
                responsable de internet y acompañamiento familiar en el entorno digital.
              </p>
            </div>
            <Button
              href="https://www.youtube.com/results?search_query=En+TIC+Confio+Internet+seguro"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Ver más videos
            </Button>
          </div>

          <div className="internet-tips__video-grid">
            {INTERNET_TIP_VIDEOS.map((video) => (
              <a
                key={video.href}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="internet-tips__video-card"
              >
                <div className="internet-tips__video-thumb">
                  <img
                    src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                  />
                  <span className="internet-tips__video-play">
                    <PlayCircle size={18} />
                    YouTube
                  </span>
                </div>
                <div className="internet-tips__video-body">
                  <div className="internet-tips__video-top">
                    <span className="internet-tips__doc-tag">{video.tag}</span>
                    <span className="internet-tips__doc-type">Video</span>
                  </div>
                  <h4>{video.title}</h4>
                  <p>{video.summary}</p>
                </div>
                <span className="internet-tips__doc-link">
                  Ver en YouTube
                  <ArrowUpRight size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

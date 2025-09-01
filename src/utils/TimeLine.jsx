import './Timeline.css';



const Timeline = ({title , items,bgColor}) => {
  return (
    <section className={`timeline-bg-${bgColor}`}>
      <div className="timeline-container">
        <div className="timeline-title ">
          <h2>{title}</h2>
          <div className="timeline-underline"></div>
        </div>

        <div className="timeline-inner">
          {/* Línea vertical */}
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-card-heading">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="institution">{item.institution}</p>
                    </div>
                    <span className="period">{item.period}</span>
                  </div>
                  <p className="description">{item.description}</p>
                  <div className="technologies">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="technology-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
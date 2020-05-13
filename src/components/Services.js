import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'The contamination of important synthetic (surface unmodified) polymers by various heavy metal compounds (such as copper, manganese and lead) in aqueous medium was investigated in this study.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'The contamination of important synthetic (surface unmodified) polymers by various heavy metal compounds (such as copper, manganese and lead) in aqueous medium was investigated in this study.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info:
          'The contamination of important synthetic (surface unmodified) polymers by various heavy metal compounds (such as copper, manganese and lead) in aqueous medium was investigated in this study.',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest beer',
        info:
          'The contamination of important synthetic (surface unmodified) polymers by various heavy metal compounds (such as copper, manganese and lead) in aqueous medium was investigated in this study.',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

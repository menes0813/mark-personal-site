import { clients } from 'data/about'
import React from 'react'

export const Clients: React.FC = () => {
  return (
    <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {clients.map((client, i) => (
            <li className="clients-item" key={`client-${i}`}>
              <a href={client.url} target="_blank" rel="noreferrer">
                <img src={client.logo} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
  )
}

import React from 'react';

export default function Main() {
  return (
    <main style={{ padding: '1rem 0d' }}>
      <ul>
        <li>
          <a href="#news">Logout</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a class="active" href="#home">
            Home
          </a>
        </li>
      </ul>
      <div style={{ width: '70%', margin: 'auto', marginTop: '70px' }}>
        <h2 style={{ textAlign: 'center' }}>Residential Realestate</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <img
            src="https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg"
            alt=""
            width="500px"
          />
        </div>

        <p>
          Residential real estate may contain either a single family or
          multifamily structure that is available for occupation or for
          non-business purposes.
        </p>
        <p>
          Residences can be classified by and how they are connected to
          neighbouring residences and land. Different types of housing tenure
          can be used for the same physical type. For example, connected
          residences might be owned by a single entity and leased out, or owned
          separately with an agreement covering the relationship between units
          and common areas and concerns
        </p>
        <p>
          The size of an apartment or house can be described in square feet or
          meters. In the United States, this includes the area of "living
          space", excluding the garage and other non-living spaces. The "square
          meters" figure of a house in Europe may report the total area of the
          walls enclosing the home, thus including any attached garage and
          non-living spaces, which makes it important to inquire what kind of
          surface area definition has been used. It can be described more
          roughly by the number of rooms. A studio apartment has a single
          bedroom with no living room (possibly a separate kitchen). A
          one-bedroom apartment has a living or dining room separate from the
          bedroom. Two bedroom, three bedroom, and larger units are common.
        </p>
        <h2>As an investment</h2>

        <p>
          A house that was sold in Victoria Australia In markets where land and
          building prices are rising, real estate is often purchased as an
          investment, whether or not the owner intends to use the property.
          Often investment properties are rented out, but "flipping" involves
          quickly reselling a property, sometimes taking advantage of arbitrage
          or quickly rising value, and sometimes after repairs are made that
          substantially raise the value of the property.
        </p>
        <p>
          Luxury real estate is sometimes used as a way to store value,
          especially by wealthy foreigners, without any particular attempt to
          rent it out. Some luxury units in London and New York City have been
          used as a way for corrupt foreign government officials and
          businesspeople from countries without strong rule of law to launder
          money or to protect it from seizure.
        </p>
      </div>
    </main>
  );
}

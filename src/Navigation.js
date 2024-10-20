import React from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="bloomie"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Bloomie
          </Link>
        </li>
        <li>
          <Link
            to="cloudy"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Cloudy
          </Link>
        </li>
        <li>
          <Link
            to="banho_rapido"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Banho Rápido
          </Link>
        </li>
        <li>
          <Link
            to="youtube_pip"
            smooth={true}
            duration={500}
            offset={-50}
          >
            YouTube PIP
          </Link>
        </li>
        <li>
          <Link
            to="top_down_boat"
            smooth={true}
            duration={500}
            offset={-50}
          >
            TopDownBoat
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
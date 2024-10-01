import React, { useRef, useEffect } from "react";

import Almundo from "../images/clients/almundo.svg?url";
import BI from "../images/clients/bi.svg?url";
// import Andreani from "../images/clients/andreani.svg?url";
import Lolla from "../images/clients/lolla.svg?url";
import KC from "../images/clients/kc.svg?url";
import Carp from "../images/clients/carp.svg?url";
import Oracle from "../images/clients/oracle.svg?url";
import Pariscrepas from "../images/clients/paricrepas.svg?url";
import Rocky from "../images/clients/rockypoint.svg?url";
import Santader from "../images/clients/santander.svg?url";
import Topper from "../images/clients/topper.svg?url";
import Zurich from "../images/clients/zurich.svg?url";
import Dakar from "../images/clients/dakar.svg?url";
import AirEuropa from "../images/clients/aireuropa.svg?url";
import Toyota from "../images/clients/toyota.svg?url";

interface Logo {
  key: string;
  name: string;
  src: string;
  alt: string;
}

const Marquee: React.FC = () => {
  const logosRef = useRef<HTMLUListElement>(null);

  const logos: Logo[] = [
    {
      key: "Almundo",
      name: "Almundo",
      src: Almundo,
      alt: "Almundo Logo",
    },
    {
      key: "BI",
      name: "BI",
      src: BI,
      alt: "BI Logo",
    },
    // {
    //   key: "Andreani",
    //   name: "Andreani",
    //   src: Andreani,
    //   alt: "Andreani Logo",
    // },
    {
      key: "Lolla",
      name: "Lolla",
      src: Lolla,
      alt: "Lolla Logo",
    },
    {
      key: "KC",
      name: "KC",
      src: KC,
      alt: "KC Logo",
    },
    {
      key: "Carp",
      name: "Carp",
      src: Carp,
      alt: "Carp Logo",
    },
    {
      key: "Oracle",
      name: "Oracle",
      src: Oracle,
      alt: "Oracle Logo",
    },
    {
      key: "Pariscrepas",
      name: "Pariscrepas",
      src: Pariscrepas,
      alt: "Pariscrepas Logo",
    },
    {
      key: "Rocky",
      name: "Rocky",
      src: Rocky,
      alt: "Rocky Logo",
    },
    {
      key: "Santader",
      name: "Santader",
      src: Santader,
      alt: "Santader Logo",
    },
    {
      key: "Topper",
      name: "Topper",
      src: Topper,
      alt: "Topper Logo",
    },
    {
      key: "Zurich",
      name: "Zurich",
      src: Zurich,
      alt: "Zurich Logo",
    },
    {
      key: "Dakar",
      name: "Dakar",
      src: Dakar,
      alt: "Dakar Logo",
    },
    {
      key: "AirEuropa",
      name: "AirEuropa",
      src: AirEuropa,
      alt: "AirEuropa Logo",
    },
    {
      key: "Toyota",
      name: "Toyota",
      src: Toyota,
      alt: "Toyota Logo",
    },
  ];

  useEffect(() => {
    const cloneNode = () => {
      if (!logosRef.current) return;
      const ul = logosRef.current;
      const clone = ul.cloneNode(true);
      if (!(clone instanceof HTMLElement)) return;
      clone.setAttribute("aria-hidden", "true");
      ul.parentElement.insertBefore(clone, ul.nextSibling);
    };
    cloneNode();
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]
    "
    >
      <ul
        ref={logosRef}
        className="flex items-center justify-center animate-infinite-scroll"
      >
        {logos.map((logo) => (
          <li key={logo.key} className="mx-8">
            <img
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
              className="max-h-20 xl:max-h-36 max-w-[200px]
              "
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;

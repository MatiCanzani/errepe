import React from "react";

const MultipleFileDownload = ({ catalog }: { catalog: { [category: string]: string[] } }): JSX.Element => {
  const downloadFile = (url: string): void => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Constants for file URLs
  const Carpas: string[] = [
    "../../public/Catalogos/Carpas/Datos Técnicos Carpas Beduinas.pdf",
    "../../public/Catalogos/Carpas/Dosier Carpas Beduinas.pdf",
    "../../public/Catalogos/Carpas/Dosier Pergola Cubo.pdf",
  ];

  const Iluminación: string[] = [
    "../../public/Catalogos/Iluminación/Brazos Con Luz.pdf",
    "../../public/Catalogos/Iluminación/Tipos de Iluminación.pdf",
  ];

  const Mobiliarion: string[] = [
    "../../public/Catalogos/Mobiliarios/Catalogo de mesas.pdf",
    "../../public/Catalogos/Mobiliarios/Catalogo Mesas cd Banquetes.pdf",
    "../../public/Catalogos/Mobiliarios/Catalogos Piezas Únicas.pdf",
    "../../public/Catalogos/Mobiliarios/Chill out Chester.pdf",
    "../../public/Catalogos/Mobiliarios/Mobiliario Chill Out Cocktail.pdf",
  ];

  return (
    <div>
      {Object.keys(catalog).map((category: string, categoryIndex: number) => (
        <div key={categoryIndex}>
          <h2>{category}</h2>
          <ul>
            {catalog[category].map((url: string, fileIndex: number) => (
              <li key={fileIndex}>
                <button onClick={() => downloadFile(url)}>Download File {fileIndex + 1}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MultipleFileDownload;

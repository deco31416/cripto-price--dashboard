import React from "react";
import "./Footer.css"; // Importamos la hoja de estilos

export default function Footer() {
  return (
    <footer className="footer">
      {/* Franja superior - Descargos legales */}
      <div className="footer-legal">
        {[
          {
            title: "DESCARGO DE RESPONSABILIDAD DE CONTENIDO",
            content:
              " Las referencias a nombres, logotipos y marcas de terceros en mi sitio web son solo para identificar tecnologías utilizadas en mis servicios. Estos titulares no están afiliados a mí, ni avalan mis desarrollos, y todos los derechos sobre dichas marcas pertenecen a sus respectivos propietarios.",
          },
          {
            title: "AVISO LEGAL SOBRE ASESORÍA FINANCIERA",
            content:
              "No ofrezco asesoramiento en inversiones. Mi asesoría se limita a evaluar la viabilidad financiera de los productos que desarrollo y a las consultorías financieras para proyectos específicos contratados por mis clientes. Les recomiendo que consulte mis Términos de uso y Advertencia de riesgos, y que busque asesoramiento profesional independiente. Realice su propia investigación conforme a las leyes de su país.",
          },
          {
            title: "AVISO LEGAL DE RESPONSABILIDAD",
            content:
              "Me especializo en el desarrollo de productos y en la asesoría para su correcta implementación. No asumo ninguna responsabilidad legal por el uso en que mis clientes decidan dar a los desarrollos, boilerplate o templates proporcionados. Las decisiones financieras, de implementación y las obligaciones legales en cada jurisdicción son responsabilidad exclusiva de mis clientes y/o usuarios que ponen en producción mis soluciones tecnológicas. Solo los productos que han sido verificados y aprobados por mí se anuncian en mi sitio web. Para cualquier consulta o verificación, mis correos electrónicos oficiales están disponibles en las secciones legales de mi sitio web.",
          },
        ].map((item, key) => (
          <p key={key}>
            <strong>{item.title}:</strong> {item.content}
          </p>
        ))}
      </div>

      {/* Franja inferior - Enlaces legales */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}
          <a
            href="https://deco31416.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-400 hover:text-blue-500 transition-colors"
          >
            DECO31416.COM
          </a>
        </p>
      </div>
    </footer>
  );
}

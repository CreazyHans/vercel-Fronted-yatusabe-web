import React from 'react';
import styles from './PrivacyPolicyPage.module.css'; // Podemos reutilizar los mismos estilos

const termsAndConditionsHTML = `
  <h1>Términos y Condiciones</h1>
  <p>Fecha de entrada en vigor: 13 de Septiembre de 2025</p>

  <h2>1. Introducción</h2>
  <p>¡Bienvenido a Ya Tu Sabe TV RD! Estos Términos y Condiciones rigen el uso de nuestro sitio web, ubicado en yatusabetvrd.online (en adelante, el "Servicio"), operado por Ya Tu Sabe TV RD.</p>
  <p>Al acceder o utilizar nuestro Servicio, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con alguna parte de los términos, no podrá acceder al Servicio.</p>

  <h2>2. Propiedad Intelectual</h2>
  <p>El Servicio y su contenido original, características y funcionalidades son y seguirán siendo propiedad exclusiva de Ya Tu Sabe TV RD y sus licenciantes. El Servicio está protegido por derechos de autor, marcas registradas y otras leyes tanto de la República Dominicana como de países extranjeros. Nuestras marcas comerciales no pueden ser utilizadas en conexión con ningún producto o servicio sin el consentimiento previo por escrito de Ya Tu Sabe TV RD.</p>

  <h2>3. Enlaces a Otros Sitios Web</h2>
  <p>Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por Ya Tu Sabe TV RD.</p>
  <p>Ya Tu Sabe TV RD no tiene control ni asume responsabilidad alguna por el contenido, las políticas de privacidad o las prácticas de los sitios web o servicios de terceros. Además, reconoce y acepta que Ya Tu Sabe TV RD no será responsable, directa o indirectamente, de ningún daño o pérdida causada o presuntamente causada por o en conexión con el uso o la confianza en dicho contenido, bienes o servicios disponibles en o a través de dichos sitios web o servicios.</p>
  <p>Le recomendamos encarecidamente que lea los términos y condiciones y las políticas de privacidad de cualquier sitio web o servicio de terceros que visite.</p>

  <h2>4. Usos Prohibidos</h2>
  <p>Usted puede usar el Servicio solo para fines lícitos y de acuerdo con los Términos. Usted se compromete a no usar el Servicio:</p>
  <ul>
      <li>De ninguna manera que viole cualquier ley o regulación nacional o internacional aplicable.</li>
      <li>Con el propósito de explotar, dañar o intentar explotar o dañar a menores de cualquier manera.</li>
      <li>Para transmitir o procurar el envío de cualquier material publicitario o promocional, incluido cualquier "correo basura", "carta en cadena", "spam" o cualquier otra solicitud similar.</li>
      <li>Para hacerse pasar o intentar hacerse pasar por la Compañía, un empleado de la Compañía, otro usuario o cualquier otra persona o entidad.</li>
      <li>De cualquier manera que infrinja los derechos de otros, o de cualquier forma que sea ilegal, amenazante, fraudulenta o dañina.</li>
  </ul>

  <h2>5. Terminación</h2>
  <p>Podemos terminar o suspender su acceso a nuestro Servicio de inmediato, sin previo aviso ni responsabilidad, a nuestra entera discreción, por cualquier motivo, incluido, entre otros, el incumplimiento de los Términos.</p>
  <p>Todas las disposiciones de los Términos que por su naturaleza deban sobrevivir a la terminación sobrevivirán a la terminación, incluidas, entre otras, las disposiciones de propiedad, las renuncias de garantía, la indemnización y las limitaciones de responsabilidad.</p>

  <h2>6. Exclusión de Garantías</h2>
  <p>El uso del Servicio es bajo su propio riesgo. El Servicio se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD". El Servicio se proporciona sin garantías de ningún tipo, ya sean expresas o implícitas, incluidas, entre otras, las garantías implícitas de comerciabilidad, idoneidad para un propósito particular, no infracción o curso de ejecución.</p>

  <h2>7. Limitación de Responsabilidad</h2>
  <p>En ningún caso Ya Tu Sabe TV RD, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, la pérdida de ganancias, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de (i) su acceso o uso o incapacidad para acceder o usar el Servicio; (ii) cualquier conducta o contenido de un tercero en el Servicio; (iii) cualquier contenido obtenido del Servicio; y (iv) el acceso, uso o alteración no autorizados de sus transmisiones o contenido, ya sea que se base en garantía, contrato, agravio (incluida la negligencia) o cualquier otra teoría legal, ya sea que hayamos sido informados o no de la posibilidad de dicho daño.</p>

  <h2>8. Ley Aplicable</h2>
  <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Dominicana, sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>

  <h2>9. Cambios en los Términos</h2>
  <p>Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso con al menos 30 días de antelación antes de que los nuevos términos entren en vigencia. Lo que constituye un cambio material se determinará a nuestra entera discreción.</p>
  <p>Al continuar accediendo o utilizando nuestro Servicio después de que esas revisiones entren en vigencia, usted acepta estar sujeto a los términos revisados. Si no está de acuerdo con los nuevos términos, ya no está autorizado a utilizar el Servicio.</p>

  <h2>10. Contáctenos</h2>
  <p>Si tiene alguna pregunta sobre estos Términos, por favor contáctenos por correo electrónico: <b>yatusabetvrd@gmail.com</b>.</p>
`;

function TermsAndConditionsPage() {
  return (
    <main className="App-container">
      <div 
        className={styles.legalPage} 
        dangerouslySetInnerHTML={{ __html: termsAndConditionsHTML }} 
      />
    </main>
  );
}

export default TermsAndConditionsPage;

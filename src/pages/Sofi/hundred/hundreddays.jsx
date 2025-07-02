import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import styles from './hundreddays.module.css';

const HundredDays = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');

  // Aquí puedes agregar más páginas fácilmente
  const pages = [
    {
      title: "Portada",
      type: "cover",
      bookTitle: "100",
      author: "Charlie Gallegos",
      subtitle: "El numero 100, uno de los numeros mas misteriosos y relativos de todos.",
      content: ""
    },
    {
      title: "Relatividad",
      content: "El numero 100 puede parecer un numero muy pequeño o un numero muy grande, depende del uso que le damos, podria decir que hoy con 100 pesos no me alcanza para nada mas que para unas galletas, unas papas y unas coca, luego ya no me alcanzaria para nada mas, en este caso el numero 100 es demasiado pequeño, tanto asi que con 100 pesos no podria ni si quiera comer algo bien. Pero el numero 100 tambien puede llegar a ser muy muuuy grande, por ejemplo, si ahorita alguien me pidiera hacer 100 lagartijas sin parar, creo que al llegar al numero 30 voy a empezar a sentir cada lagartija como si fueran 5 a la vez, y al momento de llegar a la lagartija 60, voy a sentir como si en mi espalda estuviera cargando mas de una tonelada. En este caso el numero 100 es algo muuuy grande y algo que podria incluso llegar a decir que es mucho. Este es numero es demasiado relativo y va a depender del contexto y del sentido que se le quiera dar, pero tambien se podria decir que el numero 100 es un buen numero de referencia para poder proponerse cosas o para poder hacer mas cosas."
    },
    {
      title: "Cosas que puedes hacer o proponerte",
      content: "El numero 100 es un buen numero porque puedes cumplir metas o hacer muchas cosas en 100 dias, mucha gente se hace metas de que en 100 dias pueden llegar a aprender algo nuevo como un nuevo idioma, o una meta de que en 100 dias puedes recorrer medio mundo con los recursos necesarios, o tal vez una meta en donde en 100 dias pueden llegar a ahorrar dinero para algun regalo. En 100 dias puedes llegar a hacer muchas cosas, tambien esta el lado negativo de esto, porque tambien si tuviera la obligacion de hacer algo que no me gusta durante 100 dias, seria un sufrimiento terrible ya que es mucho el tiempo que soportar algo que no te gusta, o tambien puede darse el caso de que algo va a pasar en 100 dias y solamente no puedes esperar a que llegue el dia numero 100 y cada dia se va sintiendo como si fue un mes entero solo porque ya quieres que llegue ese anhelado dia 100. Pero conociendo esto podria contarte una historia en donde en 100 dias pasaron cosas tan increibles y cosas tan fascinantes que incluso podrian llegar a hacer llorar a una persona por tal historia."
    },
    {
      title: "Nuestra historia",
      content: "Esta es la historia de dos personas que empezaron a hablar un 5 de Marzo de 2025, por la unica razon de poder ver un proyecto tan increible como el tuyo y poder apoyarte un poco con otro proyecto tuyo, ese dia, el dia numero 1 que hablamos, una platica entre solo nosotros dos, fue un momento en el que no se sabia que iba a pasar pero que sabia habia conocido a una persona muuy maravillosa, estuvimos mas de 100 minutos solo hablando, y cada minuto contigo fue muy relativo, cada minuto contigo parecia que pasaba muy lento el tiempo porque la platica era tan interesante que se sentia como de esas platicas en donde se puede pasar horas y solo cuando volteaba a ver la hora veia como ya habia pasado otra hora u otras dos o tres, el tiempo contigo fue tan interesante e increible que 100 minutos se sintieron tanto lentos como rapidos.En ese momento no me hubiera imaginado como cambiarías mi vida totalmente en un giro de 180 grados, desde ese día y hasta el día de hoy han sido los más felices que he tenido. Pasaron solo 17 días para que sintiera la necesidad de decirte que me gustas, y que a pesar de todos los obstáculos que puedan haber en el camino totalmente valía la pena pasar cada uno de ellos solo para poder estar con tu persona, no importa cuántos obstáculos nos ponga el camino, te aseguro que en ese momento lo único que pensaba es que quería hacer todo lo que estaba en mis manos para poder estar contigo, y así seguiré siempre haciendo todo lo que está dentro de mí para poder superar todo lo que está en nuestro camino para poder estar juntos. 17 días bastaron para que literalmente en lo único que pensara fuera en ti, solo fueron unos pocos días para que pudiera desarrollar sentimientos contigo."
    },
    {
      title: "6 días",
      content: "Y luego tuvieran que pasar 6 días para que ya nos pudiéramos decir que nos gustábamos🫶🏼❤️, porque antes de esos 6 días solamente decíamos que lo veíamos por una lado diferente Jajajaja, y justo tuvieron que pasar 6 días solo para poder decimos un me gustas, es de los días más felices el que me hayas dicho esas palabras."
    },
    {
      title: "13 días",
      content: "Dicen que el 13 es un número de mala suerte, por ahí dicen que el viernes 13 es malo Jajaja, 13 días pasaron para que justo tuviéramos una primera “discusión” en donde por suerte todo salió bien y al final lo que sentíamos el uno por el otro salió más grande que una “discusión”, lo pudimos superar y gracias a todo eso hoy estoy más que feliz contigo."
    },
    {
      title: "5 días",
      content: "5 días después de nuestra primera “discusion” hablamos de un tema que para mí fue toda una ilusión, porque fue imaginarme contigo en este sueño el cual tiene que ver con campanas, con una fiesta, mucha gente con traje y la persona más hermosa del mundo vestida de blanco, y yo me imagino que si ya sabes a qué me refiero y a una boda, fue una madrugada en donde estábamos hablando de cómo quisiéramos que fuera nuestra boda🫶🏼❤️, en un lugar con mucho verde y con ciertas características, yo estaba maravillado y soñando que llegara ese día contigo, de verdad que en tan poco tiempo ya estábamos hablando de esos temas y fue algo muy maravilloso."
    },
    {
      title: "14 días",
      content: "14 días después de esto🫶🏼❤️, dos semanas después de esto sucedió uno de los mejores días de mi vida, pude ver a los ojos a la persona más hermosa del mundo, literalmente conocí a la persona más bella y hermosa del mundo en persona, yo no podía dejar de verte, literal los ojos no los podía sacar de encima y la sensación de tenerte cerca de mí es de la sensaciones más maravillosas del mundo, yo no podía dejar de abrazarte🫶🏼❤️ y sentirte porque literalmente lo único que quería era el estar contigo, solo quería que cada minuto fuera un poco más largo que el otro para poder estar contigo."
    },
    {
      title: "2 días",
      content: "Solo dos días después tuvimos el día más más bonito de mi vida🫶🏼❤️, literalmente la cita más hermosa que puede haber con un día empezando por un café donde hay muchos gatitos y comiendo algo muy delicioso para solo después estar en el acuario viendo los pecesitos pasar de lado a otro, viendo un par de arañas por ahí Jajajaja, y luego ir a comer una comida muy rica, que tal vez y no era lo que quería pero igual estuvo buena Jajajaja y luego ir a pasear al Santa Lucía para poder ver las luces y estar en el río, y al final estar caminando tomados de la mano por fundidora, para que al final estemos abrazados sentados en una banca solamente dándote besitos🫶🏼❤️, y para finalizar ir en el coche abrazados solo haciéndote piojito, si me preguntarán los días más felices de mi vida el primer lugar es ese definitivamente."
    },
    {
      title: "14 días",
      content: "14 días después estábamos haciendo nuestro primer sábado de películas, en donde los dos podemos disfrutar de unas películas y podemos estar viéndonos al mismo tiempo donde la verdad es de que muchas veces solo me distraigo contigo, viendo a la persona más hermosa y preciosa del mundo, de verdad que no tienes idea de lo mucho que disfruto de hacer esas cosas contigo porque de verdad que soy más que feliz🫶🏼❤️, me encantas y te adoro como no tienes idea de verdad, es una tradición que de verdad quisiera mantener y compartirla con nuestros hijos algun dia, de verdad que si es algo que quiero mantener de verdad."
    },
    {
      title: "14 días",
      content: "14 días después pasó algo curioso y es que empezamos a hablar de unos temas muy muuuuuy interesantes Jajajaja, por que ese día recibí muchas fotos tuyas donde la siguiente que veía me enamoraba más y más de ti🫶🏼❤️, y aparte fue cuando por fin te pude decir lo mucho que me fascinas en el sentido físico en donde de verdad que no tienes idea de cuanto es que yo te deseo y quisiera poder estar contigo, porque de verdad que no tienes idea de cuánto tiempo ocuparás tu en mi mente, literalmente mi mente siempre está distraída contigo."
    },
    {
      title: "7 días",
      content: "Solo 7 días después me sentí más que orgulloso de ti y de todo lo que estabas haciendo y logramos en tu vida🫶🏼❤️, no pude sentirme más orgulloso y feliz de ti de que hayas podido haber conseguido eso que ya te merecías desde semestres pasado pero el que sientas que el esfuerzo que haces y todo lo que eres debe ser reconocido porque de verdad que eres la persona más hermosa, inteligente y capaz que hay en este mundo.🫶🏼❤️ Estoy más que orgullo de ti mi niña linda y de verdad que no tienes idea de lo mucho que te admiro y quiero."
    },
    {
      title: "7 días",
      content: "7 días después tuvimos una discusión que nos hizo hacer y decir unas cosas que tal vez y tú no recuerdas, pero yo sí las recuerdo por dos palabras que me dijiste después de esa discusión y solo puedo decirte que de verdad yo lo siento como no tienes idea y de verdad que a pesar de que no lo diga🫶🏼❤️, trato de hacer cierto tipo de acciones para que veas lo mucho que yo siento por ti y que de verdad que yo quisiera gritarte esas cosas porque de verdad que no sabes lo mucho que yo siento. TE ADORO Y ME ENCANTAAAAASSS COMO NO TIENES IDEAAAAA.🫶🏼❤️"
    },
    {
      title: "6+13+5+14+2+14+14+7+7+18 = 100 🫶🏼❤️",
      content: "Y estamos aquí, 18 días después, 18 días después y ya son 100 días los que estamos juntos, en donde hicimos aquella promesa en donde tanto tú como yo íbamos a ser sólo nosotros, de verdad que no sabes cómo te adoro y lo mucho que me has hecho sentir estos 100 días, yo te adoro, eres el amor de mi vida y de verdad que no sabes lo mucho que me encantas y que siento por ti, eres mi adoración y me has hecho la persona más feliz del mundo durante estos 100 días. A pesar de que yo sé que hemos hablado más de 100 días, tomo como referencia el día 24 porque es el día en donde hicimos la promesa, y no podría yo saber expresarme todo lo que siento por ti, y este tipo de cosas es una manera de expresar un poco lo que siento porque las palabras no me alcanzas para poder expresar esto que hay en mi corazón, eres mi vida entera, te adoro con todo mi corazón y eres más que el amor de mi vida. Espero que estos 100 días sean solo un comienzo y espero que llegue el día número 1000 o el día número 10000 y si fuera posible el día número 100,000 a tu lado por que de verdad que contigo vivirá más de 100 años y todo ese tiempo y este que acaba de pasar la he vivido pensando en ti. Te adoro mucho mi niña linda y espero que haya 100 días más ❤️🥰🫶🏼"
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
        setFlipDirection('');
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
        setFlipDirection('');
      }, 300);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, isFlipping]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <BookOpen className={styles.bookIcon} size={32} />
            <h1 className={styles.mainTitle}>100</h1>
          </div>
          <p className={styles.subtitle}>Un pequeño regalo que hice para ti, espero que te guste y espero poder hacer mas cosas por ti.</p>
        </div>

        {/* Book Container */}
        <div className={styles.perspective}>
          <div className={styles.bookContainer}>
            
            {/* Book Shadow */}
            <div className={styles.bookShadow}></div>
            
            {/* Book Base */}
            <div className={styles.bookBase}>
              
              {/* Page Container */}
              <div className={styles.pageContainer}>
                
                {/* Current Page */}
                <div 
                  className={`${styles.currentPage} ${
                    pages[currentPage]?.type === 'cover' ? styles.coverPage : styles.regularPage
                  } ${
                    isFlipping ? (flipDirection === 'next' ? styles.flipNext : styles.flipPrev) : ''
                  }`}
                  style={{ 
                    transformOrigin: flipDirection === 'next' ? 'right center' : 'left center',
                  }}
                >
                  {pages[currentPage]?.type === 'cover' ? (
                    /* Cover Page */
                    <div className={styles.coverContent}>
                      
                      {/* Decorative Background Pattern */}
                      <div className={styles.decorativePattern}>
                        <div className={`${styles.circle} ${styles.circle1}`}></div>
                        <div className={`${styles.circle} ${styles.circle2}`}></div>
                        <div className={`${styles.circle} ${styles.circle3}`}></div>
                        <div className={`${styles.circle} ${styles.circle4}`}></div>
                        <div className={`${styles.circle} ${styles.circle5}`}></div>
                      </div>

                      {/* Cover Content */}
                      <div className={styles.coverTextContainer}>
                        
                        {/* Decorative Top */}
                        <div className={styles.decorativeTop}></div>
                        
                        {/* Main Title */}
                        <h1 className={styles.coverTitle}>
                          {pages[currentPage]?.bookTitle}
                        </h1>
                        
                        {/* Subtitle */}
                        <p className={styles.coverSubtitle}>
                          {pages[currentPage]?.subtitle}
                        </p>
                        
                        {/* Decorative Middle */}
                        <div className={styles.decorativeMiddle}>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                        </div>
                        
                        {/* Author */}
                        <p className={styles.coverAuthor}>
                          {pages[currentPage]?.author}
                        </p>
                        
                        {/* Decorative Bottom */}
                        <div className={styles.decorativeBottom}></div>
                    
                      </div>
                    </div>
                  ) : (
                    /* Regular Page */
                    <div className={styles.pageContent}>
                      
                      {/* Page Header */}
                      <div className={styles.pageHeader}>
                        <h2 className={styles.pageTitle}>
                          {pages[currentPage]?.title}
                        </h2>
                        <div className={styles.pageNumber}>
                          <span>
                            Página {currentPage + 1} de {pages.length}
                          </span>
                        </div>
                      </div>
                      
                      {/* Page Content */}
                      <div className={styles.pageText}>
                        <p className={styles.contentText}>
                          {pages[currentPage]?.content}
                        </p>
                      </div>
                      
                      {/* Page Footer */}
                      <div className={styles.pageFooter}>
                        <div className={styles.pageFooterLine}></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Page Flip Effect Overlay */}
                {isFlipping && (
                  <div className={styles.flipOverlay}></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className={styles.navigation}>
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className={`${styles.navButton} ${styles.prevButton}`}
          >
            <ChevronLeft size={20} />
            <span className={styles.buttonText}>Anterior</span>
          </button>

          {/* Page Indicator */}
          <div className={styles.pageIndicator}>
            {pages.map((_, index) => (
              <div
                key={index}
                className={`${styles.indicatorDot} ${
                  index === currentPage ? styles.indicatorActive : ''
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1 || isFlipping}
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            <span className={styles.buttonText}>Siguiente</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HundredDays;
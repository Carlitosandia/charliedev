import React, { useState } from "react";
import "./Tickets.css";

export default function Tickets() {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const correctPassword = "04-08-2005";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAccessGranted(true);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        {!accessGranted ? (
          <div className="form-box">
            <h1>Ingresa la contraseña:</h1>
            <p className="subtitle-tickets">Pequeña pista, es una fecha y tiene el mismo formato que la URL pero no te dire cual es, solo una adivinanza: </p>
            <p>Nadie me elige, pero todos me tienen,
              algunos me esperan, otros ni se entretienen. <br />
              No soy presente ni futuro tampoco,
              pero cuando llego, siempre lo celebro. ¿Qué soy?</p>
            <form onSubmit={handleSubmit} className="form">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input"
              />
              <button type="submit" className="button">Enter</button>
            </form>
          </div>
        ) : (
          <div className="content-box">
            <h2>FELICIDADES SOFI LINDAAAA!❤️🫶🏼🥰</h2>
            <p>Lograste llegar a la primera parte de una sorpresa que tengo preparada para ti!</p>
            <p>No se en que momento vas a ver esto pero si recuerdas hubo un dia en donde te dije que tenia una sorpresa para ti</p>
            <p>pero que no podia decirte porque arruinaria la sopresa, bueno parte de lo que te queria decir ese dia era esto:</p>


            <div className="parabola-container">
              <svg viewBox="0 0 300 200" className="parabola-svg">
                <path
                  id="parabolaPath"
                  d="M 50 150 Q 150 0, 250 150"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  stroke-width="2"
                  stroke-dasharray="4 4"
                />


                <text x="20" y="170" fill="white" font-size="14">Querétaro</text>
                <text x="225" y="170" fill="white" font-size="14">Monterrey</text>


                <polygon
                  points="0,0 12,5 0,10"
                  fill="white"
                  transform="translate(-6,-5)"
                >
                  <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#parabolaPath" />
                  </animateMotion>
                </polygon>
              </svg>
            </div>
            <div className="mensaje-final">
              <p>
                Supongo que ya te diste una idea con la contraseña de esto Jajajaja, pero pues sii ya compre los boletos para ir a verte en tu cumpleaños, esto era lo que tanto te quería decir y lo que suponía que debías saber Jajajaja, y como te digo, suponía que lo debias saber porque pues es un día que planeaba pasarla muy bien contigo, pero por lo que supe es que ahora si te va a tocar ir a la escuelaaa, y espero que te la pases super bien y que tu primer cumpleaños en la escuela te la pases increíbleee, me alegro mucho por ti❤️🫶🏼🥰 y espero que ese dia podamos vernos por la tarde-noche o vemos como queda tu horario Jajaja, pero vamos a poder salir el fin de semana a algún lugar muy cool, anhelo mucho que llegue ya tu cumpleaños porque como te dije, yo te extraño a mas no poder de verdad, cada dia que ha pasado desde el ultimo de que te vi ha sido eterno, no puedo superar nuestra primera cita y es un recuerdo que voy a llevar en mi mente toda mi vida de verdad, asi pasen mil años nunca voy a olvidar lo maravilloso que fue ese dia, desde el primer momento en que te vi ya tenia la emocion de darte mis peluches de regalo, y fui tan feliz de darte esos regalos porque solo veia como sonrias y tu sonria me da mil años de vida de verdad❤️🫶🏼🥰, y obvio me puso igual de feliz como te pude abrazar mas de media hora en lo que llegabamos al cafe de gatitos Jajajaja, y de verdad que de mis fotos favoritas tuyas son las que te tome en el cafe, no inventes yo me paso mis dias solo viendo esas fotos, en algun momento de te dije que yo tenia de wallpaper una foto tuya de esas y siendo sincero contigo hay veces en las que solo voy a ver la hora de mi celular pero término viendo mi fondo durante un cuarto de hora o mas Jajajaja🥰 A veces no puedo creer lo mucho que me encantas y lo preciosa que eres de verdad, nunca habia conocido una persona que fuera asi de hermosa como tú, de verdad que no miento cuando te digo que no hay ninguna persona bonita en el mundo mas que tuuuu, de verdad que no Jajajaja, y es que me encanta todo de ti, como te lo dije alguna vez adoro tu cabello y como es que sin necesidad de peinarlo se ve como si vinieras del salon, adoro las facciones de tu carita linda hermosa preciosa y adoro tu sonrisa❤️🫶🏼, me encanta tu voz❤️🫶🏼 y la manera en la que dices mi nombre en algunas ocasiones❤️🫶🏼, me encanta tanto tu voz al cantar que te pediría que grabaras un cover de todas las canciones que te he dedicado solo para poder escucharle on repeat como siempre pero con tu voz❤️🫶🏼🥰, de verdad que a veces si es dificil de creer que me creas todo lo que te digo pero es la verdad y solo es lo que siento de verdad espero que entiendas lo mucho que me encantas y por que quiero vivir toda una vida a tu lado, tambien me encanta cuando me dices cosas bonitas y te quisiera decir cosas aun mas bonitas y apodos aun mas bonitos Jajajaja pero para el tiempo en el que escribo esto aun no puedo decirlas y espero poderlas decir pronto, mira la verdad es de que escribiria mas cosas pero si escribo de mas aqui le quitaria un poco el valor a lo otro que tengo en mente Jajajaja, entonces pues si digamos que ya sabes esto y pues si puedes mandame un mensajito ya que lo encuentres y te des cuenta de esto, te adoro mucho yo❤️🫶🏼, eres la persona mas increible del mundo❤️🫶🏼, no sabes lo mucho que me encantas y como me traes de loco enamoradooooo, de verdad que no tienes idea, aprovechando un poco que ya tengo tu atencion, te quiero dedicar una cancion que tambien me hace pensar en ti como no tienes idea.

                Aprovechando un poco que ya tengo tu atención, te quiero dedicar una canción que también me hace pensar en ti como no tienes idea:
                <br /><br />
                <div className="youtube-embed">
                  <iframe
                    src="https://www.youtube.com/embed/N9eroXvvCiI"
                    title="Canción dedicada ❤️"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                Si te soy sincero hay muchas mas canciones que no te he mandado porque dicen cosas un poco más fuerte pero siento y que me gustaría mandarte, pero ya habrá un tiempo en el que pueda decirte todo eso y mas, y cuando llegue ese momento de verdad que te voy a dedicar todas las canciones que tengo guardadas para ti porque de verdad que no sabes cuantas son y lo que dicen, cada una de ellas me recuerda a ti y no sabes lo feliz que me haces. Te adoro ❤️🫶🏼y espero que te esté gustando poco a poquito este detalle porque también toma en cuenta que esto parte de lo que quiero darte en tu cumpleaños Jajajaja, si bien no es el regalo completo, es una partecita de este, y pues precisamente solo es para informarte que pues quería pasar esos dias contigo y poder darte un buen cumpleañosss, te adoro como no tienes idea ❤️🫶🏼 y me encantas demasiado ❤️🫶🏼, estoy super enamorado de ti y no sabe lo mucho que me haces sentir.
                TE QUIERO MUCHO Y TE ADOROOOO❤️🥰🫶🏼

                Pd: Tal vez quieras cambiar la URL una vez más a <strong>/miregalo</strong> 😉❤️
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';

const Archive = ({ archiveVisible }) => {
  const images = [
    {
      src: '/becher-b-w.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/herzstacheldraht.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: 'becher-b-wdetail.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },

    {
      src: '/becher.jpg',
      alt: 'ceramic bowl in blue and white',
    },
    { src: '/Kralle-gif.gif', alt: 'ceramic claw in beige as gif' },
    {
      src: '/blauerose.jpg',
      alt: 'ceramic plate in blue and white',
    },
    {
      src: '/schüssel3beinig3.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/herzfolie.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/becher-b-wdetail2.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/blauerose2.jpg',
      alt: 'ceramic claw with pink worms',
    },
    {
      src: '/becher2.jpg',
      alt: 'ceramic cup in blue and white/beige',
    },
    {
      src: '/blume.jpg',
      alt: 'ceramic bowl in blue and white',
    },
    {
      src: '/vaseundfisch.JPG',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/handaufeis.JPG',
      alt: 'ceramic bowl in blue and white',
    },
    // {
    //   src: '/handknochen.jpg',
    //   alt: 'ceramic object in brown, not very clear hat to use for',
    // },
    {
      src: '/handkroko.jpg',
      alt: 'ribbon for packaging made out of ceramic in blue',
    },
    {
      src: '/handpink.jpg',
      alt: 'ceramic bowl in blue and white',
    },
    {
      src: '/handstacheldraht.jpg',
      alt: 'ceramic rose candleholder in mauve',
    },
    {
      src: '/schüssel-b-w4.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/becherdetail.jpg',
      alt: 'bowl standing on three legs',
    },
    {
      src: '/handaufblättern.JPG',
      alt: 'ceramic plate in blue and white',
    },
    {
      src: '/handgrün.jpg',
      alt: 'ceramic rose candleholder in mauve',
    },
    {
      src: '/handweiß.jpg',
      alt: 'ceramic vase in front of fishes',
    },
    // {
    //   src: '/hütchenrot.jpg',
    //   alt: 'ceramic bowl in blue and white',
    // },
    {
      src: '/rosemauve.jpg',
      alt: 'ceramic bowl in blue and white',
    },

    {
      src: '/handweiß2.jpg',
      alt: 'ceramic vase in front of fishes',
    },
    {
      src: '/rosemauvedetail.jpg',
      alt: 'ceramic bowl in blue and white',
    },
    {
      src: '/schüssel-b-w5.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/rückenkratzer.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/teller-b-w2.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/teller-b-w3.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schleife.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schüssel-b-w-6.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },

    {
      src: '/schüssel3beinig.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/rosemauve2.jpg',
      alt: 'ceramic bowl in blue and white',
    },
    {
      src: '/schüssel-b-w2.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schüssel-b-w3.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schüssel-b-wdetail.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    // {
    //   src: '/handjuli.jpg',
    //   alt: 'ceramic claw on frozen leaves',
    // },
    // {
    //   src: '/schüssel-b-whand.jpg',
    //   alt: 'ceramic claw in green, handmodel husband of artist',
    // },
    {
      src: '/schüssel-b-w.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schüssel3beinig4.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schüsselduo.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schüsselgrün.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schüsselapfel.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/teller-b-w.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schüssel3beinig2.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/teller-b-wboden.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/teller-b-wbodendetail.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/teller-b-wdetail.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/schüsselgrün2.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/teller-o-w.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/tellermini.jpg',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
    {
      src: '/vaseundfisch2.JPG',
      alt: 'ceramic claw in green, handmodel husband of artist',
    },
  ];

  return (
    <div className="pl-12 pr-12 text-justify md:p-0 md:pl-0 md:pr-0 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {archiveVisible && (
        <>
          <NavLink
            to="/"
            className="fixed md:static text-4xl text-[#329404] font-schnorkelei active:text-[#329404] focus:font-bold md:hover:font-semibold"
          >
            x
          </NavLink>
          {/* <div
            className="space-y-2"
            style={{
              wordBreak: 'break-word',
            }}
          >
            <h2 className="text-4xl font-znikomit mt-12 md:mt-0">archive</h2>
            <div className="space-y-2">
              <p>
                Ceramic works,
                <br />
                created from 2021 to 2023
              </p>
            </div>
          </div> */}
        </>
      )}
      {images.map((image, index) => (
        <LazyLoad key={index} offset={100} once>
          <div className="h-full overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default Archive;

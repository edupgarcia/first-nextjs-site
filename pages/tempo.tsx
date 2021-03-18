import Link from 'next/link';
import { resolve } from 'node:path';

function Tempo(props) {
  console.log('Passando pelo Frontend');
  
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  console.log('Passando pelo getStaticProps()');
  // console.log('Adicionando delay de 5 segundos');
  
  // await delay(5000);

  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  return {
    props: {
      staticDateString
    },
    revalidate: 1
  }
}

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;

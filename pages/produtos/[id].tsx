// import { useRouter } from 'next/router'
// export async function getServerSideProps(context) {
//   const id = context.query.id;

//   return {
//     props: {
//       id: id
//     }
//   }
// }

export async function getStaticPaths() {
  return {
    paths : [{
      params: {
        id: '1'
      }
    }, {
      params: {
        id: '2'
      }
    }],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;

  return {
    props: {
      id: id
    }
  }
}

function Produtos(props) {
  // const router = useRouter();
  // const id = router.query.id;
  return (
    <div>
      ID do Produto: {props.id}
    </div>
  )
}

export default Produtos;

// pages/index.js

const Home = (props) => {
  console.log(props);

  const globalVariable = process.env.GLOBAL_VARIABLE;
  console.log("Initial Value:", globalVariable);

  return (
    <div>
      <h1>Data from API</h1>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  console.log("get static props log");

  return {
    props: { globalVariable: process.env.GLOBAL_VARIABLE },
  };
}

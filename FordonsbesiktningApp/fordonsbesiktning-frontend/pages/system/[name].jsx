import systems from "../../util/systems.json";
import styles from "../../styles/systemPage.module.css";

export default function SystemPage({ data, systemName, systemId }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          {systemId} {systemName}
        </h1>
      </header>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { name: "stomme" } },
    { params: { name: "hjulsystem" } },
    { params: { name: "drivsystem" } },
    { params: { name: "bromssystem" } },
    { params: { name: "styrsystem" } },
    { params: { name: "karroseri" } },
    { params: { name: "kommunikation" } },
    { params: { name: "instrumentering" } },
    { params: { name: "övrigt" } },
    { params: { name: "miljökontroll" } },
  ];
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const schemeUrl = new URL(process.env.apiUrl);
  let system = systems.find((element) => element.name == params.name);

  let res = await fetch(schemeUrl + system.id);
  let systemData = await res.json();

  return {
    props: {
      data: systemData,
      systemName: system.name,
      systemId: system.id,
    },
  };
}

// [
//   {
//     id: '2.1',
//     name: 'Hjul',
//     subsystems: [ [Object], [Object], [Object], [Object] ],
//     control: [],
//     method: [],
//     assessment: null
//   },
//   {
//     id: '2.2',
//     name: 'Fjädersystem',
//     subsystems: [ [Object], [Object], [Object], [Object] ],
//     control: [],
//     method: [],
//     assessment: null
//   },
//   {
//     id: '2.3',
//     name: 'Axel/Länkage',
//     subsystems: [ [Object], [Object], [Object], [Object], [Object] ],
//     control: [],
//     method: [],
//     assessment: null
//   }
// ]

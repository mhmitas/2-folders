import { getImageUrl } from './utils.jsx';


export default function NewGallary() {

  return (
    <>
      <h3>Hello this is new gallary</h3>
      <NewProfile
        person={{
          name: 'Maria Skłodowska-Curie',
          imgId: 'szV5sdG',
          size: 100,
          Profession: 'physicist and \"chemist"',
          AwardsName: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal, Matteucci Medal'],
          Discovered: 'polonium (chemical element)',
        }}
      >
      </NewProfile>
      <NewProfile
        person={{
          name: 'Maria Skłodowska-Curie',
          imgId: 'YfeOqp2',
          size: 100,
          Profession: 'physicist and \"chemist"',
          Awards: 5,
          AwardsName: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal, Matteucci Medal'],
          Discovered: 'polonium (chemical element)',
        }}
      >
      </NewProfile>
      <NewProfile
        person={{
          name: 'Maria Skłodowska-Curie',
          imgId: 'szV5sdG',
          size: 0,
          Profession: 'physicist and \"chemist"',
          Awards: 5,
          AwardsName: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Chemistry', 'Davy Medal, Matteucci Medal'],
          Discovered: 'polonium (chemical element)',
        }}
      >
      </NewProfile>
    </>
  )
}


function NewProfile({ person }) {
  console.log(person.size)
  return (
    <section className="myclass">

      <h3>{person.name}</h3>
      <img
        className="avatar"
        src={getImageUrl(person.imgId)}
        alt={person.name}
        width={person.size || 200}
        height={person.size || 200}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.Profession}
        </li>
        <li>
          <b>Awards: {person.AwardsName.length} </b>
          ({person.AwardsName.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {person.Discovered}
        </li>
      </ul>
    </section>
  )
}



//This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.
/**
 * import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

 */
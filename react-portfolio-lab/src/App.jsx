import './App.css';

const App = () => {
  const skill = { name: 'lesson', comfort: 8, frontEnd: true, backend: true };

  const mySkills = [
  {
    name:'JavaScript',
    comfort: 9,
    frontEnd: true,
    backend: true
  },
  {
    name:'CSS',
    comfort: 8,
    frontEnd: true,
    backend: false
  },
  {
    name:'HTML',
    comfort: 10,
    frontEnd: true,
    backend: false
  },
]

  const skillsList = mySkills.map((skill, index) =>
    <li lessons={index}>{skill.name}</li>
  );

  return (
    <>
      <h1>My Skills</h1>
      <ul>
        {mySkills.map((skill, index) =>
          <li key={index}>
            {skill.name} - Comfort: {skill.comfort}
            {skill.frontEnd ? ' - Frontend' : ''}
            {skill.backend ? ' - Backend' : ''}
          </li>
        )}
      </ul>
    </>
  );
};

export default App;

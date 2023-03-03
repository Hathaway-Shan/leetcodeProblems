/*
# React Interview Exercise

Today we would like you to render a list of Star Wars characters provided by The Star Wars API. 

Iterate over the API response that's been included, and render the first page of results. 

## Requirements
* Render a single page's worth of Star Wars People. For each person, render their name, hair color, skin color, and eye color.
* Add an input field for each person so that I can add my own note for them.
* Add one or more controls that changes the sort order of the list so that I can sort by first name or last name. My notes for any given person should appear with them.

## Notes
* Use plain HTML and CSS for your list elements. You may use a component library if you really want to.

## Stretch Ideas
* Add additional information for each person. Fetch and render data from the hypermedia links for each person, e.g. film names, vehicles, starships.
* Get creative with the presentation. Show us your CSS and layout chops!
* Add pagination support so that I can view more than the first page's worth of people results.

## Example data shapes
```
GET /people/1

{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "http://swapi.dev/api/planets/1/",
  "films": [
    "http://swapi.dev/api/films/1/",
    "http://swapi.dev/api/films/2/",
    "http://swapi.dev/api/films/3/",
    "http://swapi.dev/api/films/6/"
  ],
  "species": [],
  "vehicles": [
    "http://swapi.dev/api/vehicles/14/",
    "http://swapi.dev/api/vehicles/30/"
  ],
  "starships": [
    "http://swapi.dev/api/starships/12/",
    "http://swapi.dev/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "http://swapi.dev/api/people/1/"
}
```

```
GET /films/1
{
  "title": "A New Hope",
  "episode_id": 4,
  ...
}

```
*/
/*
Render a single page's worth of Star Wars People
For each person, render their name, hair color, skin color, and eye color
Add an input field for each person so that I can add my own note for them
notes should appear with each person
list should be sortable by first or last name
*/

const swapi = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results ? data.results : data;
};

const Card = ({ name, hair_color, skin_color, eye_color }) => {
  const [note, setNote] = React.useState("");
  const [text, setText] = React.useState("");

  function handleChangeNote() {
    setNote(text);
    setText("");
  }

  return (
    <div className="container">
      <div className="name">{name}</div>
      <div className="hair">{hair_color}</div>
      <div className="skin">{skin_color}</div>
      <div className="eye">{eye_color}</div>
      <div className="note">{note}</div>

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleChangeNote} />
    </div>
  );
};

const Content = () => {
  const [people, setPeople] = React.useState([]);
  const [nameField, setNameField] = React.useState("");

  function extractNameField(name, piece) {
    const nameParts = name.split(" ");
    if (piece === "first_Name") {
      return nameParts[0];
    } else if (piece === "last_Name") {
      return nameParts[nameParts.length - 1];
    }
  }

  function sortPeeps(array) {
    let peeps = [...people];

    return peeps.sort((a, b) => {
      if (
        extractNameField(a.name, nameField) <
        extractNameField(b.name, nameField)
      ) {
        return 1;
      } else if (
        extractNameField(a.name, nameField) >
        extractNameField(b.name, nameField)
      ) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  const sortedPeeps = React.useMemo(() => {
    return sortPeeps(people);
  }, [people, nameField]);

  React.useEffect(() => {
    swapi("https://swapi.dev/api/people/").then((people) => {
      setPeople(people);
    });
  }, []);

  return (
    <React.Fragment>
      <select onChange={(e) => setNameField(e.target.value)}>
        <option value="first_Name">First Name</option>
        <option value="last_Name">Last Name</option>
      </select>
      <h1 className="header">Star Wars People</h1>
      {/* <pre>{JSON.stringify(people, null, 2)}</pre> */}
      {sortedPeeps.map((person) => (
        <Card
          key={person.name}
          name={person.name}
          hair_color={person.hair_color}
          skin_color={person.skin_color}
          eye_color={person.eye_color}
        />
      ))}
    </React.Fragment>
  );
};

const App = () => {
  return (
    <div className="App">
      <Content />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

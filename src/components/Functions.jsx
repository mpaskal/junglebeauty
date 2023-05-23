export function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function GetCatID(cat) {
    const { name, sex, mother, date } = cat;
    const type = (mother ? `Kitten` : `${sex === 'male' ? `King` : `Queen`}`);
    const identifier = (type === 'kitten' ? `${date}-${name}-collar` : `${type}-${name}`);
  
    return identifier;
  }

export function GetCatFilepath(cat) {
  const { id, sex, mother } = cat;
  const idValues = id.split('.');
  const name = idValues[0];
  const date = idValues[1];
  const type = (mother ? `Kitten` : `${sex === 'male' ? `King` : `Queen`}`);
  const filepath = `${type}s/${type === 'Kitten' ? `${date}/` : ``}${name}/`;

  return filepath;
}

export function GetCatDescription(cat) {
  const { type, colour, sex, adj, date, cattery, location } = cat;
  var description;

  if (type === 'kitten') {
    description = ConvertDate(date);
  } else {
    if (sex === 'male') {
      description = `${adj} ${colour} Bengal`;
    } else {
      description = `Born ${ConvertDate(date)}${cattery != undefined ? ` at ${cattery} cattery${location != undefined ? `, ${location}` : ''}` : ''}`;
    }
  }

  description = Capitalize(description);

  return description;
}

export function ConvertDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  var dateString = new Date(date).toLocaleDateString('en-us', options);

  return dateString;
}

export function GetReleaseDate(date) {
  const daysToRelease = 84;
  var releaseDate = new Date(date);

  releaseDate.setDate(releaseDate.getDate() + daysToRelease);

  return releaseDate;
}
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getCatID(cat) {
    const { name, sex, mother, date } = cat;
    const type = (mother ? `Kitten` : `${sex === 'male' ? `King` : `Queen`}`);
    const identifier = (type === 'kitten' ? `${date}-${name}-collar` : `${type}-${name}`);
  
    return identifier;
  }

export function getCatFilepath(cat) {
  const { id, sex, mother } = cat;
  const idValues = id.split('.');
  const name = idValues[0];
  const date = idValues[1];
  const type = (mother ? `Kitten` : `${sex === 'male' ? `King` : `Queen`}`);
  const filepath = `${type}s/${type === 'Kitten' ? `${date}/` : ``}${name}/`;

  return filepath;
}

export function getCatDescription(cat) {
  const { colour, sex, adj, date, mother, cattery, location } = cat;
  const type = (mother ? `kitten` : `${sex === 'male' ? `king` : `queen`}`);
  var description;

  if (type === 'kitten') {
    description = convertDate(date);
  } else {
    if (sex === 'male') {
      description = `${adj} ${colour} Bengal`;
    } else {
      description = `Born ${convertDate(date)}${cattery ? ` at ${cattery} cattery${location ? `, ${location}` : ''}` : ''}`;
    }
  }

  description = capitalize(description);

  return description;
}

export function convertDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  var dateString = new Date(date).toLocaleDateString('en-us', options);

  return dateString;
}

export function getReleaseDate(date) {
  const daysToRelease = 84;
  var releaseDate = new Date(date);

  releaseDate.setDate(releaseDate.getDate() + daysToRelease);

  return releaseDate;
}
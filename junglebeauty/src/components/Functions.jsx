export function GetCatURL(cat) {
    const { name, type, date } = cat;
    var identifier;
  
    if (type == 'kitten') {
      identifier = date + '-' + name + '-collar';
    } else {
      identifier = type + '-' + name;
    }
  
    return identifier;
  }
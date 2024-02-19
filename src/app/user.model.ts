export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export class User {
  gender: string = '';
  name: Name = { title: '', first: '', last: '' };
  email: string = '';
  phone: string = '';
  //   id: ID = { name: '', value: '' };
  picture: Picture = { large: '', medium: '', thumbnail: '' };
}

// export interface ID {
//   name: string;
//   value: string;
// }

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

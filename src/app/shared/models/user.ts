
export class User { 
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  education: string;
  team: string;
  skillIds: number[];
  id?: number;
  imgSource: string;

  constructor(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    education: string,
    skillIds: number[],
    team: string,
    id?: number
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.education = education;
    this.skillIds = skillIds;
    this.team = team;
    this.imgSource = "https://github.com/Genuine-Identity.png";
  }
}
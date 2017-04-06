import {User} from './user.model';

export class Project {
  currentFund: number = 0;
  managers: string[] = [""];
  rewards: string = "";
  fundUtil: string = "";
  donators: User[] = [];

  constructor(
    public name: string,
    public description: string,
    public fundGoal: number,
    public category: string
  )
  {  }
}

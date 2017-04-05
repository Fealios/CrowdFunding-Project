export class Project {
  currentFund: number = 0;
  constructor(
    public name: string,
    public description: string,
    public managers: string[],
    public rewards: string,
    public fundGoal: number,
    public fundUtil: string,
    public category: string
  )
  {  }
}

import chalk from 'chalk';

class CLI {
  constructor(){
    this.commands = new Map();
    this.defaultAction = () => { console.log(chalk.yellow('CoolCLI')); };
  }

  _isFlag(arg){
  return arg.startsWith('--');
  }
  
  _isOptionShortcut(arg){
  return arg.startsWith('-');
  }

  _isValidArg(arg){
    return this.commands.has(arg);
  }


  createCommand(args,action){
    if(args.length > 0){
      args.forEach(arg => {
        this.commands.set(arg,action);
      })
    }
    else{
      this.defaultAction = action;
    }
  }

  parse(args){
    if(args.length === 0){
      this.defaultAction();
    }
    else{
      const flags = args.filter(arg => this._isFlag(arg));
      args.forEach((arg,i) => {
        if(this._isValidArg(arg)){
          const action = this.commands.get(arg);
          if (args[i+1] && this._isFlag(args[i+1])) {
            action(args[i+1]);
          }
          else{
          }
          action();
        }
        else{
          console.error(`${chalk.red('Invalid command')}`);
        }
      })
    }
  }
}


export default CLI;
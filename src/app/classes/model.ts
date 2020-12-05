import { keys } from 'ts-transformer-keys';


export class Model {

  public static extends<TBase extends new (...args: any[]) => any, I>(base: TBase) {

    return <T>(defaults?: Partial<T>): Pick<TBase, keyof TBase> & {
      new(...a: (TBase extends new (...o: infer A) => unknown ? A : [])): InstanceType<TBase> & T
    } => {
      return class extends base {
        constructor(...a: any[]) {
          super();
          Object.assign(this, defaults || {});
        }
      } as any;
    };
  }

  public static factory<T extends Model>(this: new () => T, data: any): T {
    return Object.assign(new this(), data);
  }


  public toData(): any {
    //const x = Object.keys(Event);
  }

  public fromData(data): any {
    return Object.assign(this, data);
  }
}

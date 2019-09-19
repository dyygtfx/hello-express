import * as path from 'path';
export class NodeModuleTester {
  public static readonly STATIC_VAR = 'STATIC';   // 测试static变量

  constructor(                                    // 测试构造方法
    private readonly f1: string,
    private readonly f2: number) {

  }

  public static testPath() {                      // 测试静态方法
    const curdir = './';

    console.log(path.resolve(curdir));
  }

}
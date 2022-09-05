export default class BaseComponents {
  static cNum = 0
  static managementList = [] 


  static FactoryCreateComponent({name, label}) {
    BaseComponents.cNum ++
    return new BaseComponents({ name, label });
  }

  constructor({ name, label}) {
    this.name = name;
    this.label = label;
    this.keyId = Date.now();
    for (const key of Object.keys(this)) {
        console.log(this[key])
    }
    BaseComponents.managementList.push(this)
  }

}

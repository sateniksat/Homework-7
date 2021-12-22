class ClassInformation1 {
  constructor(className, classUnit, classCapacity,nessecery) {
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;
    if(className=="network"){
        nessecery ?   this.project=true : this.project=false;
    }else if(className=="softEngineering"){
        nessecery ? this.book=true :this.book=false;
    }
  }
}
 const softEngineeringClass1=new ClassInformation1("softEngineering",3,50,"book");
 const networkClass1=new ClassInformation1("network",3,30,"projekt");
 console.log(softEngineeringClass1);
 console.log(networkClass1);

//////////////////////////////////////////
//constructor function
function ClassInformation2(className, classUnit, classCapacity,nessecery){
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;
    if(className=="network"){
        nessecery ?   this.project=true : this.project=false;
    }else if(className=="softEngineering"){
        nessecery ? this.book=true :this.book=false;
    }
    return this;
}
const softEngineeringClass2=new ClassInformation2("softEngineering",3,50,"book");
const networkClass2= ClassInformation2("network",3,30,"projekt");
console.log(softEngineeringClass2);
console.log(networkClass2);
//////////////////////////////////////////

class ClassInformation {
  constructor(className, classUnit, classCapacity) {
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;
  }
}
class NetworkClassInfo extends  ClassInformation{
  constructor(className, classUnit, classCapacity, nessecery) {
    super(className, classUnit, classCapacity);
    nessecery ? (this.project = true) : (this.project = false);
  }
  output() {
    return `className:${this.className},classUnit:${this.classUnit},classCapacity:${TimeRanges.classCapacity},project:${this.nessecery}`;
  }
}
class SoftEngineeringClassInfo extends  ClassInformation{
  constructor(className, classUnit, classCapacity, nessecery) {
    super(className, classUnit, classCapacity);
    nessecery ? (this.book = true) : (this.book = false);
  }
  output() {
    return `className:${this.className},classUnit:${this.classUnit},classCapacity:${TimeRanges.classCapacity},book:${this.nessecery}`;
  }
}
 const softEngineeringClass=new SoftEngineeringClassInfo("softEngineering",3,50,"book");
 const networkClass=new NetworkClassInfo("network",3,30,"projekt");
 console.log(softEngineeringClass);
 console.log(networkClass);


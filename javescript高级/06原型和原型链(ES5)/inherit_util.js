function createObject(o){
  function F(){}
  F.prototype = o
  return new F()
}
// 将子父联系在一起：寄生式函数
function inherit(Subtype,Supertype){
  // Subtype.prototype = Object.create(Supertype.prototype)
  Subtype.prototype = createObject(Supertype.prototype)
  Object.defineProperty(Subtype.prototype,"constructor",{
    enumerable:false,
    configurable:true,
    writable:true,
    value:Subtype
  })
}
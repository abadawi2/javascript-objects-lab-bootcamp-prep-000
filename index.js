var recipes = {key:'value'}

function updateObjectWithKeyAndValue(object,key,value){
  object.key= 'value';
  return object;
}

function updateObjectWithKeyAndValue(object,key,value){
  object.key= 'value';
  var newObj = Object.assign({}, recipe,object)
  return newObj;
}

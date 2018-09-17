var recipes = {key:'value'}

function updateObjectWithKeyAndValue(object,key,value){
  object.key= 'value';
  return object;
}

function updateObjectWithKeyAndValue(object,key,value){
  object.key= 'value';
  var newObj = Object.assign({}, recipes,object)
  return newObj;
}

function updateObjectWithKeyAndValue(object,key,value){
  recipes.key= 'value';
  return object;
}

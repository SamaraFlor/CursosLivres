// const object = null;
// console.log(object.name);
// TypeError: Cannot read properties of null (reading 'name')- type

try {
    throw new Error('bombinha');
} catch (error) {
    console.log(error.message)
}

// код пишем здесь!

const WEAPON_STORAGE = {};

const dwarfTorin = {
  name: 'Torin',
  age: 320,
  skills: ['melee', 'magic'],
  weapons: {
    sword: {
      type: 'melee',
      skill: 14
    },
    axe: {
      type: 'melee',
      skill: 18
    },
    crossbow: {
      type: 'archery',
      skill: 3
    },
    knife: {
      type: 'melee',
      skill: 11,
      allowed: true
    }
  }
}

/* 1. У нас есть объект `dwarfTorin` - гном Торин. 
Нужно сделать так, чтобы его имя было невозможно изменить (т.е. сделать свойство `name` неизменяемым). */
// Object.defineProperty(dwarfTorin, 'name', {writable: false})
// dwarfTorin.name = 'Alex'
// console.log(dwarfTorin.name);

/* 2. Пишем функцию `takeWeaponsAway` - разоружение гнома на входе в замок. Она должна принять на вход объект-гнома, 
пройтись по его свойству `weapons` (можно `for..in`, а лучше - методами объекта), и вернуть массив с гномьим оружием. */
// const takeWeaponsAway = (dwarf) => {
//   return Object.keys(dwarf.weapons)
// }
// console.log(takeWeaponsAway(dwarfTorin)); // ['sword', 'axe', 'crossbow']

/* 3. Усложняем нашу функцию - надо забрать у гнома все его оружие, кроме того, которое разрешено (`allowed = true`). 
Нужно чтобы наша функция теперь удаляла из `dwarf.weapons` все свойства, которые содержат запрещенное оружие, и возвращала 
бы объект с этим оружием. */
const takeWeaponsAway = (dwarf) => {
  const weaponStorage = {}
  const dwarfWeapons = dwarf.weapons
  Object.entries(dwarf.weapons).forEach(elem => {
    const weaponKey = elem[0]
    const weaponValue = elem[1]
    if (!weaponValue.allowed) {
      delete dwarf.weapons[weaponKey]
      weaponStorage[weaponKey] = weaponValue
    }
  })
  return weaponStorage
}

Object.defineProperty(dwarfTorin.weapons, 'axe', {enumerable: false})
const takeWeapons = takeWeaponsAway(dwarfTorin)
console.log(dwarfTorin, takeWeapons);

/*  5. Пишем функцию `hideWeapon`, которая будет помогать нашим гномам прятать оружие от замковой стражи. 
Она должна принять на вход объект-гнома `dwarf`, и массив вооружений, которые гном хочет скрыть. 
Нужно сделать эти свойства в `dwarf.weapons` неперечислимыми. */
const hideWeapon = (dwarf, weapons) => {
  weapons.forEach( elem => {
    Object.defineProperty(dwarf.weapons, elem, { enumerable: false } );
  });
}

hideWeapon(dwarfTorin, ['sword', 'axe']);

const takenWeapons = takeWeaponsAway(dwarfTorin);
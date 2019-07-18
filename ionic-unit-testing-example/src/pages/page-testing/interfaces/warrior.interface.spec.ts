import * as faker from 'faker'
import { WarriorInterface } from "./warrior.interface";

export function getFakeWarriorInterface(): WarriorInterface {
  return {
    name: faker.name.firstName(),
    warriorClass: faker.hacker.noun(),
    weapon: faker.hacker.noun(),
    description:faker.lorem.sentence(),
  }
}
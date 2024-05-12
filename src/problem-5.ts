//5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  create(items: T): void;
  update(items: T): void;
  delete(id: number): void;
}

class GenericRepository<T extends { id: number }> implements Repository<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }

  create(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  getById(id: number): T | undefined {
    return this.items.find((item: T) => item.id === id);
  }

  update(item: T): void {
    const index = this.items.findIndex(
      (existingItem: T) => existingItem.id === item.id
    );

    if (index !== -1) {
      this.items[index] = item;
    }
  }

  delete(id: number): void {
    const index = this.items.findIndex((items: T) => items.id === id);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

interface IProgrammer {
  id: number;
  name: string;
  email: string;
}

const programmerRepository = new GenericRepository<IProgrammer>();

programmerRepository.create({
  id: 1,
  name: "Shabbir",
  email: "hasanalshabbir257@gmail.com",
});

programmerRepository.create({
  id: 2,
  name: "Jui",
  email: "hasanalshabbir257@gmail.com",
});
programmerRepository.create({
  id: 3,
  name: "Hasan",
  email: "hasanalshabbir257@gmail.com",
});
programmerRepository.create({
  id: 4,
  name: "Sumaiya",
  email: "hasanalshabbir257@gmail.com",
});

programmerRepository.create({
  id: 5,
  name: "Paglu",
  email: "hasanalshabbir257@gmail.com",
});

const allHeroes = programmerRepository.getAll();
console.log(allHeroes);

const oneHero = programmerRepository.getById(2);
console.log(oneHero);

programmerRepository.update({
  id: 1,
  name: "Shabbi",
  email: "shabbi8788@gmail.com",
});

programmerRepository.delete(5);

const allHeroesAgain = programmerRepository.getAll();
console.log(allHeroesAgain);

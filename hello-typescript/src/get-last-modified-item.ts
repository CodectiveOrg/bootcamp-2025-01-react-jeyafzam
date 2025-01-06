type BasicObject = Record<string, unknown>;

type ObjectWithDates = BasicObject & {
  createAt: Date;
  modifiedAt?: Date;
};

function findLatestObject(objects: ObjectWithDates[]): ObjectWithDates | null {
  return objects.reduce(
    (latestObject, currentObject) => {
      if (!latestObject) {
        return currentObject;
      }

      const latestDate = latestObject.modifiedAt || latestObject.createAt;
      const currentDate = currentObject.modifiedAt || currentObject.createAt;

      return latestDate > currentDate ? latestObject : currentObject;
    },
    null as ObjectWithDates | null,
  );
}

const objectsArray: ObjectWithDates[] = [
  { createAt: new Date("2024-01-01"), a: 1, b: "b" },
  {
    createAt: new Date("2024-02-01"),
    modifiedAt: new Date("2024-03-01"),
    a: 1,
  },
  { createAt: new Date("2024-01-15"), b: true },
];

console.log(findLatestObject(objectsArray));

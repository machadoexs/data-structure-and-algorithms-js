interface Comparable<T> {
  compareTo(b: T): number
}

class MyObj implements Comparable<MyObj> {
  age: number
  compareTo(b: MyObj): number {
      if (this.age == b.age) {
        return 0
      }

      return this.age > b.age ? 1 : -1
  }
}

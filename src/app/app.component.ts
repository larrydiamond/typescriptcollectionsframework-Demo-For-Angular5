import { Component } from '@angular/core';
import { ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, Hashable, AllFieldCollectable, Collectable, AllFieldHashable, Collections, Comparator, ImmutableCollection, JIterator } from 'typescriptcollectionsframework';

export class PetStoreProduct {
  private readonly sku:string;
  public getSku():string { return this.sku; }

  private readonly name:string;
  public getName():string { return this.name; }

  constructor(isku:string, iname:string) {
    this.sku = isku;
    this.name = iname;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active:string = "ArrayList";

  alData:ArrayList<string> = new ArrayList<string>(new AllFieldCollectable<string>());
  llData:LinkedList<string> = new LinkedList<string>(new AllFieldCollectable<string>());
  hsData:HashSet<string> = new HashSet<string>(new AllFieldHashable<string>());
  tsData:TreeSet<string> = new TreeSet<string>(Collections.getStringComparator());

  alAllData:ArrayList<PetStoreProduct> = new ArrayList<PetStoreProduct>(new AllFieldCollectable<PetStoreProduct>());
  llAllData:LinkedList<PetStoreProduct> = new LinkedList<PetStoreProduct>(new AllFieldCollectable<PetStoreProduct>());
  hsAllData:HashSet<PetStoreProduct> = new HashSet<PetStoreProduct>(new AllFieldHashable<PetStoreProduct>());
  tsAllData:TreeSet<PetStoreProduct> = new TreeSet<PetStoreProduct>(new PetStoreProductAllFieldsComparator());

  alOneData:ArrayList<PetStoreProduct> = new ArrayList<PetStoreProduct>(new PetStoreProductSkuCollectable());
  llOneData:LinkedList<PetStoreProduct> = new LinkedList<PetStoreProduct>(new PetStoreProductSkuCollectable());
  hsOneData:HashSet<PetStoreProduct> = new HashSet<PetStoreProduct>(new PetStoreProductSkuHashable());
  tsOneData:TreeSet<PetStoreProduct> = new TreeSet<PetStoreProduct>(new PetStoreProductSkuComparator());

  hsMapData:HashMap<string, string> = new HashMap<string, string>(new AllFieldHashable<string>());
  tsMapData:TreeMap<string, string> = new TreeMap<string, string>(Collections.getStringComparator());

  constructor () {
    this.alData.add ("Cat");
    this.alData.add ("Squirrel");
    this.alData.add ("Dog");

    this.llData.add ("Cat");
    this.llData.add ("Squirrel");
    this.llData.add ("Dog");

    this.hsData.add ("Cat");
    this.hsData.add ("Squirrel");
    this.hsData.add ("Dog");

    this.tsData.add ("Cat");
    this.tsData.add ("Squirrel");
    this.tsData.add ("Dog");

    let psp1:PetStoreProduct = new PetStoreProduct("ABCDE", "Bird Seed");
    let psp2:PetStoreProduct = new PetStoreProduct("FGHIJ", "Cat Food");
    let psp3:PetStoreProduct = new PetStoreProduct("KLMNO", "Dog Food");

    this.alAllData.add (psp1);
    this.alAllData.add (psp2);
    this.alAllData.add (psp3);

    this.llAllData.add (psp1);
    this.llAllData.add (psp2);
    this.llAllData.add (psp3);

    this.hsAllData.add (psp1);
    this.hsAllData.add (psp2);
    this.hsAllData.add (psp3);

    this.tsAllData.add (psp1);
    this.tsAllData.add (psp2);
    this.tsAllData.add (psp3);

    this.alOneData.add (psp1);
    this.alOneData.add (psp2);
    this.alOneData.add (psp3);

    this.llOneData.add (psp1);
    this.llOneData.add (psp2);
    this.llOneData.add (psp3);

    this.hsOneData.add (psp1);
    this.hsOneData.add (psp2);
    this.hsOneData.add (psp3);

    this.tsOneData.add (psp1);
    this.tsOneData.add (psp2);
    this.tsOneData.add (psp3);

    this.hsMapData.put (psp1.getSku(), psp1.getName());
    this.hsMapData.put (psp2.getSku(), psp2.getName());
    this.hsMapData.put (psp3.getSku(), psp3.getName());

    this.tsMapData.put (psp1.getSku(), psp1.getName());
    this.tsMapData.put (psp2.getSku(), psp2.getName());
    this.tsMapData.put (psp3.getSku(), psp3.getName());
  }

  ngOnInit() {
  }

  ArrayList() {
    this.active = "ArrayList";
  }
  LinkedList() {
    this.active = "LinkedList";
  }
  HashSet() {
    this.active = "HashSet";
  }
  TreeSet() {
    this.active = "TreeSet";
  }
  ArrayListAllFields() {
    this.active = "ArrayListAllFields";
  }
  LinkedListAllFields() {
    this.active = "LinkedListAllFields";
  }
  HashSetAllFields() {
    this.active = "HashSetAllFields";
  }
  TreeSetAllFields() {
    this.active = "TreeSetAllFields";
  }
  ArrayListOneField() {
    this.active = "ArrayListOneField";
  }
  LinkedListOneField() {
    this.active = "LinkedListOneField";
  }
  HashSetOneField() {
    this.active = "HashSetOneField";
  }
  TreeSetOneField() {
    this.active = "TreeSetOneField";
  }
  HashMap() {
    this.active = "HashMap";
  }
  TreeMap() {
    this.active = "TreeMap";
  }

  addArrayList(newdata:string) {
    this.alData.add (newdata);
  }
  addLinkedList(newdata:string) {
    this.llData.add (newdata);
  }
  addHashSet(newdata:string) {
    this.hsData.add (newdata);
  }
  addTreeSet(newdata:string) {
    this.tsData.add (newdata);
  }
  addArrayListAll(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.alAllData.add (psp);
  }
  addLinkedListAll(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.llAllData.add (psp);
  }
  addHashSetAll(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.hsAllData.add (psp);
  }
  addTreeSetAll(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.tsAllData.add (psp);
  }
  addArrayListOne(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.alOneData.add (psp);
  }
  addLinkedListOne(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.llOneData.add (psp);
  }
  addHashSetOne(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.hsOneData.add (psp);
  }
  addTreeSetOne(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.tsOneData.add (psp);
  }
  putHashMap(newsku:string, newvalue:string) {
    this.hsMapData.put (newsku, newvalue);
  }
  putTreeMap(newsku:string, newvalue:string) {
    this.tsMapData.put (newsku, newvalue);
  }
  removeArrayListEntry(olddata:string) {
    this.alData.remove(olddata);
  }
  removeLinkedListEntry(olddata:string) {
    this.llData.remove(olddata);
  }
  removeHashSetEntry(olddata:string) {
    this.hsData.remove(olddata);
  }
  removeTreeSetEntry(olddata:string) {
    this.tsData.remove(olddata);
  }
  removeArrayListAllEntry(oldpsp:PetStoreProduct) {
    this.alAllData.remove(oldpsp);
  }
  removeLinkedListAllEntry(oldpsp:PetStoreProduct) {
    this.llAllData.remove(oldpsp);
  }
  removeHashSetAllEntry(oldpsp:PetStoreProduct) {
    this.hsAllData.remove(oldpsp);
  }
  removeTreeSetAllEntry(oldpsp:PetStoreProduct) {
    this.tsAllData.remove(oldpsp);
  }
  removeArrayListOneEntry(oldpsp:PetStoreProduct) {
    this.alOneData.remove(oldpsp);
  }
  removeLinkedListOneEntry(oldpsp:PetStoreProduct) {
    this.llOneData.remove(oldpsp);
  }
  removeHashSetOneEntry(oldpsp:PetStoreProduct) {
    this.hsOneData.remove(oldpsp);
  }
  removeTreeSetOneEntry(oldpsp:PetStoreProduct) {
    this.tsOneData.remove(oldpsp);
  }
  removeHashMapEntry(oldsku:string) {
    this.hsMapData.remove(oldsku);
  }
  removeTreeMapEntry(oldsku:string) {
    this.tsMapData.remove(oldsku);
  }
}

export class PetStoreProductSkuCollectable implements Collectable<PetStoreProduct> {
  equals (instance1 : PetStoreProduct, instance2 : PetStoreProduct) : boolean {
    if (instance1 === undefined) {
      if (instance2 === undefined) {
        return true;
      } else {
        return false;
      }
    }
    if (instance1 === null) {
      if (instance2 === null) {
        return true;
      } else {
        return false;
      }
    }
    if ((instance2 === null) || (instance2 === undefined)) {
      return false;
    }

    if (instance1.getSku() === instance2.getSku()) {  // what we're really comparing here
      return true;
    }

    return false;
  }
}

export class PetStoreProductSkuHashable implements Hashable<PetStoreProduct> {
  equals (instance1 : PetStoreProduct, instance2 : PetStoreProduct) : boolean {
    if (instance1 === undefined) {
      if (instance2 === undefined) {
        return true;
      } else {
        return false;
      }
    }
    if (instance1 === null) {
      if (instance2 === null) {
        return true;
      } else {
        return false;
      }
    }
    if ((instance2 === null) || (instance2 === undefined)) {
      return false;
    }

    if (instance1.getSku() === instance2.getSku()) {  // what we're really comparing here
      return true;
    }

    return false;
  };
  hashCode (o:PetStoreProduct) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    return Collections.getHashCodeForString(o.getSku());
  };
}

export class PetStoreProductAllFieldsComparator implements Comparator<PetStoreProduct> {
  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number {
    if (o1 === o2)
      return 0;
    if (o1 === undefined)
      return -1;
    if (o1 === null)
      return -1;
    if (o2 === undefined)
      return 1;
    if (o2 === null)
      return 1;
    if (o1.getSku() < o2.getSku())
      return -1;
    if (o1.getSku() > o2.getSku())
      return 1;
    if (o1.getName() < o2.getName())
      return -1;
    return 1;
  }
}

export class PetStoreProductSkuComparator implements Comparator<PetStoreProduct> {
  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number {
    if (o1 === o2)
      return 0;
    if (o1 === undefined)
      return -1;
    if (o1 === null)
      return -1;
    if (o2 === undefined)
      return 1;
    if (o2 === null)
      return 1;
    if (o1.getSku() < o2.getSku())
      return -1;
    return 1;
  }
}

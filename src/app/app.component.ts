import { Component } from '@angular/core';
import { SkipListSet, SkipListMap, ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, Hashable, AllFieldCollectable, Collectable, AllFieldHashable, Collections, Comparator, ImmutableCollection, JIterator } from 'typescriptcollectionsframework';

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
  public active:string = "ArrayList";

  public alData:ArrayList<string> = new ArrayList<string>(new AllFieldCollectable<string>());
  public llData:LinkedList<string> = new LinkedList<string>(new AllFieldCollectable<string>());
  public hsData:HashSet<string> = new HashSet<string>(new AllFieldHashable<string>());
  public tsData:TreeSet<string> = new TreeSet<string>(Collections.getStringComparator());
  public slData:SkipListSet<string> = new SkipListSet<string>(Collections.getStringComparator());

  public alAllData:ArrayList<PetStoreProduct> = new ArrayList<PetStoreProduct>(new AllFieldCollectable<PetStoreProduct>());
  public llAllData:LinkedList<PetStoreProduct> = new LinkedList<PetStoreProduct>(new AllFieldCollectable<PetStoreProduct>());
  public hsAllData:HashSet<PetStoreProduct> = new HashSet<PetStoreProduct>(new AllFieldHashable<PetStoreProduct>());
  public tsAllData:TreeSet<PetStoreProduct> = new TreeSet<PetStoreProduct>(new PetStoreProductAllFieldsComparator());
  public slAllData:SkipListSet<PetStoreProduct> = new SkipListSet<PetStoreProduct>(new PetStoreProductAllFieldsComparator());

  public alOneData:ArrayList<PetStoreProduct> = new ArrayList<PetStoreProduct>(new PetStoreProductSkuCollectable());
  public llOneData:LinkedList<PetStoreProduct> = new LinkedList<PetStoreProduct>(new PetStoreProductSkuCollectable());
  public hsOneData:HashSet<PetStoreProduct> = new HashSet<PetStoreProduct>(new PetStoreProductSkuHashable());
  public tsOneData:TreeSet<PetStoreProduct> = new TreeSet<PetStoreProduct>(new PetStoreProductSkuComparator());
  public slOneData:SkipListSet<PetStoreProduct> = new SkipListSet<PetStoreProduct>(new PetStoreProductSkuComparator());

  public hsMapData:HashMap<string, string> = new HashMap<string, string>(new AllFieldHashable<string>());
  public tsMapData:TreeMap<string, string> = new TreeMap<string, string>(Collections.getStringComparator());
  public slMapData:SkipListMap<string, string> = new SkipListMap<string, string>(Collections.getStringComparator());

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

    this.slData.add ("Cat");
    this.slData.add ("Squirrel");
    this.slData.add ("Dog");

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

    this.slAllData.add (psp1);
    this.slAllData.add (psp2);
    this.slAllData.add (psp3);

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

    this.slOneData.add (psp1);
    this.slOneData.add (psp2);
    this.slOneData.add (psp3);

    this.hsMapData.put (psp1.getSku(), psp1.getName());
    this.hsMapData.put (psp2.getSku(), psp2.getName());
    this.hsMapData.put (psp3.getSku(), psp3.getName());

    this.tsMapData.put (psp1.getSku(), psp1.getName());
    this.tsMapData.put (psp2.getSku(), psp2.getName());
    this.tsMapData.put (psp3.getSku(), psp3.getName());

    this.slMapData.put (psp1.getSku(), psp1.getName());
    this.slMapData.put (psp2.getSku(), psp2.getName());
    this.slMapData.put (psp3.getSku(), psp3.getName());
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
  SkipListSet() {
    this.active = "SkipListSet";
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
  SkipListSetAllFields() {
    this.active = "SkipListSetAllFields";
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
  SkipListSetOneField() {
    this.active = "SkipListSetOneField";
  }
  HashMap() {
    this.active = "HashMap";
  }
  TreeMap() {
    this.active = "TreeMap";
  }
  SkipListMap() {
    this.active = "SkipListMap";
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
  addSkipListSet(newdata:string) {
    this.slData.add (newdata);
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
  addSkipListSetAll(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.slAllData.add (psp);
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
  addSkipListSetOne(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.slOneData.add (psp);
  }
  putHashMap(newsku:string, newvalue:string) {
    this.hsMapData.put (newsku, newvalue);
  }
  putTreeMap(newsku:string, newvalue:string) {
    this.tsMapData.put (newsku, newvalue);
  }
  putSkipListMap(newsku:string, newvalue:string) {
    this.slMapData.put (newsku, newvalue);
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
  removeSkipListSetEntry(olddata:string) {
    this.slData.remove(olddata);
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
  removeSkipListSetAllEntry(oldpsp:PetStoreProduct) {
    this.slAllData.remove(oldpsp);
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
  removeSkipListSetOneEntry(oldpsp:PetStoreProduct) {
    this.slOneData.remove(oldpsp);
  }
  removeHashMapEntry(oldsku:string) {
    this.hsMapData.remove(oldsku);
  }
  removeTreeMapEntry(oldsku:string) {
    this.tsMapData.remove(oldsku);
  }
  removeSkipListMapEntry(oldsku:string) {
    this.slMapData.remove(oldsku);
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

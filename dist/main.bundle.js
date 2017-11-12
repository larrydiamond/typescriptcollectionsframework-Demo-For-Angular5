webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <td>ArrayList</td>\n    <td><a href=\"#\" (click)=\"ArrayList()\">string</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"ArrayListAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"ArrayListOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\n  </tr>\n  <tr>\n    <td>LinkedList</td>\n    <td><a href=\"#\" (click)=\"LinkedList()\">string</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"LinkedListAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"LinkedListOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\n  </tr>\n  <tr>\n    <td>HashSet</td>\n    <td><a href=\"#\" (click)=\"HashSet()\">string</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"HashSetAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"HashSetOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\n  </tr>\n  <tr>\n    <td>SkipListSet</td>\n    <td><a href=\"#\" (click)=\"SkipListSet()\">string</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"SkipListSetAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"SkipListSetOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\n  </tr>\n  <tr>\n    <td>TreeSet</td>\n    <td><a href=\"#\" (click)=\"TreeSet()\">string</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"TreeSetAllFields()\">PetStoreProduct compare all fields</a>&nbsp;</td>\n    <td><a href=\"#\" (click)=\"TreeSetOneField()\">PetStoreProduct compare one field</a>&nbsp;</td>\n  </tr>\n  <tr>\n    <td>HashMap</td>\n    <td><a href=\"#\" (click)=\"HashMap()\">string, string</a>&nbsp;</td>\n    <td colspan=2>&nbsp; Very similar to the HashSet examples..... you'll see :) &nbsp;</td>\n  </tr>\n  <tr>\n    <td>SkipListMap</td>\n    <td><a href=\"#\" (click)=\"SkipListMap()\">string, string</a>&nbsp;</td>\n    <td colspan=2>&nbsp; Very similar to the SkipListSet examples..... you'll see :) &nbsp;</td>\n  </tr>\n  <tr>\n    <td>TreeMap</td>\n    <td><a href=\"#\" (click)=\"TreeMap()\">string, string</a>&nbsp;</td>\n    <td colspan=2>&nbsp; Very similar to the TreeSet examples..... you'll see :) &nbsp;</td>\n  </tr>\n</table>\n<br>\nSource code for this app is located at <a href=\"https://github.com/larrydiamond/typescriptcollectionsframework-Demo-For-Angular4\">https://github.com/larrydiamond/typescriptcollectionsframework-Demo-For-Angular5</a>\n<br>\n\n<p *ngIf=\"active=='ArrayList'\">\n  ArrayList compare on a string:<br>\n  <li *ngFor=\"let str of alData\"><button (click)=\"removeArrayListEntry(str);\">{{str}}</button></li>\n  <br>\n  <input #aladd type=text placeholder=\"add\">\n  <button (click)=\"addArrayList(aladd.value);aladd.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  An ArrayList is a List backed by a resizeable array.   Items added to an ArrayList will be added at the end of the ArrayList.<br>\n  Click on an item to remove it from the ArrayList or enter a value and click Add to add it to the ArrayList.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_arraylist_.arraylist.html\">ArrayList Documentation</a><br><br>\n\n  alData:ArrayList&lt;string> = new ArrayList&lt;string>(new AllFieldCollectable&lt;string>());<br>\n  this.alData.add (\"Cat\");<br>\n  this.alData.add (\"Squirrel\");<br>\n  this.alData.add (\"Dog\");<br>\n  this.alData.remove (\"OtherElement\");<br>\n  for (let iter:JIterator&lt;string> = this.alData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\n    &nbsp;&nbsp;console.log (ostr);<br>\n  &#125;<br>\n  <br>\n  How to iterate over an Arraylist in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let str of alData\">&lt;button (click)=\"removeArrayListEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\n\n</p>\n\n<p *ngIf=\"active=='LinkedList'\">\n  LinkedList compare on a string:<br>\n  <li *ngFor=\"let str of llData\"><button (click)=\"removeLinkedListEntry(str);\">{{str}}</button></li>\n  <br>\n  <input #lladd type=text placeholder=\"add\">\n  <button (click)=\"addLinkedList(lladd.value);lladd.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A LinkedList is a List backed by a Doubly-linked list.   Items added to a LinkedList will be added at the end of the LinkedList.<br>\n  Click on an item to remove it from the LinkedList or enter a value and click Add to add it to the LinkedList.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_linkedlist_.linkedlist.html\">LinkedList Documentation</a><br><br>\n\n  llData:LinkedList&lt;string> = new LinkedList&lt;string>(new AllFieldCollectable&lt;string>());<br>\n  this.llData.add (\"Cat\");<br>\n  this.llData.add (\"Squirrel\");<br>\n  this.llData.add (\"Dog\");<br>\n  this.llData.remove (\"OtherElement\");<br>\n  for (let iter:JIterator&lt;string> = this.llData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\n    &nbsp;&nbsp;console.log (ostr);<br>\n  &#125;<br>\n  <br>\n  How to iterate over a LinkedList in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let str of llData\">&lt;button (click)=\"removeLinkedListEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\n</p>\n\n<p *ngIf=\"active=='HashSet'\">\n  HashSet compare on a string:<br>\n  <li *ngFor=\"let str of hsData\"><button (click)=\"removeHashSetEntry(str);\">{{str}}</button></li>\n  <br>\n  <input #hsadd type=text placeholder=\"add\">\n  <button (click)=\"addHashSet(hsadd.value);hsadd.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A HashSet is a Set backed by a HashMap.   Duplicates are not permitted.   There are no guarantees as to the iteration order of the set.   Set order is not guaranteed to remain constant over time.<br>\n  Click on an item to remove it from the HashSet or enter a value and click Add to add it to the HashSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_hashset_.hashset.html\">HashSet Documentation</a><br><br>\n\n  hsData:HashSet&lt;string> = new HashSet&lt;string>(new AllFieldHashable&lt;string>());<br>\n  this.hsData.add (\"Cat\");<br>\n  this.hsData.add (\"Squirrel\");<br>\n  this.hsData.add (\"Dog\");<br>\n  this.hsData.remove (\"OtherElement\");<br>\n  for (let iter:JIterator&lt;string> = this.hsData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\n    &nbsp;&nbsp;console.log (ostr);<br>\n  &#125;<br>\n  <br>\n  How to iterate over a HashSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let str of hsData\">&lt;button (click)=\"removeHashSetEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\n</p>\n\n<p *ngIf=\"active=='SkipListSet'\">\n  SkipList compare using string Comparator<br>\n  <li *ngFor=\"let str of slData\"><button (click)=\"removeSkipListSetEntry(str);\">{{str}}</button></li>\n  <br>\n  <input #sladd type=text placeholder=\"add\">\n  <button (click)=\"addSkipListSet(sladd.value);sladd.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A SkipListSet is a Set backed by a SkipListMap.  (TL;DR: Replace all TreeSet with SkipListSet they're faster <a href=\"https://en.wikipedia.org/wiki/Skip_list\">SkipList explanation</a>  ).  Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\n  Click on an item to remove it from the SkipListSet or enter a value and click Add to add it to the SkipListSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_skiplist_.skiplistset.html\">SkipListSet Documentation</a><br><br>\n\n  slData:SkipListSet&lt;string> = new SkipListSet&lt;string>(Collections.getStringComparator());<br>\n  this.slData.add (\"Cat\");<br>\n  this.slData.add (\"Squirrel\");<br>\n  this.slData.add (\"Dog\");<br>\n  this.slData.remove (\"OtherElement\");<br>\n  for (let iter:JIterator&lt;string> = this.slData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\n    &nbsp;&nbsp;console.log (ostr);<br>\n  &#125;<br>\n  <br>\n  How to iterate over a SkipListSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let str of slData\">&lt;button (click)=\"removeSkipListSetEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\n</p>\n\n<p *ngIf=\"active=='TreeSet'\">\n  TreeSet compare using string Comparator<br>\n  <li *ngFor=\"let str of tsData\"><button (click)=\"removeTreeSetEntry(str);\">{{str}}</button></li>\n  <br>\n  <input #tsadd type=text placeholder=\"add\">\n  <button (click)=\"addTreeSet(tsadd.value);tsadd.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A TreeSet is a Set backed by a TreeMap.   Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\n  Click on an item to remove it from the TreeSet or enter a value and click Add to add it to the TreeSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_treeset_.treeset.html\">TreeSet Documentation</a><br><br>\n\n  tsData:TreeSet&lt;string> = new TreeSet&lt;string>(Collections.getStringComparator());<br>\n  this.tsData.add (\"Cat\");<br>\n  this.tsData.add (\"Squirrel\");<br>\n  this.tsData.add (\"Dog\");<br>\n  this.tsData.remove (\"OtherElement\");<br>\n  for (let iter:JIterator&lt;string> = this.tsData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\n    &nbsp;&nbsp;console.log (ostr);<br>\n  &#125;<br>\n  <br>\n  How to iterate over a TreeSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let str of tsData\">&lt;button (click)=\"removeTreeSetEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\n</p>\n\n<p *ngIf=\"active=='ArrayListAllFields'\">\n  ArrayList compare on all fields:<br>\n  <li *ngFor=\"let psp of alAllData\"><button (click)=\"removeArrayListAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #alalladdsku type=text placeholder=\"sku\">\n  <input #alalladdname type=text placeholder=\"name\">\n  <button (click)=\"addArrayListAll(alalladdsku.value, alalladdname.value);alalladdsku.value='';alalladdname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  An ArrayList is a List backed by a resizeable array.   Items added to an ArrayList will be added at the end of the ArrayList.<br>\n  Click on an item to remove it from the ArrayList or enter a sku and a name and click Add to add it to the ArrayList.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_arraylist_.arraylist.html\">ArrayList Documentation</a><br><br>\n\n  alAllData:ArrayList&lt;PetStoreProduct> = new ArrayList&lt;PetStoreProduct>(new AllFieldCollectable&lt;PetStoreProduct>());<br>\n  this.alAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.alAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.alAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.alAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.alAllData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over an Arraylist in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of alAllData\">&lt;button (click)=\"removeArrayListAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\n\n  <br>  <br>\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n    &nbsp;&nbsp;private sku:string;<br>\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n<br>\n    &nbsp;&nbsp;private name:string;<br>\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n<br>\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n    &nbsp;&nbsp;}<br>\n  }<br>\n</p>\n\n\n<p *ngIf=\"active=='LinkedListAllFields'\">\n    LinkedList compare on all fields:<br>\n    <li *ngFor=\"let psp of llAllData\"><button (click)=\"removeLinkedListAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n    <br>\n    <input #llalladdsku type=text placeholder=\"sku\">\n    <input #llalladdname type=text placeholder=\"name\">\n    <button (click)=\"addLinkedListAll(llalladdsku.value, llalladdname.value);llalladdsku.value='';llalladdname.value=''\">Add</button>\n\n    <br>  <br>  <br>  <br>\n    A LinkedList is a List backed by a Doubly-linked list.   Items added to a LinkedList will be added at the end of the LinkedList.<br>\n    Click on an item to remove it from the LinkedList or enter a sku and a name and click Add to add it to the LinkedList.<br><br>\n    <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_linkedlist_.linkedlist.html\">LinkedList Documentation</a><br><br>\n\n    llAllData:LinkedList&lt;PetStoreProduct> = new LinkedList&lt;PetStoreProduct>(new AllFieldCollectable&lt;PetStoreProduct>());<br>\n    this.llAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n    this.llAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n    this.llAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n    this.llAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n    for (let iter:JIterator&lt;PetStoreProduct> = this.llAllData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n    &#125;<br>\n    <br>\n    How to iterate over an LinkedList in the HTML template for an Angular Component:<br>\n    &lt;li *ngFor=\"let pspa of llAllData\">&lt;button (click)=\"removeLinkedListAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\n\n    <br>  <br>\n    export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n      &nbsp;&nbsp;private sku:string;<br>\n      &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n      &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n    <br>\n      &nbsp;&nbsp;private name:string;<br>\n      &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n      &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n    <br>\n      &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n      &nbsp;&nbsp;}<br>\n    }<br>\n</p>\n\n<p *ngIf=\"active=='HashSetAllFields'\">\n  HashSet compare on all fields:<br>\n  <li *ngFor=\"let psp of hsAllData\"><button (click)=\"removeHashSetAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #hsalladdsku type=text placeholder=\"sku\">\n  <input #hsalladdname type=text placeholder=\"name\">\n  <button (click)=\"addHashSetAll(hsalladdsku.value, hsalladdname.value);hsalladdsku.value='';hsalladdname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A HashSet is a Set backed by a HashMap.   Duplicates are not permitted.   There are no guarantees as to the iteration order of the set.   Set order is not guaranteed to remain constant over time.<br>\n  Click on an item to remove it from the HashSet or enter a sku and a name and and click Add to add it to the HashSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_hashset_.hashset.html\">HashSet Documentation</a><br><br>\n\n  hsAllData:HashSet&lt;PetStoreProduct> = new HashSet&lt;PetStoreProduct>(new AllFieldHashable&lt;PetStoreProduct>());<br>\n  this.hsAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.hsAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.hsAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.hsAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.hsAllData.iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over an HashSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of hsAllData\">&lt;button (click)=\"removeHashSetAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\n\n  <br>  <br>\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n    &nbsp;&nbsp;private sku:string;<br>\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n  <br>\n    &nbsp;&nbsp;private name:string;<br>\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n  <br>\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n    &nbsp;&nbsp;}<br>\n  }<br>\n</p>\n\n<p *ngIf=\"active=='SkipListSetAllFields'\">\n  SkipListSet compare all on fields<br>\n  <li *ngFor=\"let psp of slAllData\"><button (click)=\"removeSkipListSetAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #slalladdsku type=text placeholder=\"sku\">\n  <input #slalladdname type=text placeholder=\"name\">\n  <button (click)=\"addSkipListSetAll(slalladdsku.value, slalladdname.value);slalladdsku.value='';slalladdname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A SkipListSet is a Set backed by a SkipListMap.  (TL;DR: Replace all TreeSet with SkipListSet they're faster <a href=\"https://en.wikipedia.org/wiki/Skip_list\">SkipList explanation</a>  ).  Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\n  Click on an item to remove it from the SkipListSet or enter a value and click Add to add it to the SkipListSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_skiplist_.skiplistset.html\">SkipListSet Documentation</a><br><br>\n\n  slAllData:SkipListSet&lt;string> = new SkipListSet&lt;PetStoreProduct>(new PetStoreProductAllFieldsComparator());<br>\n  this.slAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.slAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.slAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.slAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.slAllData.iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over a SkipListSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of slAllData\">&lt;button (click)=\"removeSkipListSetAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li><br>\n<br>\n  export class PetStoreProductAllFieldsComparator implements Comparator&lt;PetStoreProduct> &#123;<br>\n  &nbsp;&nbsp;  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === o2)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;      if (o1 === undefined)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === null)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === undefined)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === null)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() < o2.getSku())<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() > o2.getSku())<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getName() < o2.getName())<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    return 1;<br>\n  &nbsp;&nbsp;  }<br>\n  }<br>\n</p>\n\n<p *ngIf=\"active=='TreeSetAllFields'\">\n  TreeSet compare all on fields<br>\n  <li *ngFor=\"let psp of tsAllData\"><button (click)=\"removeTreeSetAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #tsalladdsku type=text placeholder=\"sku\">\n  <input #tsalladdname type=text placeholder=\"name\">\n  <button (click)=\"addTreeSetAll(tsalladdsku.value, tsalladdname.value);tsalladdsku.value='';tsalladdname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A TreeSet is a Set backed by a TreeMap.   Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\n  Click on an item to remove it from the TreeSet or enter a value and click Add to add it to the TreeSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_treeset_.treeset.html\">TreeSet Documentation</a><br><br>\n\n  tsAllData:TreeSet&lt;string> = new TreeSet&lt;PetStoreProduct>(new PetStoreProductAllFieldsComparator());<br>\n  this.tsAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.tsAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.tsAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.tsAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.tsAllData.iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over a TreeSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of tsAllData\">&lt;button (click)=\"removeTreeSetAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li><br>\n<br>\n  export class PetStoreProductAllFieldsComparator implements Comparator&lt;PetStoreProduct> &#123;<br>\n  &nbsp;&nbsp;  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === o2)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;      if (o1 === undefined)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === null)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === undefined)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === null)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() < o2.getSku())<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() > o2.getSku())<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getName() < o2.getName())<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    return 1;<br>\n  &nbsp;&nbsp;  }<br>\n  }<br>\n</p>\n\n<p *ngIf=\"active=='ArrayListOneField'\">\n  ArrayList compare on one field:<br>\n  <li *ngFor=\"let psp of alOneData\"><button (click)=\"removeArrayListOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #aloneaddsku type=text placeholder=\"sku\">\n  <input #aloneaddname type=text placeholder=\"name\">\n  <button (click)=\"addArrayListOne(aloneaddsku.value, aloneaddname.value);aloneaddsku.value='';aloneaddname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  An ArrayList is a List backed by a resizeable array.   Items added to an ArrayList will be added at the end of the ArrayList.<br>\n  Click on an item to remove it from the ArrayList or enter a sku and a name and click Add to add it to the ArrayList.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_arraylist_.arraylist.html\">ArrayList Documentation</a><br><br>\n\n  alOneData:ArrayList&lt;PetStoreProduct> = new ArrayList&lt;PetStoreProduct>(new PetStoreProductSkuCollectable());<br>\n  this.alOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.alOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.alOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.alOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.alOneData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over an Arraylist in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of alOneData\">&lt;button (click)=\"removeArrayListOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\n\n  <br>  <br>\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n    &nbsp;&nbsp;private sku:string;<br>\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n<br>\n    &nbsp;&nbsp;private name:string;<br>\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n<br>\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n    &nbsp;&nbsp;}<br>\n  }<br>\n  <br>\n  export class PetStoreProductSkuCollectable implements Collectable&lt;PetStoreProduct> &#123;<br>\n  &nbsp;&nbsp;equals (instance1 : PetStoreProduct, instance2 : PetStoreProduct) : boolean &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;if (instance1 === undefined) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (instance2 === undefined) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;}<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1 === null) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      if (instance2 === null) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return true;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } else &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return false;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      }<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if ((instance2 === null) || (instance2 === undefined)) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return false;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1.getSku() === instance2.getSku()) &#123;  // what we're really comparing here<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return true;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    return false;<br>\n  &nbsp;&nbsp;  }<br>\n  }<br>\n\n\n</p>\n\n\n<p *ngIf=\"active=='LinkedListOneField'\">\n    LinkedList compare on one field:<br>\n    <li *ngFor=\"let psp of llOneData\"><button (click)=\"removeLinkedListOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n    <br>\n    <input #llOneaddsku type=text placeholder=\"sku\">\n    <input #llOneaddname type=text placeholder=\"name\">\n    <button (click)=\"addLinkedListOne(llOneaddsku.value, llOneaddname.value);llOneaddsku.value='';llOneaddname.value=''\">Add</button>\n\n    <br>  <br>  <br>  <br>\n    A LinkedList is a List backed by a Doubly-linked list.   Items added to a LinkedList will be added at the end of the LinkedList.<br>\n    Click on an item to remove it from the LinkedList or enter a sku and a name and click Add to add it to the LinkedList.<br><br>\n    <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_linkedlist_.linkedlist.html\">LinkedList Documentation</a><br><br>\n\n    llOneData:LinkedList&lt;PetStoreProduct> = new LinkedList&lt;PetStoreProduct>(new PetStoreProductSkuCollectable());<br>\n    this.llOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n    this.llOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n    this.llOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n    this.llOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n    for (let iter:JIterator&lt;PetStoreProduct> = this.llOneData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n    &#125;<br>\n    <br>\n    How to iterate over an LinkedList in the HTML template for an Angular Component:<br>\n    &lt;li *ngFor=\"let pspa of llOneData\">&lt;button (click)=\"removeLinkedListOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\n\n    <br>  <br>\n    export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n      &nbsp;&nbsp;private sku:string;<br>\n      &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n      &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n    <br>\n      &nbsp;&nbsp;private name:string;<br>\n      &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n      &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n    <br>\n      &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n      &nbsp;&nbsp;}<br>\n    }<br>\n    <br>\n    export class PetStoreProductSkuCollectable implements Collectable&lt;PetStoreProduct> &#123;<br>\n    &nbsp;&nbsp;equals (instance1 : PetStoreProduct, instance2 : PetStoreProduct) : boolean &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;if (instance1 === undefined) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (instance2 === undefined) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;}<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1 === null) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      if (instance2 === null) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return true;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } else &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return false;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      }<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;    if ((instance2 === null) || (instance2 === undefined)) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return false;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n  <br>\n    &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1.getSku() === instance2.getSku()) &#123;  // what we're really comparing here<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return true;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n  <br>\n    &nbsp;&nbsp;&nbsp;&nbsp;    return false;<br>\n    &nbsp;&nbsp;  }<br>\n    }<br>\n</p>\n\n<p *ngIf=\"active=='HashSetOneField'\">\n  HashSet compare on one field:<br>\n  <li *ngFor=\"let psp of hsOneData\"><button (click)=\"removeHashSetOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #hsOneaddsku type=text placeholder=\"sku\">\n  <input #hsOneaddname type=text placeholder=\"name\">\n  <button (click)=\"addHashSetOne(hsOneaddsku.value, hsOneaddname.value);hsOneaddsku.value='';hsOneaddname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A HashSet is a Set backed by a HashMap.   Duplicates are not permitted.   There are no guarantees as to the iteration order of the set.   Set order is not guaranteed to remain constant over time.<br>\n  Click on an item to remove it from the HashSet or enter a sku and a name and and click Add to add it to the HashSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_hashset_.hashset.html\">HashSet Documentation</a><br><br>\n\n  hsOneData:HashSet&lt;PetStoreProduct> = new HashSet&lt;PetStoreProduct>(new PetStoreProductSkuHashable());<br>\n  this.hsOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.hsOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.hsOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.hsOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.hsOneData.iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over an HashSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of hsOneData\">&lt;button (click)=\"removeHashSetOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\n\n  <br>  <br>\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n    &nbsp;&nbsp;private sku:string;<br>\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n  <br>\n    &nbsp;&nbsp;private name:string;<br>\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n  <br>\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n    &nbsp;&nbsp;}<br>\n  }<br>\n<br>\n  export class PetStoreProductSkuHashable implements Hashable&lt;PetStoreProduct> &#123;<br>\n  &nbsp;&nbsp;  equals (instance1 : PetStoreProduct, instance2 : PetStoreProduct) : boolean &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1 === undefined) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      if (instance2 === undefined) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return true;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } else &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return false;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      }<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1 === null) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      if (instance2 === null) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return true;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } else &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        return false;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      }<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if ((instance2 === null) || (instance2 === undefined)) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return false;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (instance1.getSku() === instance2.getSku()) &#123;  // what we're really comparing here<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return true;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    return false;<br>\n  &nbsp;&nbsp;  };<br>\n  &nbsp;&nbsp;  hashCode (o:PetStoreProduct) : number &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o === undefined) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o === null) &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    }<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    return Collections.getHashCodeForString(o.getSku());<br>\n  &nbsp;&nbsp;  };<br>\n  }<br>\n\n</p>\n\n<p *ngIf=\"active=='TreeSetOneField'\">\n  TreeSet compare all one field<br>\n  <li *ngFor=\"let psp of tsOneData\"><button (click)=\"removeTreeSetOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #tsoneaddsku type=text placeholder=\"sku\">\n  <input #tsoneaddname type=text placeholder=\"name\">\n  <button (click)=\"addTreeSetOne(tsoneaddsku.value, tsoneaddname.value);tsoneaddsku.value='';tsoneaddname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A TreeSet is a Set backed by a TreeMap.   Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\n  Click on an item to remove it from the TreeSet or enter a value and click Add to add it to the TreeSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_treeset_.treeset.html\">TreeSet Documentation</a><br><br>\n\n  tsOneData:TreeSet&lt;string> = new TreeSet&lt;PetStoreProduct>(new PetStoreProductOneFieldComparator());<br>\n  this.tsOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.tsOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.tsOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.tsOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.tsOneData.iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over a TreeSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of tsOneData\">&lt;button (click)=\"removeTreeSetOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li><br>\n<br>\n  export class PetStoreProductOneFieldComparator implements Comparator&lt;PetStoreProduct> &#123;<br>\n  &nbsp;&nbsp;  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === o2)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;      if (o1 === undefined)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === null)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === undefined)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === null)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() < o2.getSku())<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    return 1;<br>\n  &nbsp;&nbsp;  }<br>\n  }<br>\n</p>\n\n<p *ngIf=\"active=='SkipListSetOneField'\">\n  SkipListSet compare all one field<br>\n  <li *ngFor=\"let psp of slOneData\"><button (click)=\"removeSkipListSetOneEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #sloneaddsku type=text placeholder=\"sku\">\n  <input #sloneaddname type=text placeholder=\"name\">\n  <button (click)=\"addSkipListSetOne(sloneaddsku.value, sloneaddname.value);sloneaddsku.value='';sloneaddname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A SkipListSet is a Set backed by a SkipListMap.  (TL;DR: Replace all TreeSet with SkipListSet they're faster <a href=\"https://en.wikipedia.org/wiki/Skip_list\">SkipList explanation</a>  ).  Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\n  Click on an item to remove it from the SkipListSet or enter a value and click Add to add it to the SkipListSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_skiplist_.skiplistset.html\">SkipListSet Documentation</a><br><br>\n\n  slOneData:SkipListSet&lt;string> = new SkipListSet&lt;PetStoreProduct>(new PetStoreProductOneFieldComparator());<br>\n  this.slOneData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.slOneData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.slOneData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.slOneData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.slOneData.iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over a SkipListSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of slOneData\">&lt;button (click)=\"removeSkipListSetOneEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li><br>\n<br>\n  export class PetStoreProductOneFieldComparator implements Comparator&lt;PetStoreProduct> &#123;<br>\n  &nbsp;&nbsp;  compare(o1:PetStoreProduct, o2:PetStoreProduct) : number &#123;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === o2)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 0;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;      if (o1 === undefined)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1 === null)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === undefined)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o2 === null)<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return 1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    if (o1.getSku() < o2.getSku())<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      return -1;<br>\n  &nbsp;&nbsp;&nbsp;&nbsp;    return 1;<br>\n  &nbsp;&nbsp;  }<br>\n  }<br>\n</p>\n\n<p *ngIf=\"active=='HashMap'\">\n  HashMap compare on string, string:<br>\n  <li *ngFor=\"let psp of hsMapData.entrySet()\"><button (click)=\"removeHashMapEntry(psp.getKey());\">{{psp.getKey()}} - {{psp.getValue()}}</button></li>\n  <br>\n  <input #hsmapsku type=text placeholder=\"key\">\n  <input #hsmapname type=text placeholder=\"value\">\n  <button (click)=\"putHashMap(hsmapsku.value, hsmapname.value);hsmapsku.value='';hsmapname.value=''\">Put</button>\n\n  <br>  <br>  <br>  <br>\n  A HashMap is a Hash implementation of the JMap interface.   Duplicate keys are not permitted.   There are no guarantees as to the iteration order of the map.   Map order is not guaranteed to remain constant over time.<br>\n  Click on an item to remove it from the HashMap or enter a key and a value and and click Put to add it to the HashMap.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_hashmap_.hashmap.html\">HashMap Documentation</a><br><br>\n\n  hsMapData:HashMap&lt;string, string> = new HashMap&lt;string, string>(new AllFieldHashable&lt;string>());<br>\n  this.hsMapData.add (\"ABCDE\", \"Bird Seed\");<br>\n  this.hsMapData.add (\"FGHIJ\", \"Cat Food\");<br>\n  this.hsMapData.add (\"KLMNO\", \"Dog Food\");<br>\n  this.hsMapData.remove (\"ZZZZZ\", \"Not there anymore\");<br>\n  for (let iter:JIterator&lt;MapEntry&lt;string, string> = this.hsMapData.entrySet().iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:MapEntry&lt;string, string> = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getKey() - psp.getEntry());<br>\n  &#125;<br>\n  <br>\n  How to iterate over a HashMap in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let psp of hsMapData.entrySet()\">&lt;button (click)=\"removeHashMap(psp);\">&#123;&#123;psp.getKey() } } - &#123;&#123;psp.getValue() } } &lt;/button>&lt;/li>\n\n  <br>  <br>\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n    &nbsp;&nbsp;private sku:string;<br>\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n  <br>\n    &nbsp;&nbsp;private name:string;<br>\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n  <br>\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n    &nbsp;&nbsp;}<br>\n  }<br>\n</p>\n\n<p *ngIf=\"active=='TreeMap'\">\n  TreeMap compare on string, string:<br>\n  <li *ngFor=\"let psp of tsMapData.entrySet()\"><button (click)=\"removeTreeMapEntry(psp.getKey());\">{{psp.getKey()}} - {{psp.getValue()}}</button></li>\n  <br>\n  <input #tsmapsku type=text placeholder=\"key\">\n  <input #tsmapname type=text placeholder=\"value\">\n  <button (click)=\"putTreeMap(tsmapsku.value, tsmapname.value);tsmapsku.value='';tsmapname.value=''\">Put</button>\n\n  <br>  <br>  <br>  <br>\n  A TreeMap is a binary tree implementation of the JMap interface.   Duplicate keys are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\n  Click on an item to remove it from the TreeMap or enter a key and a value and and click Put to add it to the TreeMap.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_treemap_.treemap.html\">TreeMap Documentation</a><br><br>\n\n  tsMapData:TreeMap&lt;string, string> = new TreeMap&lt;string, string>(Collections.getStringComparator());<br>\n  this.tsMapData.add (\"ABCDE\", \"Bird Seed\");<br>\n  this.tsMapData.add (\"FGHIJ\", \"Cat Food\");<br>\n  this.tsMapData.add (\"KLMNO\", \"Dog Food\");<br>\n  this.tsMapData.remove (\"ZZZZZ\", \"Not there anymore\");<br>\n  for (let iter:JIterator&lt;MapEntry&lt;string, string> = this.tsMapData.entrySet().iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:MapEntry&lt;string, string> = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getKey() - psp.getEntry());<br>\n  &#125;<br>\n  <br>\n  How to iterate over a TreeMap in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let psp of tsMapData.entrySet()\">&lt;button (click)=\"removeTreeMap(psp);\">&#123;&#123;psp.getKey() } } - &#123;&#123;psp.getValue() } } &lt;/button>&lt;/li>\n\n  <br>  <br>\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n    &nbsp;&nbsp;private sku:string;<br>\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n  <br>\n    &nbsp;&nbsp;private name:string;<br>\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n  <br>\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n    &nbsp;&nbsp;}<br>\n  }<br>\n</p>\n\n<p *ngIf=\"active=='SkipListMap'\">\n  SkipListMap compare on string, string:<br>\n  <li *ngFor=\"let psp of slMapData.entrySet()\"><button (click)=\"removeSkipListMapEntry(psp.getKey());\">{{psp.getKey()}} - {{psp.getValue()}}</button></li>\n  <br>\n  <input #slmapsku type=text placeholder=\"key\">\n  <input #slmapname type=text placeholder=\"value\">\n  <button (click)=\"putSkipListMap(slmapsku.value, slmapname.value);slmapsku.value='';slmapname.value=''\">Put</button>\n\n  <br>  <br>  <br>  <br>\n  A SkipListMap is a SkipList implementation of the JMap interface.   (TL;DR: Replace all TreeMap with SkipListMap they're faster <a href=\"https://en.wikipedia.org/wiki/Skip_list\">SkipList explanation</a>  ).  Duplicate keys are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\n  Click on an item to remove it from the SkipListMap or enter a key and a value and and click Put to add it to the SkipListMap.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_skiplist_.skiplistmap.html\">SkipListMap Documentation</a><br><br>\n\n  slMapData:SkipListMap&lt;string, string> = new SkipListMap&lt;string, string>(Collections.getStringComparator());<br>\n  this.slMapData.add (\"ABCDE\", \"Bird Seed\");<br>\n  this.slMapData.add (\"FGHIJ\", \"Cat Food\");<br>\n  this.slMapData.add (\"KLMNO\", \"Dog Food\");<br>\n  this.slMapData.remove (\"ZZZZZ\", \"Not there anymore\");<br>\n  for (let iter:JIterator&lt;MapEntry&lt;string, string> = this.slMapData.entrySet().iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:MapEntry&lt;string, string> = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getKey() - psp.getEntry());<br>\n  &#125;<br>\n  <br>\n  How to iterate over a SkipListMap in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let psp of slMapData.entrySet()\">&lt;button (click)=\"removeSkipListMap(psp);\">&#123;&#123;psp.getKey() } } - &#123;&#123;psp.getValue() } } &lt;/button>&lt;/li>\n\n  <br>  <br>\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n    &nbsp;&nbsp;private sku:string;<br>\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n  <br>\n    &nbsp;&nbsp;private name:string;<br>\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n  <br>\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n    &nbsp;&nbsp;}<br>\n  }<br>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PetStoreProduct */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export PetStoreProductSkuCollectable */
/* unused harmony export PetStoreProductSkuHashable */
/* unused harmony export PetStoreProductAllFieldsComparator */
/* unused harmony export PetStoreProductSkuComparator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__ = __webpack_require__("../../../../typescriptcollectionsframework/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetStoreProduct = (function () {
    function PetStoreProduct(isku, iname) {
        this.sku = isku;
        this.name = iname;
    }
    PetStoreProduct.prototype.getSku = function () { return this.sku; };
    PetStoreProduct.prototype.getName = function () { return this.name; };
    return PetStoreProduct;
}());

var AppComponent = (function () {
    function AppComponent() {
        this.active = "ArrayList";
        this.alData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["ArrayList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.llData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["LinkedList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.hsData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["HashSet"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldHashable"]());
        this.tsData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["TreeSet"](__WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["Collections"].getStringComparator());
        this.slData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["SkipListSet"](__WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["Collections"].getStringComparator());
        this.alAllData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["ArrayList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.llAllData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["LinkedList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.hsAllData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["HashSet"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldHashable"]());
        this.tsAllData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["TreeSet"](new PetStoreProductAllFieldsComparator());
        this.slAllData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["SkipListSet"](new PetStoreProductAllFieldsComparator());
        this.alOneData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["ArrayList"](new PetStoreProductSkuCollectable());
        this.llOneData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["LinkedList"](new PetStoreProductSkuCollectable());
        this.hsOneData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["HashSet"](new PetStoreProductSkuHashable());
        this.tsOneData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["TreeSet"](new PetStoreProductSkuComparator());
        this.slOneData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["SkipListSet"](new PetStoreProductSkuComparator());
        this.hsMapData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["HashMap"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldHashable"]());
        this.tsMapData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["TreeMap"](__WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["Collections"].getStringComparator());
        this.slMapData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["SkipListMap"](__WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["Collections"].getStringComparator());
        this.alData.add("Cat");
        this.alData.add("Squirrel");
        this.alData.add("Dog");
        this.llData.add("Cat");
        this.llData.add("Squirrel");
        this.llData.add("Dog");
        this.hsData.add("Cat");
        this.hsData.add("Squirrel");
        this.hsData.add("Dog");
        this.tsData.add("Cat");
        this.tsData.add("Squirrel");
        this.tsData.add("Dog");
        this.slData.add("Cat");
        this.slData.add("Squirrel");
        this.slData.add("Dog");
        var psp1 = new PetStoreProduct("ABCDE", "Bird Seed");
        var psp2 = new PetStoreProduct("FGHIJ", "Cat Food");
        var psp3 = new PetStoreProduct("KLMNO", "Dog Food");
        this.alAllData.add(psp1);
        this.alAllData.add(psp2);
        this.alAllData.add(psp3);
        this.llAllData.add(psp1);
        this.llAllData.add(psp2);
        this.llAllData.add(psp3);
        this.hsAllData.add(psp1);
        this.hsAllData.add(psp2);
        this.hsAllData.add(psp3);
        this.tsAllData.add(psp1);
        this.tsAllData.add(psp2);
        this.tsAllData.add(psp3);
        this.slAllData.add(psp1);
        this.slAllData.add(psp2);
        this.slAllData.add(psp3);
        this.alOneData.add(psp1);
        this.alOneData.add(psp2);
        this.alOneData.add(psp3);
        this.llOneData.add(psp1);
        this.llOneData.add(psp2);
        this.llOneData.add(psp3);
        this.hsOneData.add(psp1);
        this.hsOneData.add(psp2);
        this.hsOneData.add(psp3);
        this.tsOneData.add(psp1);
        this.tsOneData.add(psp2);
        this.tsOneData.add(psp3);
        this.slOneData.add(psp1);
        this.slOneData.add(psp2);
        this.slOneData.add(psp3);
        this.hsMapData.put(psp1.getSku(), psp1.getName());
        this.hsMapData.put(psp2.getSku(), psp2.getName());
        this.hsMapData.put(psp3.getSku(), psp3.getName());
        this.tsMapData.put(psp1.getSku(), psp1.getName());
        this.tsMapData.put(psp2.getSku(), psp2.getName());
        this.tsMapData.put(psp3.getSku(), psp3.getName());
        this.slMapData.put(psp1.getSku(), psp1.getName());
        this.slMapData.put(psp2.getSku(), psp2.getName());
        this.slMapData.put(psp3.getSku(), psp3.getName());
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ArrayList = function () {
        this.active = "ArrayList";
    };
    AppComponent.prototype.LinkedList = function () {
        this.active = "LinkedList";
    };
    AppComponent.prototype.HashSet = function () {
        this.active = "HashSet";
    };
    AppComponent.prototype.TreeSet = function () {
        this.active = "TreeSet";
    };
    AppComponent.prototype.SkipListSet = function () {
        this.active = "SkipListSet";
    };
    AppComponent.prototype.ArrayListAllFields = function () {
        this.active = "ArrayListAllFields";
    };
    AppComponent.prototype.LinkedListAllFields = function () {
        this.active = "LinkedListAllFields";
    };
    AppComponent.prototype.HashSetAllFields = function () {
        this.active = "HashSetAllFields";
    };
    AppComponent.prototype.TreeSetAllFields = function () {
        this.active = "TreeSetAllFields";
    };
    AppComponent.prototype.SkipListSetAllFields = function () {
        this.active = "SkipListSetAllFields";
    };
    AppComponent.prototype.ArrayListOneField = function () {
        this.active = "ArrayListOneField";
    };
    AppComponent.prototype.LinkedListOneField = function () {
        this.active = "LinkedListOneField";
    };
    AppComponent.prototype.HashSetOneField = function () {
        this.active = "HashSetOneField";
    };
    AppComponent.prototype.TreeSetOneField = function () {
        this.active = "TreeSetOneField";
    };
    AppComponent.prototype.SkipListSetOneField = function () {
        this.active = "SkipListSetOneField";
    };
    AppComponent.prototype.HashMap = function () {
        this.active = "HashMap";
    };
    AppComponent.prototype.TreeMap = function () {
        this.active = "TreeMap";
    };
    AppComponent.prototype.SkipListMap = function () {
        this.active = "SkipListMap";
    };
    AppComponent.prototype.addArrayList = function (newdata) {
        this.alData.add(newdata);
    };
    AppComponent.prototype.addLinkedList = function (newdata) {
        this.llData.add(newdata);
    };
    AppComponent.prototype.addHashSet = function (newdata) {
        this.hsData.add(newdata);
    };
    AppComponent.prototype.addTreeSet = function (newdata) {
        this.tsData.add(newdata);
    };
    AppComponent.prototype.addSkipListSet = function (newdata) {
        this.slData.add(newdata);
    };
    AppComponent.prototype.addArrayListAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.alAllData.add(psp);
    };
    AppComponent.prototype.addLinkedListAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.llAllData.add(psp);
    };
    AppComponent.prototype.addHashSetAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.hsAllData.add(psp);
    };
    AppComponent.prototype.addTreeSetAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.tsAllData.add(psp);
    };
    AppComponent.prototype.addSkipListSetAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.slAllData.add(psp);
    };
    AppComponent.prototype.addArrayListOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.alOneData.add(psp);
    };
    AppComponent.prototype.addLinkedListOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.llOneData.add(psp);
    };
    AppComponent.prototype.addHashSetOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.hsOneData.add(psp);
    };
    AppComponent.prototype.addTreeSetOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.tsOneData.add(psp);
    };
    AppComponent.prototype.addSkipListSetOne = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.slOneData.add(psp);
    };
    AppComponent.prototype.putHashMap = function (newsku, newvalue) {
        this.hsMapData.put(newsku, newvalue);
    };
    AppComponent.prototype.putTreeMap = function (newsku, newvalue) {
        this.tsMapData.put(newsku, newvalue);
    };
    AppComponent.prototype.putSkipListMap = function (newsku, newvalue) {
        this.slMapData.put(newsku, newvalue);
    };
    AppComponent.prototype.removeArrayListEntry = function (olddata) {
        this.alData.remove(olddata);
    };
    AppComponent.prototype.removeLinkedListEntry = function (olddata) {
        this.llData.remove(olddata);
    };
    AppComponent.prototype.removeHashSetEntry = function (olddata) {
        this.hsData.remove(olddata);
    };
    AppComponent.prototype.removeTreeSetEntry = function (olddata) {
        this.tsData.remove(olddata);
    };
    AppComponent.prototype.removeSkipListSetEntry = function (olddata) {
        this.slData.remove(olddata);
    };
    AppComponent.prototype.removeArrayListAllEntry = function (oldpsp) {
        this.alAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeLinkedListAllEntry = function (oldpsp) {
        this.llAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeHashSetAllEntry = function (oldpsp) {
        this.hsAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeTreeSetAllEntry = function (oldpsp) {
        this.tsAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeSkipListSetAllEntry = function (oldpsp) {
        this.slAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeArrayListOneEntry = function (oldpsp) {
        this.alOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeLinkedListOneEntry = function (oldpsp) {
        this.llOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeHashSetOneEntry = function (oldpsp) {
        this.hsOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeTreeSetOneEntry = function (oldpsp) {
        this.tsOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeSkipListSetOneEntry = function (oldpsp) {
        this.slOneData.remove(oldpsp);
    };
    AppComponent.prototype.removeHashMapEntry = function (oldsku) {
        this.hsMapData.remove(oldsku);
    };
    AppComponent.prototype.removeTreeMapEntry = function (oldsku) {
        this.tsMapData.remove(oldsku);
    };
    AppComponent.prototype.removeSkipListMapEntry = function (oldsku) {
        this.slMapData.remove(oldsku);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

var PetStoreProductSkuCollectable = (function () {
    function PetStoreProductSkuCollectable() {
    }
    PetStoreProductSkuCollectable.prototype.equals = function (instance1, instance2) {
        if (instance1 === undefined) {
            if (instance2 === undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        if (instance1 === null) {
            if (instance2 === null) {
                return true;
            }
            else {
                return false;
            }
        }
        if ((instance2 === null) || (instance2 === undefined)) {
            return false;
        }
        if (instance1.getSku() === instance2.getSku()) {
            return true;
        }
        return false;
    };
    return PetStoreProductSkuCollectable;
}());

var PetStoreProductSkuHashable = (function () {
    function PetStoreProductSkuHashable() {
    }
    PetStoreProductSkuHashable.prototype.equals = function (instance1, instance2) {
        if (instance1 === undefined) {
            if (instance2 === undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        if (instance1 === null) {
            if (instance2 === null) {
                return true;
            }
            else {
                return false;
            }
        }
        if ((instance2 === null) || (instance2 === undefined)) {
            return false;
        }
        if (instance1.getSku() === instance2.getSku()) {
            return true;
        }
        return false;
    };
    ;
    PetStoreProductSkuHashable.prototype.hashCode = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        return __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["Collections"].getHashCodeForString(o.getSku());
    };
    ;
    return PetStoreProductSkuHashable;
}());

var PetStoreProductAllFieldsComparator = (function () {
    function PetStoreProductAllFieldsComparator() {
    }
    PetStoreProductAllFieldsComparator.prototype.compare = function (o1, o2) {
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
    };
    return PetStoreProductAllFieldsComparator;
}());

var PetStoreProductSkuComparator = (function () {
    function PetStoreProductSkuComparator() {
    }
    PetStoreProductSkuComparator.prototype.compare = function (o1, o2) {
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
    };
    return PetStoreProductSkuComparator;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.


















/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
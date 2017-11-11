import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import 'rxjs/add/observable/of';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from "rxjs/Observable";
import {DataSource} from "@angular/cdk/collections";
import * as _ from "lodash";

@Component({
  selector: 'app-collect-money-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class CollectMoneyHomeComponent implements OnInit {

  animal: string;
  name: string;

  reduceByNum = false;
  reduceByPercent = false;
  showTypeList = false;
  rowFxFlex = "100%";

  reduceNumber = 0;

  public form: FormGroup;

  totalData = {
    Putotal: 0,
    tax1: 10,
    tax2: 15,
    tax3: 20,
    tax4: 25,
    total: 0
  };

  typeDatas = [
    {
      name: "菜品",
      list: [{
        name: "菜品分类1",
        list: [{
          name: "菜品1"
        }, {
          name: "菜品2"
        }, {
          name: "菜品3"
        }, {
          name: "菜品4"
        }, {
          name: "菜品5"
        }, {
          name: "菜品6"
        }]
      }, {
        name: "菜品分类2",
        list: [{
          name: "菜品1"
        }, {
          name: "菜品2"
        }, {
          name: "菜品3"
        }, {
          name: "菜品4"
        }, {
          name: "菜品5"
        }, {
          name: "菜品6"
        }]
      }, {
        name: "菜品分类3",
        list: [{
          name: "菜品1"
        }, {
          name: "菜品2"
        }, {
          name: "菜品3"
        }, {
          name: "菜品4"
        }, {
          name: "菜品5"
        }, {
          name: "菜品6"
        }]
      }, {
        name: "菜品分类4",
        list: [{
          name: "菜品1"
        }, {
          name: "菜品2"
        }, {
          name: "菜品3"
        }, {
          name: "菜品4"
        }, {
          name: "菜品5"
        }, {
          name: "菜品6"
        }]
      }, {
        name: "菜品分类5",
        list: [{
          name: "菜品1"
        }, {
          name: "菜品2"
        }, {
          name: "菜品3"
        }, {
          name: "菜品4"
        }, {
          name: "菜品5"
        }, {
          name: "菜品6"
        }]
      }, {
        name: "菜品分类6",
        list: [{
          name: "菜品1"
        }, {
          name: "菜品2"
        }, {
          name: "菜品3"
        }, {
          name: "菜品4"
        }, {
          name: "菜品5"
        }, {
          name: "菜品6"
        }]
      }]
    }, {
      name: "酒水",
      list: [{
        name: "酒水分类1",
        list: [{
          name: "酒水1"
        }, {
          name: "酒水2"
        }, {
          name: "酒水3"
        }, {
          name: "酒水4"
        }, {
          name: "酒水5"
        }, {
          name: "酒水6"
        }]
      }, {
        name: "酒水分类2",
        list: [{
          name: "酒水1"
        }, {
          name: "酒水2"
        }, {
          name: "酒水3"
        }, {
          name: "酒水4"
        }, {
          name: "酒水5"
        }, {
          name: "酒水6"
        }]
      }, {
        name: "酒水分类3",
        list: [{
          name: "酒水1"
        }, {
          name: "酒水2"
        }, {
          name: "酒水3"
        }, {
          name: "酒水4"
        }, {
          name: "酒水5"
        }, {
          name: "酒水6"
        }]
      }, {
        name: "酒水分类4",
        list: [{
          name: "酒水1"
        }, {
          name: "酒水2"
        }, {
          name: "酒水3"
        }, {
          name: "酒水4"
        }, {
          name: "酒水5"
        }, {
          name: "酒水6"
        }]
      }, {
        name: "酒水分类5",
        list: [{
          name: "酒水1"
        }, {
          name: "酒水2"
        }, {
          name: "酒水3"
        }, {
          name: "酒水4"
        }, {
          name: "酒水5"
        }, {
          name: "酒水6"
        }]
      }, {
        name: "酒水分类6",
        list: [{
          name: "酒水1"
        }, {
          name: "酒水2"
        }, {
          name: "酒水3"
        }, {
          name: "酒水4"
        }, {
          name: "酒水5"
        }, {
          name: "酒水6"
        }]
      }]
    }
  ];

  selectedType = null;

  lineNo = 0;

  ngOnInit(): void {
    this.form = this.fb.group ( {
      reduceNumber: [null]
    } );
  }

  currentTime:string = "";

  displayedColumns = ['id', 'Quantity', 'produit', 'price', 'TVA', 'HT', 'Superime', 'TTC'];
  dataSource = new ExampleDataSource();

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) {
    _.forEach(data, d => {
      d["HT"] = parseFloat(d["price"]) - parseFloat(d["price"]) * parseFloat(d["TVA"]) / 100;
      this.totalData["Putotal"] += d["HT"];
      d["TTC"] = parseFloat(d["Quantity"]) * parseFloat(d["price"]);
      this.totalData.total += d["TTC"];
    });
    this.dataSource = new ExampleDataSource();

    this.selectedType = this.typeDatas[0];

  }

  showType(sidenav, row) {
    sidenav.open();
  }

  switchType(item) {
    this.selectedType = item;
  }

  showDialog(type) {
    this.lineNo++;
    let billCode = "";
    if (type) {
      billCode = type + this.lineNo;
    }

    let dialogRef = this.dialog.open(CollectMoneyInfoDialog, {
      width: '500px',
      data: {
        billCode: billCode,
        type: type
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  deleteItem(item) {
    console.log("deleteItem");
    _.remove(data, {pkey: item.pkey});
    this.dataSource = new ExampleDataSource();
  }

  reduceToggle(type) {
    if (type === "reduceByNum") {
      if (!this.reduceByNum) {
        this.reduceByPercent = false;
      } else {
        // this.reduceByPercent = true;
      }
    }

    if (type === "reduceByPercent") {
      if (!this.reduceByPercent) {
        this.reduceByNum = false;
      } else {
        // this.reduceByNum = true;
      }
    }
  }

  enabledInputId(el) {
    el.inputId = !el.inputId;
  }

  enabledInputQuantity(el) {
    el.inputQuantity = !el.inputQuantity;
  }

  inputQuantity() {
    _.forEach(data, d => {
      d["HT"] = parseFloat(d["price"]) - parseFloat(d["price"]) * parseFloat(d["TVA"]) / 100;
      this.totalData["Putotal"] += d["HT"];
      d["TTC"] = parseFloat(d["Quantity"]) * parseFloat(d["price"]);
      this.totalData.total += d["TTC"];
    });
    if (_.isNaN(this.totalData.total)) {
      this.totalData.total = 0;
    }
    this.dataSource = new ExampleDataSource();
  }

  reduceNumberChange() {
    console.log(this.form.get("reduceNumber").value);
    if (this.form.get("reduceNumber").value < 0) {
      this.form.setValue({
        reduceNumber: 0
      });
    }
  }

}


export interface Element {
  pkey: number;
  id: string;
  Quantity: string;
  produit: string;
  price: string;
  TVA: string;
  HT: string;
  Superime: string;
  TTC: string;
  inputId: boolean;
  inputQuantity: boolean;
}

const data: Element[] = [
  {pkey: 1, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 2, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 3, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 4, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 5, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 6, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 7, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 8, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 9, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 10, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 11, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 12, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 13, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 14, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false},
  {pkey: 15, id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300', inputId: false, inputQuantity: false}
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}


@Component({
  selector: 'app-collect-money-info',
  templateUrl: './info.dialog.html',
  styleUrls: ['./home.component.scss']
})

export class CollectMoneyInfoDialog implements OnInit{

  public form: FormGroup;

  reducePrice = "1";

  displayedColumns = ['id', 'Quantity', 'produit', 'price'];
  dataSource = new ExampleDataSource();

  billCode = "";

  type = "";

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CollectMoneyInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.billCode = data.billCode;
    this.type = data.type;
  }

  ngOnInit() {

  }

  matDialogClose() {
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface infoElement {
  id: string;
  Quantity: string;
  produit: string;
  price: number;
}

const infoData: infoElement[] = [
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: 10},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: 10},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: 10},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: 10},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: 10},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: 10},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: 10},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: 10},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: 10}
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class InfoDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<infoElement[]> {
    return Observable.of(infoData);
  }

  disconnect() {}
}

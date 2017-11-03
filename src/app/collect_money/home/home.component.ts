import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import 'rxjs/add/observable/of';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from "rxjs/Observable";
import {DataSource} from "@angular/cdk/collections";

@Component({
  selector: 'app-collect-money-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class CollectMoneyHomeComponent implements OnInit {

  animal: string;
  name: string;

  ngOnInit(): void {

  }

  currentTime:string = "";

  displayedColumns = ['id', 'Quantity', 'produit', 'price', 'TVA', 'HT', 'Superime', 'TTC'];
  dataSource = new ExampleDataSource();

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) {


  }

  showDialog() {
    let dialogRef = this.dialog.open(CollectMoneyInfoDialog, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  deleteItem(item) {

  }


}


export interface Element {
  id: string;
  Quantity: string;
  produit: string;
  price: string;
  TVA: string;
  HT: string;
  Superime: string;
  TTC: string;
}

const data: Element[] = [
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'},
  {id: "a2", Quantity: "1", produit: 'Maintanance', price: "300", TVA: '10%', HT: '250', Superime: 'H', TTC: '300'}
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

  displayedColumns = ['id', 'Quantity', 'produit'];
  dataSource = new ExampleDataSource();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CollectMoneyInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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
}

const infoData: infoElement[] = [
  {id: "a2", Quantity: "1", produit: 'Maintanance'},
  {id: "a2", Quantity: "1", produit: 'Maintanance'},
  {id: "a2", Quantity: "1", produit: 'Maintanance'},
  {id: "a2", Quantity: "1", produit: 'Maintanance'},
  {id: "a2", Quantity: "1", produit: 'Maintanance'},
  {id: "a2", Quantity: "1", produit: 'Maintanance'},
  {id: "a2", Quantity: "1", produit: 'Maintanance'},
  {id: "a2", Quantity: "1", produit: 'Maintanance'},
  {id: "a2", Quantity: "1", produit: 'Maintanance'}
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

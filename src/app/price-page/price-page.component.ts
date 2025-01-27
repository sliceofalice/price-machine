import { Component, NgModule } from "@angular/core";
import { OrderListModule } from "primeng/orderlist";

@Component({
  selector: "app-price-page",
  templateUrl: "./price-page.component.html",
  styleUrls: ["./price-page.component.scss"]
})
export class PricePageComponent {
}

@NgModule({
  declarations: [PricePageComponent],
  exports: [PricePageComponent],
  imports: [OrderListModule]
})
export class PricePageModule {}

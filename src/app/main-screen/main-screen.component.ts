import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-main-screen",
  templateUrl: "./main-screen.component.html",
  styleUrls: ["./main-screen.component.scss"]
})
export class MainScreenComponent {
  title = "angular-tour-of-heroes";
}

@NgModule({
  declarations: [MainScreenComponent],
  imports: [],
  providers: [],
})
export class MainScreenModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

// Service Imports
import { DishService } from "./services/dish.service";
import { PostService } from "./services/post.service";

// Pipe Imports
import { ReversetextPipe } from "./pipes/reversetext.pipe";
import { TruncatetextPipe } from "./pipes/truncatetext.pipe";

// Component Imports
import { AppComponent } from './app.component';
import { BlogComponent } from "./components/blog/blog.component";
import { ChildComponent } from "./components/child/child.component";
import { ParentComponent } from "./components/parent/parent.component";
import { PipedemoComponent } from "./components/pipedemo/pipedemo.component";
import { SiblingComponent } from "./components/sibling/sibling.component";
import { CapitalizetextPipe } from './pipes/capitalizetext.pipe';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ChildComponent,
    ParentComponent,
    PipedemoComponent,
    SiblingComponent,
    ReversetextPipe,
    TruncatetextPipe,
    CapitalizetextPipe,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DishService,
    TruncatetextPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TheRoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchGetService } from './services/search-get.service';
import { RegisterPostService } from './services/register-post.service';
import { AuthenticateService } from './services/authenticate.service';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileService } from './services/profile.service';
import { PositionsService } from './services/positions.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FooterComponent } from './footer/footer.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AppliedComponent } from './applied/applied.component';
import { ResumesComponent } from './resumes/resumes.component';
import { CoverLettersComponent } from './cover-letters/cover-letters.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { UpgradingComponent } from './upgrading/upgrading.component';
import { UpgradeSuccessComponent } from './upgrade-success/upgrade-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchResultsComponent,
    LoginComponent,
    RegisterComponent,
    CandidateDashboardComponent,
    SinglePostComponent,
    FooterComponent,
    EmployerDashboardComponent,
    ProfileComponent,
    AppliedComponent,
    ResumesComponent,
    CoverLettersComponent,
    PostedJobsComponent,
    CandidatesComponent,
    PaymentInfoComponent,
    UpgradingComponent,
    UpgradeSuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TheRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  providers: [SearchGetService, RegisterPostService, AuthenticateService, AuthGuard, NotAuthGuard, ProfileService, PositionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

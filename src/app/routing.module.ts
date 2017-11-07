import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
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
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';

const theRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchResultsComponent
    },
    {
        path: 'search/:search/:city/:state',
        component: SearchResultsComponent
    },
    {
        path: 'displayposition/:id',
        component: SinglePostComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: 'cdashboard',
        component: CandidateDashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full'},
            { path: 'profile', component: ProfileComponent },
            { path: 'applied', component: AppliedComponent },
            { path: 'resumes', component: ResumesComponent },
            { path: 'coverletters', component: CoverLettersComponent }
        ]
    },
    {
        path: 'edashboard',
        component: EmployerDashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full'},
            { path: 'profile', component: ProfileComponent },
            { path: 'postedjobs', component: PostedJobsComponent },
            { path: 'candidates', component: CandidatesComponent },
            { path: 'paymentinfo', component: PaymentInfoComponent }
        ]
    },
    {
        path: 'upgrade',
        component: UpgradingComponent
    },
    {
        path: 'upgradesuccess',
        component: UpgradeSuccessComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(theRoutes) ],
    exports: [ RouterModule ]
})

export class TheRoutingModule {}
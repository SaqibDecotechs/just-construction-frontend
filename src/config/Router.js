
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import MeetTheTeam from '../pages/meetTheTeam/MeetTheTeam'
import ForgetPassword from '../pages/forgetPassword/ForgetPassword'
import AllJobs from '../pages/allJobs/AllJobs'
import JobApplication from '../pages/jobApplication/JobApplication'
import CSR from '../pages/csr/CSR'
import CandidateCommitment from '../pages/candidateCommitment/CandidateCommitment'
import SubmitCV from '../pages/submitCV/SubmitCV'
import JobAlerts from '../pages/jobAlerts/JobAlerts'
import JoinUs from '../pages/joinUs/JoinUs'
import OurServices from '../pages/ourServices/OurServices'
import ContactUs from '../pages/Contact/Contact'
import CaseStudies from '../pages/CaseStudies/CaseStudies'
import GdprCompliance from '../pages/gdpr/GdprCompliance'

function Router() {
  return (
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/all-jobs" element={<AllJobs />} />
            <Route path="/job/:jobId/apply" element={<JobApplication />} />
            <Route path="/diversity-csr" element={<CSR />} />
            <Route path="/candidate-commitment" element={<CandidateCommitment />} />
            <Route path="/submit-cv" element={<SubmitCV />} />
            <Route path="/job-alerts" element={<JobAlerts />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/gdpr-compliance" element={<GdprCompliance />} />

          {/* <Route element={<PublicWrapper />}>
            <Route path="*" element={<Login />} />
          </Route> */} 
        
      
        </Routes>
      </BrowserRouter>
  )
}

export default Router

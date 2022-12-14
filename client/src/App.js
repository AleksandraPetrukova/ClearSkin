import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header"
import Homepage from "./components/Homepage";
import Review from "./components/Review";
import Profile from "./components/Profile";
import MakeReview from "./components/MakeReview";
import MatchedSug from "./components/MatchedSug";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import ThankYou from "./components/ThankYou";
import DeleteSuccess from "./components/DeleteSuccess";
import UpdateReview from "./components/UpdateReview";
import UpdateSuccess from "./components/UpdateSuccess";
import AllReviews from "./components/AllReviews";

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Header/>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/review/:reviewId" element={<Review/>}/>
          <Route path="/profile/:handle" element={<Profile/>}/>
          <Route path="/createreview" element={<MakeReview/>}/>
          <Route path="/matchedsuggestions" element={<MatchedSug/>}/>
          <Route path="/thankyou" element={<ThankYou/>}/>
          <Route path="/deletesuccess" element={<DeleteSuccess/>}/>
          <Route path="/updatereview/:reviewId" element={<UpdateReview/>}/>
          <Route path="/successfulupdate" element={<UpdateSuccess/>}/>
          <Route path="/allreviews" element={<AllReviews/>}/>
        </Routes>
      </Wrapper>
      <Footer/>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  
  
`
export default App;

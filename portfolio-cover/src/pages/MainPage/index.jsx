import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import SectionIntro from './SectionIntro';
import SectionContent from './SectionContent';
import './index.css';

function MainPage() {
  return (
    <div className='page-main'>
      {/* header */}
      <Header />

      {/* intro section */}
      <SectionIntro />

      {/* content container */}
      <SectionContent />
      
      {/* footer */}
      <Footer />
    </div>
  )
}

export default MainPage

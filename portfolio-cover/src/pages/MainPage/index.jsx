import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import MainSection from '../../components/MainSection';
import Label from '../../components/Label';
import MoreBtn from '../../components/Buttons/MoreBtn';
import ProjectItem from '../../components/ProjectItem';
import './index.css';

const mySkills = ['HTML', 'CSS', 'jQuery', 'javascript'];
const experiencedSkills = ['react.js', 'Vue.js', 'SASS/SCSS', 'Gsap'];

const projects = [
  {
    title: "Name1",
    description: "어쩌구저쩌구",
    imageSrc: "/src/assets/dummy-img.jpg",
  },
  {
    title: "Name2",
    description: "Name2 설명",
    imageSrc: "/src/assets/dummy-img2.jpg",
  },
  {
    title: "Name3",
    description: "이 프로젝트는...",
    imageSrc: "/src/assets/dummy-img3.jpg",
  }
];

function MainPage() {
  return (
    <div className='page-main'>
      {/* header */}
      <Header />

      {/* intro section */}
      <div className='section-intro'>
        <div className='inner'>
          <h1>about <strong>&lt;EESEUL /&gt;</strong></h1>
          <div className="scroll-down">
            <p>Scroll Down</p>
            <i></i>
          </div>
        </div>
      </div>

      {/* content container */}
      <div className="content-container">
        <div className="inner">

          {/* side bar */}
          <SideBar />

          <div className="sections-wrap">
            
            {/* about section */}
            <section id='section-about' className='section-about'>
              <div className="img-wrap">
                <img src="/src/assets/profile-img.png" alt="프로필이미지" />
              </div>
              <div className='content-wrap'>
                <MainSection>
                  <h3 className='section-title'>ABOUT : <strong>EESEUL</strong></h3>
                  <div className='section-desc'>
                    <p>안녕하세요. 내용을 채워야합니다.</p>
                    <p>내용을 채울 것 입니다.</p>
                  </div>
                </MainSection>
                <MainSection>
                  <h3 className='section-title'>CAN I HANDLE : <strong>SKILLS</strong></h3>
                  <div className='section-desc'>
                    <p>
                      {mySkills.map((skill, index) => (
                          <Label key={index}>{skill}</Label>
                        ))}
                      을 편하게 사용합니다.
                    </p>
                    <p>
                      {experiencedSkills.map((skill, index) => (
                          <Label key={index}>{skill}</Label>
                        ))}
                      을 사용하여 개인 프로젝트를 완성해 본 경험이 있어요.
                    </p>
                    <p>현재 직장에서 <Label>git</Label>을 이용하여 동료들과 협업하고 있습니다.</p>
                  </div>
                </MainSection>
              </div>
            </section>

            {/* project section */}
            <section id='section-project' className='section-project'>
              <MainSection>
                <div className="section-title-wrap">
                  <h3 className='section-title'>WORK EXPERIENCE</h3>
                  <MoreBtn>#none</MoreBtn>
                </div>
                <div className='section-content'>
                  {projects.map((project, index) => (
                    <ProjectItem
                      key={index}
                      title={project.title}
                      description={project.description}
                      imageSrc={project.imageSrc}
                    />
                  ))}
                </div>
              </MainSection>
            </section>
            
            {/* post section */}
            <section id='section-post' className='section-post'></section>
            
            {/* contact section */}
            <section id='section-contact' className='section-contact'></section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage

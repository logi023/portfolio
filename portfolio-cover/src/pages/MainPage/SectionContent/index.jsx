import SideBar from '../../../Layout/SideBar';
import ContentContainer from '../../../components/ContentContainer';
import Label from '../../../components/Label';
import MoreBtn from '../../../components/Buttons/MoreBtn';
import ProjectItem from '../../../components/ProjectItem';
import PostItem from '../../../components/PostItem';
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
const postItems = [
  {
    linkUrl: '',
    title: '포스트 제목1',
    desc: '포스트 설명1 포스트 설명1 포스트 설명1 포스트 설명1 포스트 설명1 포스트 설명1 포스트 설명1 포스트 설명1 포스트 설명1 포스트 설명1',
    imgUrl: "/src/assets/dummy-img.jpg",
  },
  {
    linkUrl: '',
    title: '포스트 제목2',
    desc: '포스트 설명2',
    imgUrl: '2',
  },
]

function SectionContent() {
  return (
    <div className="section-content">
      <div className="inner">

        {/* side bar */}
        <SideBar />

        <div className="content-side">
          
          {/* about section */}
          <section id='section-about' className='main-section__about'>
            <div className="img-wrap">
              <img src="/src/assets/profile-img.png" alt="프로필이미지" />
            </div>
            <div className='content-wrap'>
              <ContentContainer>
                <h3 className='section-title'>ABOUT : <strong>EESEUL</strong></h3>
                <div className='section-desc'>
                  <p>안녕하세요. 내용을 채워야합니다.</p>
                  <p>내용을 채울 것 입니다.</p>
                </div>
              </ContentContainer>
              <ContentContainer>
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
              </ContentContainer>
            </div>
          </section>

          {/* project section */}
          <section id='section-project' className='main-section__project'>
            <ContentContainer>
              <div className="section-title-wrap">
                <h3 className='section-title'>WORK EXPERIENCE</h3>
                <MoreBtn>#none</MoreBtn>
              </div>
              <div className='section-content-wrap'>
                {projects.map((project, index) => (
                  <ProjectItem
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                  />
                ))}
              </div>
            </ContentContainer>
          </section>
          
          {/* post section */}
          <section id='section-post' className='main-section__post'>
            <ContentContainer>
                <div className="section-title-wrap">
                  <h3 className='section-title'>RECENT INTERESTS</h3>
                  <MoreBtn>#none</MoreBtn>
                </div>
                <div className='section-content-wrap'>
                  {postItems.map((post, index) => (
                    <PostItem 
                      key={index}
                      linkUrl={post.linkUrl}
                      imgUrl={post.imgUrl}
                      title={post.title}
                      desc={post.desc}
                    />
                  ))}
                </div>
            </ContentContainer>
          </section>
          
          {/* contact section */}
          <section id='section-contact' className='main-section__contact'></section>
        </div>
      </div>
    </div>
  )
}

export default SectionContent

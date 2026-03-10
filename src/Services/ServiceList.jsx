import gsap from 'gsap'
import { useEffect, useState, useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FiPlus, FiX, FiExternalLink, FiYoutube } from 'react-icons/fi'
import { FaYoutube, FaLink } from 'react-icons/fa'
import service1 from '../assets/storiesforchange.jpg'
import service2 from '../assets/lgbtq.jpg'
import service3 from '../assets/peaceconnect.jpg'
import service4 from '../assets/artlord.jpg'
import service5 from '../assets/democracy.jpg'
import service6 from '../assets/problem with Partnership.jpg'
import service7 from '../assets/TooSoutherntobefunded.png'
// import service3 from ''
// import service4 from ''
// import service5 from ''
// import service6 from ''
import './Service.css'

const ServiceList = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const previewRef = useRef(null)
  const cursorRef = useRef(null)
  const listRef = useRef(null)

  // Enhanced project data with links
  const projectData = {
    0: {
      title: "Stories for Change",
      description: "Freedom Studio collaborated with Stories for Change on several key areas, including branding, website development, video editing, and social media promotion. Through this partnership, Freedom Studio helped strengthen the organization's digital presence and effectively communicate its mission to a wider audience.",
      link: "https://stories.shiftthepower.org/", 
      linkType: "website",
      linkText: "Visit Website"
    },
    1: {
      title: "Partnership with Power of Pride",
      description: "Freedom Studio's partnership with the Power of Pride consortium reflects our commitment to strengthening LGBTIQ+ communities and movements. We collaborated with CoP members to deliver a comprehensive Workbook and Animated Explainer Video empowering organizations with innovative tools for resilience, justice, and lasting inclusion.",
      link: "https://youtube.com/watch?v=example1", 
      linkType: "youtube",
      linkText: "Watch Video"
    },
    2: {
      title: "Peace Connect Content Production",
      description: "Freedom Studio worked with Peace Direct to promote their Peace Connect event in Nairobi, Kenya. We created social media content ahead of the event to spread the word and get people excited. We also animated the Peace Connect campaign logo, giving the global campaign a strong and memorable visual identity.",
      link: "https://youtube.com/watch?v=example2", 
      linkType: "youtube",
      linkText: "Watch Video"
    },
    3: {
      title: "ArtLords' Website",
      description: "Freedom Studio is currently working on the website development for Artlord. The project focuses on creating a modern, user-friendly platform that will effectively showcase Artlord's work",
      link: "https://artlord.org", 
      linkType: "website",
      linkText: "Visit Website"
    },
    4: {
      title: "Democracy Future Projects's Website",
      description: "Freedom Studio is currently working on the website development for the Democratic Future Project, focusing on building a modern and user-friendly platform that effectively presents the project's goals, activities, and impact..",
      link: "https://democraticfuture.org", 
      linkType: "website",
      linkText: "Visit Website"
    },
    5: {
      title: "Problem with Partnership",
      description: "Podcast: Developed by Peace Direct, The Problem with Partnership is a podcast series exploring the complexities, contradictions, and power imbalances in international peacebuilding partnerships. It centers the voices of local peacebuilders who challenge the status quo and offer grounded insights on how to build truly equitable collaboration. Freedom Studio provided post-production support by editing the podcast episodes, refining the narrative flow, and ensuring high-quality sound for wide accessibility. Our contribution helped bring clarity, emotional resonance, and polish to a powerful series amplifying voices often unheard in the global peacebuilding space.",
      link: "https://www.peacedirect.org/the-problem-with-partnerships-podcast-series/", 
      linkType: "youtube",
      linkText: "Listen to Podcast"
    },
    6: {
      title: "Too Southern To Be Funded",
      description: "Led by the Global Fund for Community Foundations, Too Southern to Be Funded is a campaign that challenged the exclusion of Global South civil society from international funding systems. The campaign calls for radical shifts in philanthropy and development. Freedom Studio collaborated closely with the GFCF team to develop the animated explainer video, campaign design, and original illustrations for this campaign. We translated complex funding critique into an engaging visual narrative that was accessible, shareable, and emotionally compelling.",
      link: "https://youtube.com/watch?v=example4", 
      linkType: "youtube",
      linkText: "Watch Video"
    }
  }

  const handleProjectClick = (index, e) => {
    e.preventDefault()
    setSelectedProject(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const handleLinkClick = (e, link) => {
    e.stopPropagation()
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Initial animation for project items
      gsap.from('.project__item', {
        scrollTrigger: {
          trigger: '.projects__row',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      })

      const isTouch = matchMedia('(hover: none)').matches
      if (isTouch) return

      const preview = document.querySelector('.project-modal__preview')
      const cursor = document.querySelector('.project-modal__cursor')
      const list = document.querySelector('.project-modal__list')
      const projects = document.querySelectorAll('.project__item')
      const container = document.querySelector('.projects__row.project')

      if (!preview || !cursor || !list || !projects.length || !container) {
        console.log('Elements not found:', { preview, cursor, list, projects, container })
        return
      }

      let isInside = false
      let lastX = 0
      let lastY = 0

      // Initialize with scale 0
      gsap.set([cursor, preview], { scale: 0 })

      const onMove = e => {
        const { clientX, clientY } = e
        lastX = clientX
        lastY = clientY
        
        const cursorSize = cursor.offsetWidth
        const previewWidth = preview.offsetWidth
        const previewHeight = preview.offsetHeight

        gsap.to(cursor, {
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
          duration: 0.2,
          ease: 'power2.out'
        })

        gsap.to(preview, {
          x: clientX - previewWidth / 2,
          y: clientY - previewHeight / 2,
          duration: 0.4,
          ease: 'power2.out'
        })
      }

      window.addEventListener('mousemove', onMove)

      projects.forEach(project => {
        const index = Number(project.dataset.index)
        
        if (isNaN(index)) return

        project.addEventListener('mouseenter', () => {
          if (!isInside) {
            gsap.to([cursor, preview], { 
              scale: 1, 
              duration: 0.4,
              ease: 'power2.out'
            })
            isInside = true
          }

          // Calculate the yPercent based on index
          const yPercent = -index * 100
          
          gsap.to(list, {
            yPercent: yPercent,
            duration: 0.6,
            ease: 'power2.inOut'
          })
        })
      })

      container.addEventListener('mouseleave', () => {
        gsap.to([cursor, preview], { 
          scale: 0, 
          duration: 0.3,
          ease: 'power2.in'
        })
        isInside = false
      })

      // Cleanup function
      return () => {
        window.removeEventListener('mousemove', onMove)
      }
    })

    return () => ctx.revert()
  }, [])


  return (
    <div className='md:pt-20 pt-10 px-10 space-y-5 bg-[#040707] min-h-screen'>
       <h2 className='md:text-3xl text-2xl font-bold uppercase text-white font-droid'>(Services)</h2> 
       <section className='bg-[#008080]/40 p-10 rounded-md'>
     
        <div className="projects ">
   <div className="projects__container">
      <div className="projects__row project">
         <a className="project__item" data-index="0" href="#" onClick={(e) => handleProjectClick(0, e)}>
            <div className="project__inner">
                <div className='project__title'>
               <h1 className="font-droid">Stories for Change</h1>
               </div>
               <span className="project__desc">
                 <FiPlus className="plus-icon" />
               </span>
            </div>
         </a>
         <a className="project__item" data-index="1" href="#" onClick={(e) => handleProjectClick(1, e)}>
            <div className="project__inner">
                <div className='project__title'>
               <h1 className="font-droid">Partnership with Power of Pride</h1>
               </div>
               <span className="project__desc">
                 <FiPlus className="plus-icon" />
               </span>
            </div>
         </a>
         <a className="project__item" data-index="2" href="#" onClick={(e) => handleProjectClick(2, e)}>
            <div className="project__inner">
                <div className='project__title'>
               <h1 className="font-droid">Peace Connect Content Production</h1>
                 </div>
               <span className="project__desc">
                 <FiPlus className="plus-icon" />
               </span>
            </div>
         </a>
          <a className="project__item" data-index="3" href="#" onClick={(e) => handleProjectClick(3, e)}>
            <div className="project__inner">
                <div className='project__title'>
               <h1 className="font-droid">ArtLords' Website</h1>
                 </div>
               <span className="project__desc">
                 <FiPlus className="plus-icon" />
               </span>
            </div>
         </a>
          <a className="project__item" data-index="4" href="#" onClick={(e) => handleProjectClick(4, e)}>
            <div className="project__inner">
                <div className='project__title'>
               <h1 className="font-droid">Democracy Future Projects's Website</h1>
                 </div>
               <span className="project__desc">
                 <FiPlus className="plus-icon" />
               </span>
            </div>
         </a>
         
         <a className="project__item" data-index="5" href="#" onClick={(e) => handleProjectClick(5, e)}>
            <div className="project__inner">
                <div className='project__title'>
               <h1 className="font-droid">Problem with Partnership</h1>
                 </div>
               <span className="project__desc">
                 <FiPlus className="plus-icon" />
               </span>
            </div>
         </a>
          <a className="project__item" data-index="6" href="#" onClick={(e) => handleProjectClick(6, e)}>
            <div className="project__inner">
                <div className='project__title'>
               <h1 className="font-droid">Too Southern To Be Funded</h1>
                 </div>
               <span className="project__desc">
                 <FiPlus className="plus-icon" />
               </span>
            </div>
         </a>
      </div>
   </div>
</div>

{/* Preview Modal - Make sure these elements exist */}
<div className="project-modal">
   <div className="project-modal__cursor" style={{ scale: 0 }}>
     <p>View</p>
   </div>
   <div className="project-modal__preview" style={{ scale: 0 }}>
      <div className="project-modal__list">
         <div className="project-modal__item">
            <img src={service1} alt="Service 1"/>
         </div>
         <div className="project-modal__item">
            <img src={service2} alt="Service 2"/>
         </div>
         <div className="project-modal__item">
            <img src={service3} alt="Service 3"/>
         </div>
          <div className="project-modal__item">
            <img src={service4} alt="Service 4"/>
         </div>
          <div className="project-modal__item">
            <img src={service5} alt="Service 5"/>
         </div>
          <div className="project-modal__item">
            <img src={service6} alt="Service 6"/>
         </div>
          <div className="project-modal__item">
            <img src={service7} alt="Service 7"/>
         </div>
      </div>
   </div>
</div>

{/* Description Modal with Links */}
{isModalOpen && selectedProject !== null && (
  <div className="description-modal-overlay" onClick={closeModal}>
    <div className="description-modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-modal-btn" onClick={closeModal}>
        <FiX />
      </button>
      
      <div className="modal-content-wrapper">
        <h3 className="description-modal-title">
          {projectData[selectedProject].title}
        </h3>
        
        <p className="description-modal-text">
          {projectData[selectedProject].description}
        </p>
        
        {/* Link Button */}
        <div className="modal-link-container">
          <button 
            className={`modal-link-btn ${projectData[selectedProject].linkType}`}
            onClick={(e) => handleLinkClick(e, projectData[selectedProject].link)}
          >
            {projectData[selectedProject].linkType === 'youtube' ? (
              <>
                <FaYoutube className="link-icon" />
                <span>{projectData[selectedProject].linkText}</span>
              </>
            ) : (
              <>
                <FaLink className="link-icon" />
                <span>{projectData[selectedProject].linkText}</span>
              </>
            )}
            <FiExternalLink className="external-icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
)}
</section>

    </div>
  )
}

export default ServiceList
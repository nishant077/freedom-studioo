import React from 'react';
import Navbar from '../Navigation/Navbar';
import projectheading from '../assets/Institution.jpeg';
import { IoArrowDownOutline  } from "react-icons/io5";
import Annupam from '../assets/Gallery6.jpeg';
import Artivism from '../assets/Artivism Fellowship.jpg';
import Artivism1 from '../assets/Gallery20.jpeg';
import HumanRights from '../assets/HumanRights.jpeg';
import Problem from '../assets/problem with Partnership.jpg';
import TooSouthern from '../assets/TooSoutherntobefunded.png';
import Information from '../assets/Gallery15.jpeg';
import Footer from '../component/Footer';


const Project = () => {
 

  return (
    <>
      <div className='bg-black h-screen overflow-y-hidden'>
        <Navbar/>
        <div className='flex justify-center items-center pt-36 ml-10'>
          <img src={projectheading} className='w-[900px] h-[500px] object-cover box-border rounded-[2vw] relative'/>
          <div className='absolute left-28'>
            <h1 className='font-droid text-7xl text-white'>PRO<span className='text-[#9a1d20] font-droid'>J</span>ECTS</h1>
            <p className='text-xs text-white absolute w-40 text-justify mt-5 opacity-60'>
              This project focuses on understanding and applying various multimedia elements text, audio, images, video, and animation to create engaging and interactive digital content. It explores how multimedia enhances communication, education, entertainment, and marketing.
            </p>
          </div>
        </div>
        <div className='flex justify-around text-white mt-10 text-xs opacity-60'>
          <div>
            <ul>
              <li className=''>ANUPAM CAMPAIGN</li>
              <li className=''>ARTIVISM WORKSHOP</li>
              <li className=''>ARTIVISM FELLOWSHIP</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className=''>INFORMATION MANIPULATION</li>
              <li className=''>HUMAN RIGHTS ART FESTIVAL</li>
              <li className=''>PROBLEM WITH PARTNERSHIP' -PODCAST</li>
              <li className=''>TOO SOUTHERN TO BE FUNDED</li>
            </ul>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-white border-2 cursor-pointer">
            <IoArrowDownOutline color="white" size={24} />
          </div>
        </div>
      </div>

      {/* <div className='relative h-screen bg-white'>
        <div 
          className='nextSection absolute flex justify-center items-center'
        >
          <div className='flex  w-full max-w-[1200px] mx-auto'>
            <div className='space-y-2 w-[40%]'>
              <h2 className='font-droid text-[10vw] tracking-normal uppercase text-neutral-200 leading-none'>01</h2>
            </div>
            
            <div className='w-[50%] relative'>
              <img 
                src={working2} 
                className='w-full h-auto max-h-[500px] object-cover rounded-[2vw] '
              />
            </div>
            <div className='absolute right-0 mt-20'>
               <h3 className='font-droid text-3xl'>ANUPAM CAMPAIGN</h3>
              <p className='text-sm text-justify w-60'>
                The Anupam Campaign is a powerful nationwide initiative advancing women's political
                leadership and feminist discourse across Nepal. Through regional bus caravans,
                storytelling, and grassroots mobilization, the campaign built momentum for change.
                Freedom Studio led the campaign's creative direction part, developing a full visual
                identity, branding toolkit, and materials for public engagement like banners, stickers,
                and merchandise. For last two years, we facilitated artivism workshops, produced 100+
                video interviews, and managed the digital storytelling strategy including a podcast
                series and several documentaries. Our work helped visually and strategically unify the
                campaign while uplifting the voices of women on the frontlines.
              </p>
              </div>
          </div>
        </div>
      </div> */}

      {/* for 01 */}
       <div className='py-20 px-20 h-auto '>
        <div className='flex justify-around'>
       <h2 className='font-droid text-[10vw] tracking-normal uppercase text-neutral-200 leading-none flex justify-center items-center'>01</h2>
       <div className='w-[45%]'>
              <img
                src={Annupam} 
                className='w-full h-auto max-h-[500px] object-cover rounded-[2vw] relative'
              />
            </div>
            <div>
            <h3 className='font-droid text-2xl mt-10'>ANUPAM CAMPAIGN</h3>
              <p className='text-sm text-justify w-96 mt-2'>
                The Anupam Campaign is a powerful nationwide initiative advancing women's political
                leadership and feminist discourse across Nepal. Through regional bus caravans,
                storytelling, and grassroots mobilization, the campaign built momentum for change.
                Freedom Studio led the campaign's creative direction part, developing a full visual
                identity, branding toolkit, and materials for public engagement like banners, stickers,
                and merchandise. For last two years, we facilitated artivism workshops, produced 100+
                video interviews, and managed the digital storytelling strategy including a podcast
                series and several documentaries. Our work helped visually and strategically unify the
                campaign while uplifting the voices of women on the frontlines.
              </p>
            </div>
            
            </div>
       </div>
         {/* for 02 */}
       <div className='py-20 px-20 h-auto '>
        <div className='flex justify-around'>
    
            <div>
            <h3 className='font-droid text-2xl mt-10'>ARTIVISM WORKSHOP</h3>
              <p className='text-sm text-justify w-96 mt-2'>
              The Artivism Workshop is a dynamic space for young changemakers to harness the power of
art for activism. We have conducted Artivism Workshop in both international spaces like Berlin,
Milan, London, New York, Guatemala City, Johannesburg, and Nairobi. This workshop equips
participants with practical tools to create canvas art, music, and installations rooted in social
justice themes. Freedom Studio team member facilitates the full workshop by introducing key
concepts of artivism, guiding hands-on creation, and leading critical reflection sessions.
              </p>
            </div>
            <div className='w-[45%]'>
              <img
                src={Artivism1} 
                className='w-full h-auto max-h-[500px] object-cover rounded-[2vw] relative'
              />
            </div>
            <h2 className='font-droid text-[10vw] tracking-normal uppercase text-neutral-200 leading-none flex justify-center items-center'>02</h2>
            </div>
       </div>
         {/* for 03 */}
       <div className='py-20 px-20 h-auto '>
        <div className='flex justify-around'>
       <h2 className='font-droid text-[10vw] tracking-normal uppercase text-neutral-200 leading-none flex justify-center items-center'>03</h2>
       <div className='w-[45%]'>
              <img
                src={Artivism} 
                className='w-full h-auto max-h-[500px] object-cover rounded-[2vw] relative'
              />
            </div>
            <div>
            <h3 className='font-droid text-2xl mt-10'>ARTIVISM FELLOWSHIP</h3>
              <p className='text-sm text-justify w-96 mt-2'>
              The Artivism Fellowship is a short-term creative engagement program for artists, mediamakers, and activists working on pressing social issues such as climate change, LGBTQI+
rights, political rights and community resilience. Freedom Studio has worked with multiple
partners like USAID, National Endowment for Democracy, International Republican Institute to
design and implement the fellowship program. Some of the activities include residential
training on strategic thinking, technical capacity building training, continuous mentorship and
peer learning. Previously, fellows worked on individual and collaborative projects, and explored
new creative movement building strategy. Fellowship approach centered on nurturing
leadership, expanding imagination, and strengthening the civic space through art-based
activism.
              </p>
            </div>
            
            </div>
       </div>
         {/* for 04 */}
       <div className='py-20 px-20 h-auto '>
        <div className='flex justify-around'>
       <h2 className='font-droid text-[10vw] tracking-normal uppercase text-neutral-200 leading-none flex justify-center items-center'>04</h2>
       <div className='w-[45%]'>
              <img
                src={Information} 
                className='w-full h-auto max-h-[500px] object-cover rounded-[2vw] relative'
              />
            </div>
            <div>
            <h3 className='font-droid text-2xl mt-10'>INFORMATION MANIPULATION</h3> 
              <p className='text-sm text-justify w-96 mt-2'>
              This campaign tackled the urgent issue of digital mis/disinformation by engaging youth artists
and influencers to produce creative content that challenges harmful narratives. Freedom
Studio designed and facilitated a residential artivism workshop where 12 digital artists created
digital content, including illustrations, photo stories, and interviews. We also launched a multiplatform social media campaign that reached over 40,000 people through both virtual
outreach and physical screening including an open exhibition.
              </p>
            </div>
            
            </div>
       </div>
         {/* for 05 */}
       <div className='py-20 px-20 h-auto '>
        <div className='flex justify-around'>
       <h2 className='font-droid text-[10vw] tracking-normal uppercase text-neutral-200 leading-none flex justify-center items-center'>05</h2>
       <div className='w-[45%]'>
              <img
                src={HumanRights} 
                className='w-full h-auto max-h-[500px] object-cover rounded-[2vw] relative'
              />
            </div>
            <div>
            <h3 className='font-droid text-2xl mt-10'>HUMAN RIGHTS ART FESTIVAL</h3>
              <p className='text-sm text-justify w-96 mt-2'>
              Annual event organized on December 10, the Human Rights Art Festival brings together
hundreds of youth to express themes of dignity, freedom, and justice through art, music,
dance, and poetry. Freedom Studio usually co-led the design and facilitation of the event,
curating performances and interactive stalls that reflected culture and resistance. We also
support storytelling and media documentation, creating a vibrant platform where young artists
could connect with civic leaders and share their vision for a more just society. The festival
highlights art’s power to inform, inspire, and activate.
              </p>
            </div>
            
            </div>
       </div>

         {/* for 06 */}
       <div className='py-20 px-20 h-auto '>
        <div className='flex justify-around'>
       <h2 className='font-droid text-[10vw] tracking-normal uppercase text-neutral-200 leading-none flex justify-center items-center'>06</h2>
       <div className='w-[45%]'>
              <img
                src={Problem} 
                className='w-full h-auto max-h-[500px] object-cover rounded-[2vw] relative'
              />
            </div>
            <div>
            <h3 className='font-droid text-2xl mt-10'>PROBLEM WITH PARTNERSHIP</h3>
              <p className='text-sm text-justify w-96 mt-2'>
              Developed by Peace Direct, The Problem with Partnership is a podcast series exploring the
complexities, contradictions, and power imbalances in international peacebuilding
partnerships. It centers the voices of local peacebuilders who challenge the status quo and
offer grounded insights on how to build truly equitable collaboration. Freedom Studio
provided post-production support by editing the podcast episodes, refining the narrative flow,
and ensuring high-quality sound for wide accessibility. Our contribution helped bring clarity,
emotional resonance, and polish to a powerful series amplifying voices often unheard in the
global peacebuilding space.
              </p>
            </div>
            
            </div>
       </div>
       

          {/* for 07 */}
       <div className='py-20 px-20 h-auto '>
        <div className='flex justify-around'>
       <h2 className='font-droid text-[10vw] tracking-normal uppercase text-neutral-200 leading-none flex justify-center items-center'>07</h2>
       <div className='w-[45%]'>
              <img
                src={TooSouthern} 
                className='w-full h-auto max-h-[500px] object-cover rounded-[2vw] relative'
              />
            </div>
            <div>
            <h3 className='font-droid text-2xl mt-10'>TOO SOUTHERN TO BE FUNDED</h3>
              <p className='text-sm text-justify w-96 mt-2'>
              Led by the Global Fund for Community Foundations, Too Southern to Be Funded is a
campaign that challenged the exclusion of Global South civil society from international
funding systems. The campaign calls for radical shifts in philanthropy and development.
Freedom Studio collaborated closely with the GFCF team to develop the animated explainer
video, campaign design, and original illustrations for this campaign. We translated complex
funding critique into an engaging visual narrative that was accessible, shareable, and
emotionally compelling.
              </p>
            </div>
            
            </div>
       </div>

       <Footer/>

    </>
  );
};

export default Project;
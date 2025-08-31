import React from 'react';
import Navbar from '../Navigation/Navbar';
import projectheading from '../assets/Institution.jpeg';
import { IoArrowDownOutline } from "react-icons/io5";
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
      {/* Hero Section */}
      <div className='bg-black h-auto md:h-[90vh] lg:h-screen overflow-y-hidden'>
        <Navbar />
        <div className='flex justify-center items-center pt-20 md:pt-24 lg:pt-36 px-4 md:px-10 lg:ml-10'>
          <img 
            src={projectheading} 
            className='w-full md:w-[80vw] lg:w-[900px] h-[50vh] md:h-[60vh] lg:h-[500px] object-cover box-border rounded-[2vw] relative'
            alt="Project heading"
          />
          <div className='absolute left-4 md:left-10 lg:left-28'>
            <h1 className='font-droid text-4xl md:text-5xl lg:text-7xl text-white'>PRO<span className='text-[#9a1d20] font-droid'>J</span>ECTS</h1>
          </div>
        </div>
        <div className='flex justify-center text-white mt-4 md:mt-10 text-xs opacity-60'>
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-white border cursor-pointer md:border-2">
            <IoArrowDownOutline color="white" size={18} md:size={24} />
          </div>
        </div>
      </div>

      {/* Project Sections */}
      {/* Project 01 */}
      <div className='py-10 md:py-20 px-4 md:px-20 h-auto'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
          <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[10vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>01</h2>
          <div className='w-full lg:w-[45%] order-2'>
            <img
              src={Annupam}
              className='w-full h-auto max-h-[500px] object-cover rounded-[2vw]'
              alt="Anupam Campaign"
            />
          </div>
          <div className='w-full lg:w-[30%] order-3'>
            <h3 className='font-droid text-xl md:text-2xl mt-4 md:mt-10'>ANUPAM CAMPAIGN</h3>
            <p className='text-sm text-justify mt-2'>
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

      {/* Project 02 */}
      <div className='py-10 md:py-20 px-4 md:px-20 h-auto bg-gray-50'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
          <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[10vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>02</h2>
          <div className='w-full lg:w-[45%] order-2'>
            <img
              src={Artivism1}
              className='w-full h-auto max-h-[500px] object-cover rounded-[2vw]'
              alt="Artivism Workshop"
            />
          </div>
          <div className='w-full lg:w-[30%] order-3'>
            <h3 className='font-droid text-xl md:text-2xl mt-4 md:mt-10'>ARTIVISM WORKSHOP</h3>
            <p className='text-sm text-justify mt-2'>
              The Artivism Workshop is a dynamic space for young changemakers to harness the power of
              art for activism. We have conducted Artivism Workshop in both international spaces like Berlin,
              Milan, London, New York, Guatemala City, Johannesburg, and Nairobi. This workshop equips
              participants with practical tools to create canvas art, music, and installations rooted in social
              justice themes. Freedom Studio team member facilitates the full workshop by introducing key
              concepts of artivism, guiding hands-on creation, and leading critical reflection sessions.
            </p>
          </div>
        </div>
      </div>

      {/* Project 03 */}
      <div className='py-10 md:py-20 px-4 md:px-20 h-auto'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
          <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[10vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>03</h2>
          <div className='w-full lg:w-[45%] order-2'>
            <img
              src={Artivism}
              className='w-full h-auto max-h-[500px] object-cover rounded-[2vw]'
              alt="Artivism Fellowship"
            />
          </div>
          <div className='w-full lg:w-[30%] order-3'>
            <h3 className='font-droid text-xl md:text-2xl mt-4 md:mt-10'>ARTIVISM FELLOWSHIP</h3>
            <p className='text-sm text-justify mt-2'>
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

      {/* Project 04 */}
      <div className='py-10 md:py-20 px-4 md:px-20 h-auto bg-gray-50'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
          <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[10vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>04</h2>
          <div className='w-full lg:w-[45%] order-2'>
            <img
              src={Information}
              className='w-full h-auto max-h-[500px] object-cover rounded-[2vw]'
              alt="Information Manipulation"
            />
          </div>
          <div className='w-full lg:w-[30%] order-3'>
            <h3 className='font-droid text-xl md:text-2xl mt-4 md:mt-10'>INFORMATION MANIPULATION</h3>
            <p className='text-sm text-justify mt-2'>
              This campaign tackled the urgent issue of digital mis/disinformation by engaging youth artists
              and influencers to produce creative content that challenges harmful narratives. Freedom
              Studio designed and facilitated a residential artivism workshop where 12 digital artists created
              digital content, including illustrations, photo stories, and interviews. We also launched a multiplatform social media campaign that reached over 40,000 people through both virtual
              outreach and physical screening including an open exhibition.
            </p>
          </div>
        </div>
      </div>

      {/* Project 05 */}
      <div className='py-10 md:py-20 px-4 md:px-20 h-auto'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
          <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[10vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>05</h2>
          <div className='w-full lg:w-[45%] order-2'>
            <img
              src={HumanRights}
              className='w-full h-auto max-h-[500px] object-cover rounded-[2vw]'
              alt="Human Rights Art Festival"
            />
          </div>
          <div className='w-full lg:w-[30%] order-3'>
            <h3 className='font-droid text-xl md:text-2xl mt-4 md:mt-10'>HUMAN RIGHTS ART FESTIVAL</h3>
            <p className='text-sm text-justify mt-2'>
              Annual event organized on December 10, the Human Rights Art Festival brings together
              hundreds of youth to express themes of dignity, freedom, and justice through art, music,
              dance, and poetry. Freedom Studio usually co-led the design and facilitation of the event,
              curating performances and interactive stalls that reflected culture and resistance. We also
              support storytelling and media documentation, creating a vibrant platform where young artists
              could connect with civic leaders and share their vision for a more just society. The festival
              highlights art's power to inform, inspire, and activate.
            </p>
          </div>
        </div>
      </div>

      {/* Project 06 */}
      <div className='py-10 md:py-20 px-4 md:px-20 h-auto bg-gray-50'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
          <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[10vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>06</h2>
          <div className='w-full lg:w-[45%] order-2'>
            <img
              src={Problem}
              className='w-full h-auto max-h-[500px] object-cover rounded-[2vw]'
              alt="Problem with Partnership"
            />
          </div>
          <div className='w-full lg:w-[30%] order-3'>
            <h3 className='font-droid text-xl md:text-2xl mt-4 md:mt-10'>PROBLEM WITH PARTNERSHIP</h3>
            <p className='text-sm text-justify mt-2'>
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

      {/* Project 07 */}
      <div className='py-10 md:py-20 px-4 md:px-20 h-auto'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-8'>
          <h2 className='font-droid text-[20vw] md:text-[15vw] lg:text-[10vw] tracking-normal uppercase text-neutral-200 leading-none order-1'>07</h2>
          <div className='w-full lg:w-[45%] order-2'>
            <img
              src={TooSouthern}
              className='w-full h-auto max-h-[500px] object-cover rounded-[2vw]'
              alt="Too Southern to be Funded"
            />
          </div>
          <div className='w-full lg:w-[30%] order-3'>
            <h3 className='font-droid text-xl md:text-2xl mt-4 md:mt-10'>TOO SOUTHERN TO BE FUNDED</h3>
            <p className='text-sm text-justify mt-2'>
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
      <Footer />
    </>
  );
};

export default Project;
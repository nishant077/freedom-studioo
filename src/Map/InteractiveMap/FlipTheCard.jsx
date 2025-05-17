import React from 'react';

const FlipTheCard = () => {
  const flipnote = [
    {
      front: 'Are Laws Enough?',
      back: 'Nepal has strong environmental laws, but they are not enforced. Illegal mining in the Chure continues despite Supreme Court orders.'
    },
    {
      front: 'Why Carry Dirty Water?',
      back: 'Protesters walked to Kathmandu with Sirsiya River water to show how pollution flows from ignored rural areas to national consequences.'
    },
    {
      front: 'Has any province in Nepal reserved jobs for LGBTQI+ people?',
      back: 'Yes. Lumbini Province now reserves 1% of civil service positions for sexual and gender minorities'
    },
    {
      front: 'Is there a precedent for listing small or endangered groups?',
      back: 'Yes. The Kusunda (fewer than 100 people) are officially recognized, but the Netuwa—despite being larger in number—are still ignored by the state.'
    },
    {
      front: 'Is the Kamlari system still legal in Nepal?',
      back: 'No. It was officially abolished in 2013. But despite the law, many freed Kamlaris still lack housing, education, or jobs.'
    },
    {
      front: 'Why can\'t people just take loans from banks?',
      back: 'Because many marginalized people lack collateral, credit history, or access. So they\'re forced to borrow from informal lenders at interest rates.'
    },
    {
      front: 'What is writ Petition?',
      back: 'A writ petition is a legal request to a higher court, typically the Supreme Court, to intervene in a case where an individual\'s rights are violated, or a government action is illegal. It\'s a tool to seek justice against unconstitutional practices or unlawful decisions.'
    },
    {
      front: 'What do debt, land, labor, and caste have in common?',
      back: 'They\'re tools of control when left in the hands of unchecked power. Just ask the Meter Byaji victims, Kamlari girls, Netuwa families, and Bhaktapur\'s landless farmers.'
    },
  ];

  return (
    <div className="w-full min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h3 className="font-droid text-3xl md:text-4xl text-center mb-8 text-gray-800 font-bold">
        FLIP THE MOVEMENT
      </h3>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {flipnote.map((note, index) => (
            <div 
              key={index}
              className="flip-card h-64 perspective-1000"
            >
              <div className="flip-card-inner relative w-full h-full transform-style-preserve-3d">
                {/* Front of Card */}
                <div className="flip-card-front absolute cursor-pointer inset-0 backface-hidden flex items-center justify-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
                  <div className="text-center">
                    <h3 className="text-lg font-droid mb-2 text-gray-800">{note.front}</h3>
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                      <span className="text-xs text-gray-500">Hover to flip</span>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div 
                  className="flip-card-back absolute cursor-pointer inset-0 backface-hidden flex items-center justify-center p-6 rounded-lg"
                  style={{ backgroundColor: '#9a1d20' }}
                >
                  <div className="text-center">
                    <p className="text-white text-sm">{note.back}</p>
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                      <span className="text-xs text-white opacity-70">Release to return</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default FlipTheCard;
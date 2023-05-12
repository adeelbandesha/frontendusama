

export const categoriesPrices = {
    ac: [
        {
            name: 'ac-soft-service',
            price: 128,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['cooling issue', 'other'],
            unit: "Number of units to inspect?",
            units: 1,
            additional: "Is this a furnished location?",
            
        },
        {
            name: 'repair-maintainance',
            price: 128,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['low cooling', 'too much cooling', 'no cooling', 'other'],
            unit: "Number of units to inspect?",
            units: 1,
            additional: "Is this a furnished location?"
        },
        {
            name: 'coil-cleaning',
            price: 470,
            onSurvey: false,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'Reason for coil cleaning?',
            reasons: ['dirty coils', 'higher electricity bills', 'frequent breakdowns', 'reduced life of the compressor', 'other'],
            unit: "Number of units to clean?",
            units: 1,
            additional: "Need chemical cleaning as well?",
            additionalCharges: 30
        },
        {
            name: 'duct-cleaning',
            price: 416,
            onSurvey: false,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'Reason for duct cleaning?',
            reasons: ['dirty air', 'low cooling', 'smelly air or mold', 'just a regular cleaning', 'other'],
            unit: "Number of bedrooms?",
            units: 1,
            additional: "Is this a furnished location?",
            additionalCharges: 50
        },
        {
            name: 'installation',
            price: 362,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'Reason for AC unit installation?',
            reasons: ['new room', 'improve cooling', 'replace an old ac unit', 'reduction of bill', 'other'],
            unit: "Number of AC units to install?",
            units: 1,
            additional: "Disposal of old unit needed?",
            additionalCharges: 120
        },
    ],
    painting: [
       
        {
            name: 'Color Painting',
            // for Apartment
            prz: '650',
            prz1: '830',
            prz2: '1300',
            prz3: '1900',
            prz4: '3100',
            hrs: '48hrs',
            // for villa
            prz1a: '1799',
            prz2a: '2499',
            prz3a: '3100',
            prz4a: '3900',
            hrsa: '72hrs',
            // for individual
            prz1i: '149',
            prz2i: '199',
            prz3i: '199',
            prz4i: '299',
            hrsi: '24hrs',
            additionalChargesmaid: 79,
            uni: "Villa",
            rooms: ['2 Bedroom Villa' , '3 Bedroom Villa','4 Bedroom Villa','5 Bedroom Villa'],
            onSurvey: false,
            reason: 'Appartment',
            reasons: ['Full Studio Painting ' , '1 Bedroom Apartment','2 Bedroom Apartment','3 Bedroom Apartment','4 Bedroom Apartment'],
            rea: 'Individual Area painting',
            reas: ['No. ceiling painting ' , 'No. Bedroom painting','No. Kitchen','No. dining room'],
            additional: "Is painting required both sides?"
        },
        {
            name: ' Water Damage Repair',
            text: 'Full Studio Painting',
            text1: 'No. of baedrooms',
            text2: 'No. of ceilings',
            text3: 'Individual Kitchen',
            text4: 'Individual Living room',
            prz: '449',
            prz1: '749',
            prz2: '1049',
            prz3: '1349',
            prz4: '1649',
            
            hrs: '48hrs',
            additionalChargesmaid: 79,
            uni: "Villa",
             rooms: ['Full Studio Painting ', 'No. of baedrooms','No. of ceilings','Individual Kitchen','Individual Living room'],
            price: 0,
            unis:1,
            onSurvey: false,
            reason: 'Appartment',
            reasons: ['Highly Recommended for in and out '],
            rea: 'Individual Area painting',
            reas: ['Highly Recommended for in and out '],
            unit: "How many door(s)?",
            units: 1,
            additional: "Is painting required both sides?"
        },
        {
            name: 'Off White',
              // for Apartment
              prz: '449',
              prz1: '749',
              prz2: '1049',
              prz3: '1349',
              prz4: '1649',
              hrs: '48hrs',
              // for villa
              prz1a: '1999',
              prz2a: '2499',
              prz3a: '2999',
              prz4a: '3499',
              hrsa: '72hrs',
              // for individual
              prz1i: '149',
              prz2i: '199',
              prz3i: '199',
              prz4i: '299',
              hrsi: '24hrs',
            uni: "Villa",
            rooms: ['2 Bedroom Villa' , '3 Bedroom Villa','4 Bedroom Villa','5 Bedroom Villa'],
            onSurvey: false,
            reason: 'Appartment',
            reasons: ['Full Studio Painting ' , '1 Bedroom Apartment','2 Bedroom Apartment','3 Bedroom Apartment','4 Bedroom Apartment'],
            rea: 'Individual Area painting',
            reas: ['No. ceiling painting ' , 'No. Bedroom painting','No. Kitchen','No. dining room'],
            additional: "Is painting required both sides?"
        },
         // {
        //     name: 'Off White/White',
        //     price: 218,
        //     onSurvey: false,
        //     additionalChargesmaid: 79,
        //     uni: "how many rooms",
        //     rooms: ['1 ', '2', '3 ','4','5',],
        //     reason: 'Wall(s) type or condition?',
        //     reasons: ['unpainted', 'white or off-white painted', 'decorative painted', 'wallpaper', 'other'],
        //     unit: "Area to be painted (Sqm)?",
        //     units: 10,
        //     am: "Apartment" ,
        //     vm: "Villa" ,
        //     additional: "Need color change or wallpaper removal?",
        //     additionalCharges: 3.5
        // },
        // {
        //     name: 'Off White',
        //     price: 570,
        //     unis:1,
        //     uni: "how many rooms",
        //     rooms: ['1 ', '2', '3 ','4','5',],
        //     am: "Apartment" ,
        //     vm: "Villa" ,
        //     onSurvey: false,
        //     reason: 'What is the condition?',
        //     reasons: ['no holes or cracks', 'A few holes or cracks', 'some holes or cracks', 'many holes or cracks', 'other'],
        //     unit: "How many bedrooms?",
        //     units: 1,
        //     additional: "Is the location furnished?",
        //     additionalCharges: 200
        // },
      
        // {
        //     name: 'interior-double-coat',
        //     price: 940,
        //     uni: "how many rooms",
        //     rooms: ['1 ', '2', '3 ','4','5',],
        //     am: "Apartment" ,
        //     vm: "Villa" ,
        //     onSurvey: false,
        //     reason: 'Current condition of walls?',
        //     reasons: ['no holes or cracks', 'a few holes or cracks', 'some holes or cracks', 'many holes or cracks', 'other'],
        //     unit: "How many bedrooms?",
        //     units: 1,
        //     additional: "Is the location furnished?",
        //     additionalCharges: 200
        // },
        // {
        //     name: 'exterior-villa',
        //     price: 0.00,
        //     uni: "how many rooms",
        //     rooms: ['1 ', '2', '3 ','4','5',],
        //     am: "Apartment" ,
        //     vm: "Villa" ,
        //     onSurvey: true,
        //     reason: 'Reason for exterior painting?',
        //     reasons: ['discoloration', 'change of colors', 'paint peeling off', 'damaged by weather', 'other'],
        //     unit: "How many bedrooms?",
        //     units: 1,
        //     additional: "Do you want waterproofing ?",
        // },
        // {
        //     name: 'room-painting',
        //     price: 0.00,
        //     uni: "how many rooms",
        //     rooms: ['1 ', '2', '3 ','4','5',],
        //     am: "Apartment" ,
        //     vm: "Villa" ,
        //     onSurvey: true,
        //     reason: 'Wall(s) type or condition?',
        //     reasons: ['unpainted', 'white or off-white painted', 'decorative painted', 'with wallpaper', 'other'],
        //     unit: "Perimeter of the rooms (m)?",
        //     units: 10,
        //     additional: "Ceiling painting required?"
        // },
        // {
        //     name: 'touchup-painting',
        //     price: 0.00,
        //     uni: "how many rooms",
        //     rooms: ['1 ', '2', '3 ','4','5',],
        //     am: "Apartment" ,
        //     vm: "Villa" ,
        //     onSurvey: true,
        //     reason: 'Condition of the touch up areas?',
        //     reasons: ['no holes or cracks', 'A few holes or cracks', 'some holes or cracks', 'many holes or cracks', 'other'],
        //     unit: "Number of touch up areas?",
        //     units: 4,
        //     additional: "Want us to bring the paint?"
        // },
        // {
        //     name: 'custom-painting',
        //     price: 0.00,
        //     uni: "how many rooms",
        //     rooms: ['1 ', '2', '3 ','4','5',],
        //     am: "Apartment" ,
        //     vm: "Villa" ,
        //     onSurvey: true,
        //     reason: 'What is the requirement?',
        //     reasons: ['unpainted', 'white or off-white painted', 'decorative painted', 'wallpaper', 'other'],
        //     unit: "How much area (sqm)?",
        //     units: 50,
        //     additional: "Is this a furnished location?"
        // },
    ],
    deepcleaning: [
        {
            name: 'Kitchen',
            priceUtilizer: 199,
            price: 129,
            onSurvey: false,
            reason: 'Kitchen Deep Cleaning',
            reasons: ['regular cleaning','pre party cleaning'],
            rooms: ['regular cleaning','pre party cleaning'],
            unit: "1",
            uni:"Kitchen cleaning with utilizers",
            additional: "Need cleaning materials?",
            additionalCharges: 20,
        },
        {
            name: 'Bathroom',
            price1: 89,
            price2: 169,
            price3: 239,
            price4: 299,
            onSurvey: false,
            reason: 'Bathroom Cleaning',
            reasons: ['1 Bathroom','2 Bathroom', '3 Bathroom', '4 Bathroom',],
            additional: "Need steam cleaning?",
            additionalCharges: 50,
        },
        {
            name: 'Full Home',
            // For Apartment
            price: 299,
            price1: 449,
            price2: 449,
            price3: 799,
            price4: 1099,
            price5: 1449,
            onSurvey: false,
            reason: 'Deep cleaning-Apartment',
            reasons: ['studio','1 BHK','2 BHk','3 BHK','4 BHK','5 BHK'],
            // for Villa
            pricev: 999,
            price1v: 999,
            price2v: 1199,
            price3v: 1699,
            price4v: 1999,
            price5v: 2349,
            uni: "Deep cleaning-Villa",
            rooms: ['2 BHK','3 BHk','4 BHK','5 BHK','6 BHK'],
            additional: "Need machine buffing?",
            additionalCharges: 50,
            
        },
        {
            name: 'Balcony',
            price: 49,
            price1: 59,
            price2: 79,
            onSurvey: false,
            reason: 'Balcony Deep Cleaning',
            reasons: ['Small Balcony(0-25 SFT)', 'Medium Balcony(25-50 SFT)', 'Large Balcony(Above 50 SFT)'],
            additional: "Has the paint discolored?",
            additionalCharges: 79
        },
        {
            name: 'sofa-cleaning',
            // for Fabric
            price: 49,
            price1: 89,
            price2: 109,
            price3: 149,
            price4: 119,
            // for leather
            priceL: 59,
            price1L: 99,
            price2L: 119,
            price3L: 159,
            price4L: 129,
            // for Cum Bed
            priceC: 69,
            price1C: 99,
            price2C: 119,
            price3C: 249,
            price4C: 139,
            onSurvey: false,
            reason: 'Fabric & Sueda Sofa',
            reasons: ['1 seater sofa','2 seater sofa', '3 seater sofa','3 seater(L Shaped)', '4 seater sofa'],
            rooms: ['1 seater sofa','2 seater sofa', '3 seater sofa','3 seater(L Shaped)', '4 seater sofa'],
            uni:"Leather Sofa?",
            rea: 'Sofa Cum Bed',
            reas: ['1 seater sofa','2 seater sofa', '3 seater sofa','3 seater(L Shaped)', '4 seater sofa'],
            additional: "Need steam cleaning?",
            additionalChargesmaid: 79,
            additionalCharges: 20
        },
        {
            name: 'Carpet cleaning',
            price: 39,
            price1: 9,
            price2: 129,
            price3: 19,
            onSurvey: false,
            reason: 'Add Ones',
            reasons: ['Chair Cleaning','Cushion cleaning', 'Mattress Cleaning', 'pillo Cleaning'], 
            additional: "Is this a furnished location?",
            additionalCharges: 100
        },
        {
            name: 'Add Ones',
            price: 39,
            price1: 9,
            price2: 129,
            price3: 19,
            onSurvey: false,
            reason: 'Add Ones',
            reasons: ['Chair Cleaning','Cushion cleaning', 'Mattress Cleaning', 'pillo Cleaning'], 
            additional: "Is this a furnished location?",
            additionalCharges: 100
        },
    ],
    electrical: [
        {
            name: 'shutdown-repair',
            price: 128,
           
            onSurvey: false,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'Where is the shutdown?',
            reasons: ['kitchen', 'bathroom', 'bedroom', 'outdoor', 'other'],
            unit: "Number of rooms effected?",
            units: 1,
            additional: "Is the electricity bill paid?"
        },
        {
            name: 'fixture-or-repair',
            price: 0.00,
           
            onSurvey: true,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'What is the issue?',
            reasons: ['broken', 'not working', 'better design', 'tripping', 'other'],
            unit: "Number of fixtures to inspect?",
            units: 1,
            additional: "Is this a furnished location?"
        },
        {
            name: 'electrical-fitting',
            price: 0.00,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Where to install?',
            reasons: ['kitchen', 'bathroom', 'bedroom', 'outdoor or garden', 'living room', 'other'],
            unit: "Number of fittings to install?",
            units: 1,
            additional: "Is it inside false ceiling?"
        },
        {
            name: 'power-switches-repair',
            price: 128,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['broken', 'not working', 'better design', 'tripping', 'other'],
            unit: "Number of units to inspect?",
            units: 1,
            unitsCharges: 25,
            additional: "Is this a furnished location?"
        },
        {
            name: 'heater-or-gyser-replacement',
            price: 128,
            
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['not or slow heating', 'leaking', 'over heating', 'rusty or discolored water', 'other'],
            unit: "Number of heaters to inspect?",
            units: 1,
            unitsCharges: 50,
            additional: "Is this a furnished location?"
        }
    ],
    plumbing: [
        {
            name: 'large-fixture',
            price: 128,
             am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['broken', 'clogged', 'better quality', 'leaking', 'other'],
            unit: "Number of fixtures to repair?",
            unitCharges: 50,
            units: 1,
            additional: "Is this a furnished location?"
        },
        {
            name: 'pipe-unclogging',
            price: 128,
           
            onSurvey: false,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'Where is the clogging?',
            reasons: ['kitchen', 'bathroom', 'outdoor or garden', 'whole house', 'other'],
            unit: "Number of pipes clogged?",
            unitCharges: 25,
            units: 1,
            additional: "Is this a furnished location?"
        },
        {
            name: 'water-leakage',
            price: 128,
           
            onSurvey: false,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'Where is the mold?',
            reasons: ['kitchen', 'bathroom', 'outdoor or garden', 'whole house', 'other'],
            unit: "Number of places with leakage?",
            units: 1,
            additional: "Is the mold black in color?"
        },
        {
            name: 'water-overflow-repair',
            price: 128,
           
            onSurvey: false,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'Location of the water tank?',
            reasons: ['kitchen', 'bathroom', 'garden', 'carport', 'other'],
            unit: "Size of tank (litres)?",
            units: 4000,
            additional: "Is it underground?"
        },
        {
            name: 'pump-or-motor-repair',
            price: 128,
            onSurvey: false,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'What is the issue?',
            reasons: ['not starting or jammed', 'too noisy', 'low or no pressure', 'leaking', 'other'],
            unit: "Number of pumps to repair?",
            unitCharges: 50,
            units: 1,
            additional: "Is this a furnished location?"
        },
    ],
   
    gardening: [
        {
            name: 'pruning-or-trimming',
            price: 128,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'Reason for pruning or trimming?',
            reasons: ['regular pruning or trimming', 'post holiday pruning or trimming', 'long overdue pruning or trimming', 'other'],
            unit: "Size of the garden (sqm)?",
            units: 500,
            additional: "Need junk removal aswell?"

            
        },
        {
            name: 'sprinkler-or-drip-repair',
            price: 148,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['not working', 'flooding', 'low pressure', 'other'],
            unit: "Size of the garden (sqm)?",
            units: 500,
           
            additional: "Is it maintained?"
        },
        {
            name: 'lawn-grass-carpeting',
            price: 0.00,
            
            am: "Apartment" ,
           
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Location of the grass?',
            reasons: ['Terrace or ballconies', 'outdoor garden', 'kids playarea', 'pool side', 'other'],
            unit: "Area to cover (sqm)?",
            units: 100,
            additional: "Need natural grass?"
        },
        {
            name: 'tree-or-stump-cutting',
        
            price: 0.00,
          
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Type of tree?',
            reasons: ['gulmohar', 'daman', 'palm', 'other'],
            unit: "How many trees or stumps?",
            units: 1,
            additional: "Do you need transportation?"
        },
        {
            name: 'fake-grass-installation',
            price: 0.00,
            
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Location of the grass?',
            reasons: ['Terrace or ballconies', 'outdoor garden', 'kids playarea', 'pool side', 'other'],
            unit: "Area to cover (sqm)?",
            units: 100,
            
            additional: "Need artifical grass?"
        },
        {
            name: 'sail-shade-installation',
            price: 0.00,
           
            onSurvey: true,
            am: "Apartment" ,
           
            vm: "Villa" ,
            reason: 'Location of the shade?',
            reasons: ['backyard', 'pergola cover', 'fence cover', 'entryway', 'kids playarea', 'carpet', 'pool', 'other'],
            unit: "Area to cover (sqm)?",
            
            units: 10,
            additional: "Need sail shade and fittings?"
        },
        {
            name: 'tree-or-flower-painting',
            am: "Apartment" ,
            vm: "Villa" ,
            price: 0.00,
           
            onSurvey: true,
            reason: 'Type of trees or flowers?',
           
            reasons: ['flowers', 'trees', 'both flowers and trees'],
            unit: "Size of the garden (sqm)?",
            units: 500,
            additional: "Need plants or/and trees also?"
        },
        {
            name: 'garden-landscaping',
           
            price: 0.00,
          
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Reason for landscaping?',
            reasons: ['beautify the outdoors', 'utilize the garden area', 'increase property value', 'improve energy utilization', 'other'],
            unit: "Size of the garden (sqm)?",
            units: 500,
            additional: "You have a design?"
        }
    ],
    glasswork: [
        {
            name: 'door-glass-replacement',
            price: 0.00,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Reason for replacement?',
            reasons: ['cracked or broken', 'worn out', 'just need a change', 'other'],
            unit: "How many doors?",
            units: 1,
            additional: "Need decorative glass?"
        },
        {
            name: 'window-glass-replacement',
            price: 0.00,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Reason for replacement?',
            reasons: ['cracked or broken', 'worn out', 'just need a change', 'other'],
            unit: "How many windows?",
            units: 1,
            additional: "Need decorative glass?"
        },
        {
            name: 'tabletop-glass-cutting',
            price: 0.00,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Purpose of the glass slab?',
            reasons: ['dining table', 'center table in living room', 'coffee table in living room', 'bedroom side table', 'other'],
            unit: "Size of glass (sqft)?",
            units: 1,
            additional: "Need rounded edges?"
        },
        {
            name: 'glass-partition-fabrication',
            price: 0.00,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Location of partition?',
            reasons: ['bathroom', 'storage', 'kitchen', 'living room', 'other'],
            unit: "How much area (sqft)?",
            units: 50,
            additional: "Need mounting?"
        },
        {
            name: 'bathroom-glass-fabrication',
            price: 0.00,
         
            onSurvey: true,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'Type of glass preffered?',
            reasons: ['transparent glass', 'storage', 'kitchen', 'living room', 'other'],
            unit: "How much covered area (sqft)?",
            units: 5,
            additional: "Need installation?"
        },
        {
            name: 'mirror-work',
          
            price: 0.00,
           
            onSurvey: true,
            am: "Apartment" ,
            vm: "Villa" ,
            reason: 'Location of mirror?',
            reasons: ['dreasor mirror', 'bathroom mirror', 'mirror wall', 'other'],
            unit: "How much area (sqft)?",
            units: 5,
            additional: "Need mounting?"
        },
        {
            name: 'glass-staircase-fabrication',
     
            price: 0.00,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Type of glass staircase?',
            reasons: ['with glass steps', 'only glass railings', 'both glass railing and steps', 'other'],
            unit: "Number of steps?",
            units: 1,
            additional: "Need railing?"
        },
        {
            name: 'glass-door-fabrication',
            price: 0.00,
            
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Type of glass?',
            reasons: ['transparent', 'frosted', 'opaque', 'other'],
            unit: "Number of doors?",
            units: 1,
            additional: "Need installation?"
        },
        {
            name: 'door-window-glass-tint',
            price: 0.00,
         
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Reason for tinting?',
            reasons: ['provide privacy', 'protect from the heat', 'too much sunlight', 'other'],
            unit: "Number of doors and windows?",
            units: 1,
            additional: "Need full blackout?"
        },
        {
            name: 'custom-glass-job',
           
            price: 0.00,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'What is the requirement?',
            reasons: ['decorative glasswork', 'glass facade work', 'other'],
            unit: "How many items?",
            units: 1,
            additional: "Do you have a design?"
        },
    ],
    handyman: [
        {
            name: 'curtains-fixing',
            price: 135,
            am: "Apartment" ,
            additionalChargesmaid: 79,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'Type of curtains?',
            reasons: ['curtains with red or poles', 'curtains with tracks', 'other'],
            
           
            units: 1,
            unis:1,
            additional: "Do you have all the fittings?"
        },
        {
            name: 'flynet-screen-or-flynet-repair',
            price: 135,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['torn screen', 'frame broken or twisted', 'lock issue', 'other'],
            unit: "Number of doors mesh to repair?",
            units: 1,
            additional: "Need flynet mesh as well?",
            additionalCharges: 300
        },
        {
            name: 'chandelier-hanging',
            price: 0.00,
            additionalChargesmaid: 79,
            onSurvey: true,
            reason: 'Weight of the chandelier?',
            reasons: ['5', '10', '15', 'other'],
            unit: "Number of chandelier to hang?",
            units: 1,
            additional: "Do you have the hanging kit?"
        },
        {
            name: 'decorative-lights-hanging',
            price: 0.00,
            onSurvey: true,
            reason: 'What type of lights?',
            reasons: ['internal string lights', 'christmas tree lights', 'villa exterior lighting', 'other'],
            unit: "Length of light string (m)?",
            units: 5,
            unis:1,
            additional: "Do you have the lights?"
        },
        {
            name: 'modular-furniture-assembly',
            price: 135,
            onSurvey: false,
            reason: 'What are the articles?',
            reasons: ['small items e.g chairs', 'medium items e.g tables', 'large items e.g cupboards', 'other'],
            unit: "Number of hours needed?",
            units: 1,
            unis:1,
            additional: "Do you have all the assemble?"
        },
        {
            name: 'wall-fixtures-hanging',
            price: 135,
            onSurvey: false,
            reason: 'What are the fixtures?',
            reasons: ['paintings', 'mirrors', 'photos', 'decorative items', 'other'],
        
            unit: "Number of hours needed?",
            units: 1,
            unis:1,
            additional: "Do you have the wall hanging?"
        },
        {
            name: 'lcd-tv-mounting',
           
            onSurvey: false,
            reason: 'Size of the screen?',
            reasons: ['upto 55 inches', 'between 55 to 65 inches', 'more than 65 inches', 'just table top mounting', 'other'],
           
            unit: "Number of hours needed?",
            units: 1,
            unis:1,
            additional: "Do you have the wall mount?"
        },
        {
            name: 'door-locks-repair',
          
            price: 128,
         
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['broken lock handle or knob', 'lock not working', 'lost door lock key', 'locked out', 'other'],
          
            unit: "Number of locks or knobs?",
           
            additional: "Do you have the new locks?"
        },
        {
            name: 'blinds-installation',
            price: 135,
            
            onSurvey: false,
            reason: 'Type of blind?',
            reasons: ['soft rollup blinds', 'soft vertical blinds', 'venetian wooden blinds', 'other'],
          
            unit: "Number of hours needed?",
            units: 1,
            unis:1,
            additional: "Do you have the fittings?"
        },
        {
            name: 'other-handyman-jobs',
            price: 0.00,
            onSurvey: true,
            reason: 'What is the issue?',
            reasons: ['other'],
         
            unit: "Number of units to inspect?",
            units: 1,
            unis:1,
            additional: "Do you have the material?",
            additionalChargesmaid: 79,
        }
    ],
    appliances: [
        {
            name: 'dishwasher-repair',
            price: 128,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['door not closing and opening', 'not draining', 'not draining', 'not starting or tripping', 'leaking', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
            units: 1,
            additional: "Want us to inspect at home?",
            additionalCharges:70
        },
        {
            name: 'deep-freezer-repair',
            price: 128,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['door not closing and opening', 'not draining', 'not draining', 'not starting or tripping', 'leaking', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
            units: 1,
            additional: "Want us to inspect at home?",
            additionalCharges:70
        },
        {
            name: 'exhaust-fan-repair',
            price: 98,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['not starting', 'too noisy', 'not working properly', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
            units: 1,
            additional: "Want us to inspect at home?",
            additionalCharges:70
        },
        {
            name: 'cooking-range-repair',
            price: 128,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['not heating', 'not heating properly', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
            units: 1,
            additional: "Want us to inspect at home?",
            additionalCharges:70
        },
        {
            name: 'extractor-hood-repair',
            price: 128,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['clogged', 'not working', 'not working properly', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
            units: 1,
            additional: "Want us to inspect at home?",
            additionalCharges:70
        },
        {
            name: 'washing-machine-or-dryer-repair',
            price: 128,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['too noisy', 'not working', 'not working properly', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
            units: 1,
            additional: "Want us to inspect at home?",
            
            additionalCharges:70


        },
        {
            name: 'water-purifier-repair',
            price: 98,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['leaking', 'not heating or cooling', 'water tasting bad', 'water coming dirty', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
            units: 1,
            additional: "Want us to inspect at home?",
            additionalCharges:70
        },
        {
            name: 'fridge-repair',
            price: 128,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['too noisy', 'door not closing', 'not cooling enough', 'not starting or tripping', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
            units: 1,
            additional: "Want us to inspect at home?",
           
        },
        {
            name: 'water-dispenser-repair',
            price: 99,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'What is the issue?',
            reasons: ['leaking', 'not heating or cooling', 'water tasting bad', 'not switching on', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
            
            units: 1,
            additional: "Want us to inspect at home?",
            additionalCharges:70
        },
        {
            name: 'microwave-repair',
            price: 128,
           
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'Issue with the microwave?',
            reasons: ['plate not spinning', 'not heating food', 'microwave making noise', 'plate has broken', 'other'],
            unit: "Number of units to inspect?",
            unitsCharges: 50,
        
            units: 1,
            additional: "Want us to inspect at home?",
            additionalCharges:70
        },
        {
            name: 'appliance-installation',
          
            price: 128,
            unis:1,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'Type of appliance?',
            reasons: ['dishwasher', 'fridge', 'washing maching or dryer', 'cooking range or oven', 'extractor hood', 'water dispenser', 'other'],
            unit: "Number of appliances to install?",
            units: 1,
            additional: "Want us to inspect at home?",
            additionalCharges:70
        },
        {
            name: 'custom-appliance-job',
            price: 0.00,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Appliance related service?',
            reasons: ['appliance replacement', 'appliance relocation', 'appliance deep cleaning', 'other'],
            unit: "Number of units?",
            units: 1,
            additional: "Is this a furnished location?"
        }
    ],
    specialized: [
        {
            name: 'covid-sanitization',
            price: 0.00,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Reason for disinfectant?',
            reasons: ['COVID-19 exposure', 'regular disinfection', 'move-in disinfection', 'other'],
            unit: "Number of rooms?",
            units: 1,
            additional: "Do you require home cleaning?"
        },
        {
            name: 'wrap-innovative-renovations',
            price: 0.00,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'Type of wrap required?',
            reasons: ['full kitchen wrap', 'interior door wrap', 'bathroom wrap', 'flooring', 'other'],
            unit: "Blind up area (sq ft)?",
            units: 1000,
            additional: "Is the home furnished?"
        },
        {
            name: 'grout-cleaning',
            price: 147,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'Type of service required?',
            reasons: ['grout restoration', 'grout cleaning', 'ceiling title restoration', 'other'],
            unit: "Number of rooms?",
            units: 1,
            additional: "D you require polishing?"
        },
        {
            name: 'leather-restoration',
            price: 147,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: false,
            reason: 'Type of service required?',
            reasons: ['leather repair', 'leather cleaning', 'color restoration', 'other'],
            unit: "Number of items?",
            units: 1,
            additional: "D you require leather polishing?"
        }
    ],
    custom: [
        {
            name: 'custom',
            price: 0.00,
            am: "Apartment" ,
            vm: "Villa" ,
            onSurvey: true,
            reason: 'What is issue?',
            reasons: [ 'Pre-Survey'],
            unit: "Number of units to Apartment or Villa?",
            units: 1,
            additional: "Is this a furnished location?"
        },
    ]
}
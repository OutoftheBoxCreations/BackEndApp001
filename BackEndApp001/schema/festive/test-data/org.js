﻿const Organizations = [
    {
        id: '8dlx7ak38fd39dv79ad',
        name: 'Orinami Olatunji',
        twitterHandle: '@orinami_'
    },
    {
        id: 'jd3kd03d0w9a0l35rh74',
        name: 'Ojima Udale',
        twitterHandle: '@uncooloj'
    },
    {
        id: '0hy894hf0dlkfh9oinv',
        name: 'Xabi Alonso',
        twitterHandle: '@alonso'
    }
];


name: string,
'registration_status': string, //(Registered, Unregistered, In-Process)
'registration_Number': string,
centres = {
    number: int, //(0=online, 1 - n = #centres)
    name: string,
    type: string, //(headquarter, office, co-working, hotspot, information-centre,)
    'location' : {
        line1: string,
        line2: string, //(Optional)
        "street-addres": string,
        locality: string,
        landmark: string,
        city: string,
        state: string, //(Auto-Suggest)
        "zip-code": string, //(Auto-Detect)
        country: string,
        "languages-supported": string,
        "time-zone": string, //(Auto-Detect)
    },

},
personell = {
    "role-type": "Founder",
    status: "Active", //(Active, Inactive, Retired, Deceased)
    name: "",
    age: "",
    gender: "",
    "mobile-number": "+##-#####-#####",
    "email-id": "abc@xyz.com",
    "id-proofs": { //(Aadhar, Passport, PAN, VoterID, Ration Card)
        number: 1,
        type: "Aadhar",
        id: "",
        expiry: ""
    },
    "social-handles": { //(FB, LinkedIn, Twitter, Blogspot)
        number: 1,
        platform: "Facebook",
        link: "",
        loggedin: "yes"
    },
}
/**/
module.exports = Organizations;